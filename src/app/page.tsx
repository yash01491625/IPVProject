"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChange = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    if (image) {
      formData.append("image", image);
    } else {
      console.error("No image selected");
      return;
    }

    const res = await fetch("http://localhost:5000/process", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <div className="w-[83vw] grid grid-cols-5 gap-2">
          <div className="w-full col-span-4 border-r-2 border-solid border-muted">
            <div className="mt-18 flex flex-col">
              <Input type="file" accept="image/*" onChange={handleChange} />
              <Button onClick={handleSubmit}>Upload</Button>
            </div>
          </div>
          <div className="w-full col-span-1">
            <div className="mt-18 grid grid-rows-3 gap-3 w-full h-[90%] p-1">
              <div
                className={`row-span-1 bg-muted rounded-md p-2 ${
                  previewUrl ? "" : "animate-pulse"
                }`}
              >
                {previewUrl && (
                  <Image
                    src={previewUrl}
                    alt="Preview"
                    width={300}
                    height={300}
                    className="rounded-md object-cover w-full h-full"
                  />
                )}
              </div>
              <div className="row-span-1 bg-muted rounded-md p-2 animate-pulse" />
              <div className="row-span-1 bg-muted rounded-md p-2 animate-pulse" />
            </div>
          </div>
        </div>
      </SidebarProvider>
    </>
  );
}
