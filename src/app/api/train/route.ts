// app/api/process-images/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { PrismaClient } from "@/generated/prisma";
import FormData from "form-data";
import fetch from "node-fetch";

const prisma = new PrismaClient();

interface FeatureResponse {
  edge_count: number;
  aspect_ratio: number;
  brightness: number;
  largest_area: number;
  symmetry: number;
}

interface ProcessResult {
  file: string;
  status: "success" | "error";
  id?: number;
  message?: string;
}

export async function GET(): Promise<NextResponse> {
  try {
    // Path to images directory
    const imagesDir = "C:\\NEXT\\IPVProject\\dataset\\images\\Humans";

    // Get all files in the directory
    const files = fs.readdirSync(imagesDir);
    const imageFiles = files.filter((file) =>
      [".jpg", ".jpeg", ".png", ".bmp"].includes(
        path.extname(file).toLowerCase()
      )
    );

    console.log(`Found ${imageFiles.length} images to process`);

    // Process each image
    const results: ProcessResult[] = [];

    for (const imageFile of imageFiles) {
      const imagePath = path.join(imagesDir, imageFile);
      console.log(`Processing ${imagePath}`);

      try {
        // Create form data with image
        const formData = new FormData();
        const fileBuffer = fs.readFileSync(imagePath);
        formData.append("image", fileBuffer, { filename: imageFile });

        // Send to Flask endpoint
        const response = await fetch("http://127.0.0.1:5000/extract", {
          method: "POST",
          body: formData as any, // Type cast required due to node-fetch and form-data compatibility
          headers: formData.getHeaders(),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error(`Error processing ${imageFile}: ${errorText}`);
          results.push({
            file: imageFile,
            status: "error",
            message: errorText,
          });
          continue;
        }

        const featureData = (await response.json()) as FeatureResponse;

        // Save to database
        const savedData = await prisma.trainingData.create({
          data: {
            edgeCount: featureData.edge_count.toString(),
            aspectRatio: featureData.aspect_ratio.toString(),
            brightness: featureData.brightness.toString(),
            largestArea: featureData.largest_area.toString(),
            symmetry: featureData.symmetry.toString(),
            label: "Human", // Assuming "Humans" folder means these are labeled as humans
          },
        });

        results.push({
          file: imageFile,
          status: "success",
          id: savedData.id,
        });

        console.log(
          `Successfully processed ${imageFile} - ID: ${savedData.id}`
        );
      } catch (error: any) {
        console.error(`Error with ${imageFile}:`, error);
        results.push({
          file: imageFile,
          status: "error",
          message: error.message,
        });
      }
    }

    return NextResponse.json({
      processed: results.length,
      successful: results.filter((r) => r.status === "success").length,
      failed: results.filter((r) => r.status === "error").length,
      results,
    });
  } catch (error: any) {
    console.error("Failed to process images:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
