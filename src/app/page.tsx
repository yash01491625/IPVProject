"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useImageContext } from "./providers/ImageProvider";
import ModifiedChart from "@/components/ui/modified-chart";
import { useFilterContext } from "./providers/operationProvider";
import { Slider } from "@/components/ui/slider";

export default function Home() {
  const { image, previewUrl } = useImageContext();
  const { isErosion, isDilation, isOpening, isClosing, isImageLoaded } =
    useFilterContext();

  const [histogramData, setHistogramData] = useState<number[]>([]);
  const [fftImage, setFftImage] = useState<string>("");
  const [kernelSize, setKernelSize] = useState(5);
  const [kernelType, setKernelType] = useState("");
  const [processedUrl, setProcessedUrl] = useState<string | null>(null);

  const sendImageAndGetHistogram = async (image: File) => {
    const formData = new FormData();
    formData.append("image", image);

    const res = await fetch("http://localhost:5000/histogram", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setHistogramData(data.histogram);
  };

  const sendImageAndGetFFTImage = async (image: File) => {
    const formData = new FormData();
    formData.append("image", image);

    const res = await fetch("http://localhost:5000/frequency", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setFftImage(`data:image/png;base64,${data.frequency_image}`);
  };

  const sendImageForErosion = async (image: File) => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("kernelType", kernelType);
    formData.append("kernelSize", kernelSize.toString());

    const res = await fetch("http://localhost:5000/erosion", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setProcessedUrl(`data:image/png;base64,${data.eroded_image}`);
  };

  useEffect(() => {
    if (image) {
      sendImageAndGetHistogram(image);
      sendImageAndGetFFTImage(image);
    }
  }, [image]);

  useEffect(() => {
    if (image) {
      sendImageForErosion(image);
    }
  }, [kernelSize, kernelType]);

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <div className="w-[83vw] grid grid-cols-5 gap-2">
          <div className="w-full col-span-4 border-r-2 border-solid border-muted">
            <div className="mt-28 flex justify-center items-center">
              {isImageLoaded && (
                <div
                  className={`h-180 w-190 ${
                    previewUrl ? "bg-card" : "bg-muted"
                  }  ${
                    previewUrl ? " border-muted border-2" : ""
                  } rounded-md p-2  ${previewUrl ? "" : "animate-pulse"}`}
                >
                  {previewUrl && (
                    <Image
                      src={previewUrl}
                      alt="Preview"
                      height={250}
                      width={250}
                      className="rounded-md object-contain w-full h-full"
                    />
                  )}
                </div>
              )}
              {isErosion && (
                <div className="flex flex-col items-center justify-center">
                  <div
                    className={`h-135 w-180 ${
                      processedUrl ? "bg-card" : "bg-muted"
                    }  ${
                      processedUrl ? " border-muted border-2" : ""
                    } rounded-md p-2  ${
                      processedUrl ? "" : "animate-pulse"
                    } mb-10`}
                  >
                    {processedUrl && (
                      <Image
                        src={processedUrl}
                        alt="Preview"
                        height={250}
                        width={250}
                        className="rounded-md object-contain w-full h-full"
                      />
                    )}
                  </div>
                  <div
                    className={`h-45 w-230 ${
                      previewUrl ? "bg-card" : "bg-muted"
                    }  ${
                      previewUrl ? " border-muted border-2" : ""
                    } rounded-md p-2 flex flex-row gap-3 ${
                      previewUrl ? "" : ""
                    }`}
                  >
                    <div
                      onClick={() => {
                        setKernelType("rect");
                      }}
                      className={`${
                        kernelType === "rect" ? "border-2 border-primary" : ""
                      } w-45 h-full rounded-md bg-card grid grid-cols-5 gap-2 p-1 justify-center items-center hover:scale-97 tarnsition-all duration-200 ease-in-out active:scale-90`}
                    >
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                    </div>

                    <div
                      onClick={() => {
                        setKernelType("ellipse");
                      }}
                      className={` ${
                        kernelType === "ellipse"
                          ? "border-2 border-primary"
                          : ""
                      } w-45 h-full rounded-md bg-card grid grid-cols-5 gap-2 p-1 justify-center items-center hover:scale-97 tarnsition-all duration-200 ease-in-out active:scale-90`}
                    >
                      <div className="w-6 h-6 bg-muted rounded-[3px]" />
                      <div className="w-6 h-6 bg-muted rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-muted rounded-[3px]" />
                      <div className="w-6 h-6 bg-muted rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-muted rounded-[3px]" />
                      <div className="w-6 h-6 bg-muted rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-muted rounded-[3px]" />
                      <div className="w-6 h-6 bg-muted rounded-[3px]" />
                    </div>

                    <div
                      onClick={() => {
                        setKernelType("cross");
                      }}
                      className={`${
                        kernelType === "cross" ? "border-2 border-primary" : ""
                      } w-45 h-full rounded-md bg-card grid grid-cols-5 gap-2 p-1 justify-center items-center hover:scale-97 tarnsition-all duration-200 ease-in-out active:scale-90`}
                    >
                      <div className="w-6 h-6 bg-muted rounded-[3px]" />
                      <div className="w-6 h-6 bg-muted rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-muted rounded-[3px]" />
                      <div className="w-6 h-6 bg-muted rounded-[3px]" />
                      <div className="w-6 h-6 bg-muted rounded-[3px]" />
                      <div className="w-6 h-6 bg-muted rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-muted rounded-[3px]" />
                      <div className="w-6 h-6 bg-muted rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-muted rounded-[3px]" />
                      <div className="w-6 h-6 bg-muted rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-muted rounded-[3px]" />
                      <div className="w-6 h-6 bg-muted rounded-[3px]" />
                      <div className="w-6 h-6 bg-muted rounded-[3px]" />
                      <div className="w-6 h-6 bg-muted rounded-[3px]" />
                      <div className="w-6 h-6 bg-primary rounded-[3px]" />
                      <div className="w-6 h-6 bg-muted rounded-[3px]" />
                      <div className="w-6 h-6 bg-muted rounded-[3px]" />
                    </div>

                    <div className="w-80 h-full rounded-md bg-card flex justify-center items-center p-10">
                      <Slider
                        defaultValue={[kernelSize]}
                        min={1}
                        max={100}
                        step={2}
                        onValueChange={(value) => {
                          setKernelSize(value[0]);
                        }}
                        className="w-full "
                      />
                    </div>
                  </div>
                </div>
              )}
              {isDilation && <div>dilation</div>}
              {isOpening && <div>opening</div>}
              {isClosing && <div>closing</div>}
            </div>
          </div>
          <div className="w-full col-span-1">
            <div className="mt-18 flex-col">
              <div
                className={`h-[250px] w-full mt-20  mb-5 ${
                  previewUrl ? "bg-card" : "bg-muted"
                } rounded-md ${
                  previewUrl ? " border-muted border-2" : ""
                } p-2 ${previewUrl ? "" : "animate-pulse"}`}
              >
                {previewUrl && (
                  <Image
                    src={previewUrl}
                    alt="Preview"
                    height={250}
                    width={250}
                    className="rounded-md object-contain w-full h-full"
                  />
                )}
              </div>
              <div
                className={`h-[250px] w-full p-6 mb-5  rounded-md ${
                  previewUrl ? "bg-card" : "bg-muted"
                } ${previewUrl ? "" : "animate-pulse"} ${
                  previewUrl ? " border-muted border-2" : ""
                }`}
              >
                <ModifiedChart data={histogramData} title="Histogram" />
              </div>
              <div
                className={`h-[250px] w-full p-6 mb-5  rounded-md ${
                  previewUrl ? "bg-card" : "bg-muted"
                } ${previewUrl ? "" : "animate-pulse"} ${
                  previewUrl ? " border-muted border-2" : ""
                }`}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  {fftImage && (
                    <Image
                      src={fftImage}
                      alt="FFT Image"
                      height={250}
                      width={250}
                      className="rounded-md object-contain w-full h-full"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarProvider>
    </>
  );
}
