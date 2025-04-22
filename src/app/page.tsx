"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [processedUrl, setProcessedUrl] = useState<string | null>(null);
  const [operation, setOperation] = useState("erosion");
  const [kernelSize, setKernelSize] = useState(5);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async () => {
    if (!image) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);
    formData.append("operation", operation);
    formData.append("kernelSize", kernelSize.toString());

    try {
      const res = await fetch("http://localhost:5000/process", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Processing failed");
      
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setProcessedUrl(url);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-[83vw] grid grid-cols-5 gap-2 pt-16">
        <div className="w-full col-span-4 border-r-2 border-solid border-muted p-4 h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="image-upload">Upload Image</Label>
              <div className="flex items-center gap-2">
                <Input 
                  ref={fileInputRef}
                  id="image-upload" 
                  type="file" 
                  accept="image/*" 
                  onChange={handleChange}
                  className="hidden" 
                />
                <Button 
                  type="button"
                  onClick={handleUploadClick}
                  className="flex-shrink-0"
                  variant="outline"
                >
                  Choose File
                </Button>
                <span className="text-sm text-muted-foreground truncate">
                  {image ? image.name : "No file selected"}
                </span>
              </div>
            </div>
            
            <div className="flex gap-4 flex-col md:flex-row">
              <div className="grid w-full items-center gap-1.5">
                <Label>Operation</Label>
                <Select value={operation} onValueChange={setOperation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select operation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="erosion">Erosion</SelectItem>
                    <SelectItem value="dilation">Dilation</SelectItem>
                    <SelectItem value="opening">Opening</SelectItem>
                    <SelectItem value="closing">Closing</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label>Kernel Size</Label>
                <Input
                  type="number"
                  value={kernelSize}
                  onChange={(e) => setKernelSize(Number(e.target.value))}
                  min="1"
                  max="21"
                  step="2"
                />
              </div>
            </div>

            <Button 
              onClick={handleSubmit} 
              disabled={!image || loading}
              className="mt-4"
            >
              {loading ? "Processing..." : "Process Image"}
            </Button>
          </div>
        </div>

        <div className="w-full col-span-1 p-4 h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="grid grid-rows-2 gap-4 h-full">
            <div className="bg-muted rounded-md p-2 flex items-center justify-center min-h-[300px]">
              {previewUrl ? (
                <Image
                  src={previewUrl}
                  alt="Original"
                  width={300}
                  height={300}
                  className="rounded-md object-contain w-full h-full"
                />
              ) : (
                <span className="text-muted-foreground">Original Image</span>
              )}
            </div>
            
            <div className="bg-muted rounded-md p-2 flex items-center justify-center min-h-[300px]">
              {processedUrl ? (
                <Image
                  src={processedUrl}
                  alt="Processed"
                  width={300}
                  height={300}
                  className="rounded-md object-contain w-full h-full"
                />
              ) : (
                <span className="text-muted-foreground">Processed Image</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}