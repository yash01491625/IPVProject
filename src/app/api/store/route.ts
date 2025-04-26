import { PrismaClient } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

function binAspectRatio(n: number) {
  if (n < 0.75) return "Low";
  if (n < 1.25) return "Medium";
  return "High";
}

function binEdgeCount(n: number) {
  if (n < 18281) return "Low";
  if (n < 48681) return "Medium";
  return "High";
}

function binBrightness(n: number) {
  if (n < 80.12) return "Low";
  if (n < 124.2) return "Medium";
  return "High";
}

function binLargestArea(n: number) {
  if (n < 53808) return "Low";
  if (n < 287353) return "Medium";
  return "High";
}

function binSymmetry(n: number) {
  if (n < 110.86) return "Low";
  if (n < 139.29) return "Medium";
  return "High";
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    let edgeCount = formData.get("edgeCount") as string;
    let aspectRatio = formData.get("aspectRatio") as string;
    let brightness = formData.get("brightness") as string;
    let largestArea = formData.get("largestArea") as string;
    let symmetry = formData.get("symmetry") as string;
    let label = formData.get("label") as string;

    edgeCount = binEdgeCount(Number(edgeCount));
    aspectRatio = binAspectRatio(Number(aspectRatio));
    brightness = binBrightness(Number(brightness));
    largestArea = binLargestArea(Number(largestArea));
    symmetry = binSymmetry(Number(symmetry));

    const saved = await prisma.trainingData.create({
      data: {
        edgeCount,
        aspectRatio,
        brightness,
        largestArea,
        symmetry,
        label,
      },
    });

    const totalCount = await prisma.trainingData.count();
    const humanCount = await prisma.trainingData.count({
      where: { label: "Human" },
    });
    const notHumanCount = await prisma.trainingData.count({
      where: { label: "Not Human" },
    });

    const humanProb = humanCount / totalCount;
    const notHumanProb = notHumanCount / totalCount;

    const meta = await prisma.nBMetadata.update({
      where: { id: 1 },
      data: {
        probHuman: humanProb,
        probNotHuman: notHumanProb,
      },
    });

    return NextResponse.json(saved, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
