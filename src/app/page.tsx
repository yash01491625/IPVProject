"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useImageContext } from "./providers/ImageProvider";
import ModifiedChart from "@/components/ui/modified-chart";
import { useFilterContext } from "./providers/operationProvider";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { BadgeX, FlipHorizontal, FlipVertical, Verified } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Morphology = ({ operation }: { operation: string }) => {
  const [processedUrl, setProcessedUrl] = useState<string | null>(null);
  const [kernelSize, setKernelSize] = useState(5);
  const [kernelType, setKernelType] = useState("rect");
  const { image, previewUrl } = useImageContext();

  const sendImageForProcessing = async (image: File) => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("kernelType", kernelType);
    formData.append("kernelSize", kernelSize.toString());
    formData.append("operation", operation);

    const res = await fetch(`http://localhost:5000/morphology`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setProcessedUrl(`data:image/png;base64,${data.processed}`);
  };

  useEffect(() => {
    setProcessedUrl(null);
  }, []);

  useEffect(() => {
    if (image) {
      sendImageForProcessing(image);
    }
  }, [kernelSize, kernelType]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`h-135 w-180 ${previewUrl ? "bg-card" : "bg-muted"}  ${
          previewUrl ? " border-muted border-2" : ""
        } rounded-md p-2  ${previewUrl ? "" : "animate-pulse"} mb-10`}
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
        className={`h-45 w-230 bg-card border-muted border-2 rounded-md p-2 flex flex-row gap-3`}
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
            kernelType === "ellipse" ? "border-2 border-primary" : ""
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
  );
};

const ImageLoaded = () => {
  const { previewUrl, setPreviewUrl, image, setImage } = useImageContext();
  const [flipType, setFlipType] = useState(99);

  const sendImageForProcessing = async (image: File) => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("flipType", flipType.toString());

    const res = await fetch(`http://localhost:5000/flip`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    const base64Img = data.flipped_image;
    setPreviewUrl(`data:image/png;base64,${data.flipped_image}`);

    const byteCharacters = atob(base64Img);
    const byteNumbers = new Array(byteCharacters.length)
      .fill(0)
      .map((_, i) => byteCharacters.charCodeAt(i));
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "image/png" });
    const newFile = new File([blob], "flipped.png", { type: "image/png" });
    setImage(newFile);
  };

  useEffect(() => {
    if (image) {
      sendImageForProcessing(image);
    }
  }, [flipType]);

  return (
    <div
      className={`h-180 w-190 ${previewUrl ? "bg-card" : "bg-muted"}  ${
        previewUrl ? " border-muted border-2" : ""
      } rounded-md p-2 ${previewUrl ? "" : "animate-pulse"}`}
    >
      <Button
        variant="outline"
        className={` mt-18 absolute top-5 right-95 hover:scale-95 transition-all duration-200 ease-in-out active:scale-90`}
        onClick={() => {
          setFlipType((prev) => (prev === 1 ? 99 : 1));
        }}
      >
        <FlipHorizontal />
      </Button>
      <Button
        variant="outline"
        className="mt-18 absolute top-5 right-82 hover:scale-95 transition-all duration-200 ease-in-out active:scale-90"
        onClick={() => {
          setFlipType((prev) => (prev === 0 ? 99 : 0));
        }}
      >
        <FlipVertical />
      </Button>

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
  );
};

const Edge = () => {
  const { image, previewUrl, setPreviewUrl } = useImageContext();

  const sendImageForProcessing = async (image: File) => {
    const formData = new FormData();
    formData.append("image", image);

    const res = await fetch(`http://localhost:5000/edge`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    setPreviewUrl(`data:image/png;base64,${data.edge_image}`);
  };

  useEffect(() => {
    if (image) {
      sendImageForProcessing(image);
    }
  }, [image]);

  return (
    <div
      className={`h-180 w-190 ${previewUrl ? "bg-card" : "bg-muted"}  ${
        previewUrl ? " border-muted border-2" : ""
      } rounded-md p-2 ${previewUrl ? "" : "animate-pulse"}`}
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
  );
};

const Classifier = () => {
  const { image, previewUrl, setPreviewUrl } = useImageContext();
  const [edgeCount, setEdgeCount] = useState<number>(0);
  const [aspectRatio, setAspectRatio] = useState<number>(0);
  const [brightness, setBrightness] = useState<number>(0);
  const [largestArea, setLargestArea] = useState<number>(0);
  const [symmetry, setSymmetry] = useState<number>(0);
  const [selectedLabel, setSelectedLabel] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [classification, setClassification] = useState<string>("");

  const sendImageForExtraction = async (image: File) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", image);

      const res = await fetch("http://localhost:5000/extract", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`Server responded with ${res.status}`);
      }

      const data = await res.json();

      setEdgeCount(data.edge_count);
      setAspectRatio(data.aspect_ratio);
      setBrightness(data.brightness);
      setLargestArea(data.largest_area);
      setSymmetry(data.symmetry);
    } catch (error) {
      console.error("Error processing image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!selectedLabel) {
      alert("Please select a class label");
      return;
    }
    const formData = new FormData();
    formData.append("edgeCount", edgeCount.toString());
    formData.append("aspectRatio", aspectRatio.toString());
    formData.append("brightness", brightness.toString());
    formData.append("largestArea", largestArea.toString());
    formData.append("symmetry", symmetry.toString());
    formData.append("label", selectedLabel);

    try {
      const res = await fetch(`http://localhost:3000/api/store`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`Server responded with ${res.status}`);
      }

      const data = await res.json();

      console.log("Image stored successfully:", data);
    } catch (error) {
      console.error("Error storing image:", error);
    }
  };

  const handleClassify = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      const res = await fetch("/api/classify", {
        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          edgeCount,
          aspectRatio,
          brightness,
          largestArea,
          symmetry,
        }),
      });

      const data = await res.json();

      setClassification(data.class);
      console.log(data);
      setIsLoading(false);
    }, 500);
  };

  const handleClassifyTwo = async () => {
    if (!image) return;

    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await fetch("http://localhost:5000/extract-two", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to classify image");
      }

      const data = await res.json();

      setPreviewUrl(`data:image/jpeg;base64,${data.marked_image_base64}`);
      setClassification(data.classification);
    } catch (error) {
      console.error("Error during classification:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (image) {
      sendImageForExtraction(image);
    }
  }, [image]);

  return (
    <div className="w-full h-full p-6 flex flex-col items-center justify-center">
      <div className=" absolute top-35 right-85 flex flex-col gap-2 p-2 rounded-md">
        <Popover>
          <PopoverTrigger className="h-auto w-full bg-primary text-white py-1.5 rounded-md hover:bg-primary/90">
            Stats
          </PopoverTrigger>
          <PopoverContent>
            <div className=" p-4 rounded-lg my-6">
              <h3 className="text-lg font-semibold mb-2">Image Statistics</h3>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span>Edge Count:</span>
                <span>{edgeCount}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span>Aspect Ratio:</span>
                <span>{aspectRatio.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span>Brightness:</span>
                <span>{brightness.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span>Largest Area:</span>
                <span>{largestArea}</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Symmetry:</span>
                <span>{symmetry.toFixed(2)}</span>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <Button className="h-auto w-full" onClick={handleClassify}>
          Classify
        </Button>
        <Popover>
          <PopoverTrigger className="h-auto w-full bg-primary text-white py-1.5 rounded-md hover:bg-primary/90">
            Submit
          </PopoverTrigger>
          <PopoverContent className="flex justify-center items-center w-auto flex-col gap-5">
            <Select value={selectedLabel} onValueChange={setSelectedLabel}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Human">Human</SelectItem>
                <SelectItem value="Not Human">Not Human</SelectItem>
              </SelectContent>
            </Select>
            <Button className="h-auto w-full" onClick={handleSubmit}>
              Submit
            </Button>
          </PopoverContent>
        </Popover>
        <Button className="h-auto w-full" onClick={handleClassifyTwo}>
          HC Classify
        </Button>
      </div>
      <div
        className={`h-130 w-160 ${previewUrl ? "bg-card" : "bg-muted"}  ${
          previewUrl ? " border-muted border-2" : ""
        } rounded-md p-2 ${previewUrl && !isLoading ? "" : "animate-pulse"}`}
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
      {classification && !isLoading && (
        <div
          className={`mt-5 flex flex-row gap-2 p-4 rounded-lg text-center text-lg font-bold ${
            classification === "Human"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {classification}{" "}
          {classification === "Human" ? <Verified /> : <BadgeX />}
        </div>
      )}
    </div>
  );
};

const Sharpen = () => {
  const { image, previewUrl, setPreviewUrl } = useImageContext();
  const [sharpenedUrl, setSharpenedUrl] = useState<string | null>(null);

  const sendImageForSharpening = async (image: File) => {
    const formData = new FormData();
    formData.append("image", image);

    const res = await fetch(`http://localhost:5000/sharpen`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    setSharpenedUrl(`data:image/png;base64,${data.sharpened_image}`);
  };

  useEffect(() => {
    if (image) {
      sendImageForSharpening(image);
    }
  }, [image]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center">
        <div
          className={`h-140 w-130 mr-3  ${
            previewUrl ? "bg-card" : "bg-muted"
          }  ${previewUrl ? " border-muted border-2" : ""} rounded-md p-2 ${
            previewUrl ? "" : "animate-pulse"
          }`}
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
          className={`h-140 w-130 ${sharpenedUrl ? "bg-card" : "bg-muted"}  ${
            sharpenedUrl ? " border-muted border-2" : ""
          } rounded-md p-2 ${sharpenedUrl ? "" : "animate-pulse"}`}
        >
          {sharpenedUrl && (
            <Image
              src={sharpenedUrl}
              alt="Preview"
              height={250}
              width={250}
              className="rounded-md object-contain w-full h-full"
            />
          )}
        </div>
      </div>
      <div className="flex  flex-row justify-center items-center">
        <div className="mr-100 mt-3 text-white font-semibold py-3 px-12 rounded-full bg-gradient-to-r from-primary to-pink-500">
          Before
        </div>
        <div className="mt-3 text-white font-semibold py-3 px-12 rounded-full bg-gradient-to-r from-primary to-pink-500">
          After
        </div>
      </div>
    </div>
  );
};

const Smooth = () => {
  const [processedUrl, setProcessedUrl] = useState<string | null>(null);
  const [kernelSize, setKernelSize] = useState(5);
  const [blurType, setBlurType] = useState("average");
  const { image, previewUrl } = useImageContext();

  const sendImageForProcessing = async (image: File) => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("blurType", blurType);
    formData.append("kernelSize", kernelSize.toString());

    const res = await fetch(`http://localhost:5000/smooth`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setProcessedUrl(`data:image/png;base64,${data.smoothed_image}`);
  };

  useEffect(() => {
    setProcessedUrl(previewUrl);
  }, []);

  useEffect(() => {
    if (image) {
      sendImageForProcessing(image);
    }
  }, [kernelSize, blurType]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`h-135 w-180 ${previewUrl ? "bg-card" : "bg-muted"}  ${
          previewUrl ? " border-muted border-2" : ""
        } rounded-md p-2  ${previewUrl ? "" : "animate-pulse"} mb-10`}
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
        className={`h-45 w-230 bg-card border-muted border-2 rounded-md p-2 flex flex-row gap-3`}
      >
        <div
          onClick={() => {
            setBlurType("gaussian");
          }}
          className={`${
            blurType === "gaussian" ? "border-2 border-primary" : ""
          } w-45 h-full rounded-md bg-card grid grid-cols-5 gap-2 p-1 justify-center items-center hover:scale-97 tarnsition-all duration-200 ease-in-out active:scale-90`}
        >
          <div className="w-6 h-6 bg-primary rounded-[3px] opacity-10" />
          <div className="w-6 h-6 bg-primary rounded-[3px] opacity-30" />
          <div className="w-6 h-6 bg-primary rounded-[3px] opacity-60" />
          <div className="w-6 h-6 bg-primary rounded-[3px] opacity-30" />
          <div className="w-6 h-6 bg-primary rounded-[3px] opacity-10" />
          <div className="w-6 h-6 bg-primary rounded-[3px] opacity-30" />
          <div className="w-6 h-6 bg-primary rounded-[3px] opacity-80" />
          <div className="w-6 h-6 bg-primary rounded-[3px] opacity-100" />
          <div className="w-6 h-6 bg-primary rounded-[3px] opacity-80" />
          <div className="w-6 h-6 bg-primary rounded-[3px] opacity-30" />
          <div className="w-6 h-6 bg-primary rounded-[3px] opacity-60" />
          <div className="w-6 h-6 bg-primary rounded-[3px] opacity-100" />
          <div className="w-6 h-6 bg-primary rounded-[3px] opacity-100" />
          <div className="w-6 h-6 bg-primary rounded-[3px] opacity-100" />
          <div className="w-6 h-6 bg-primary rounded-[3px] opacity-60" />
          <div className="w-6 h-6 bg-primary rounded-[3px] opacity-30" />
          <div className="w-6 h-6 bg-primary rounded-[3px] opacity-80" />
          <div className="w-6 h-6 bg-primary rounded-[3px] opacity-100" />
          <div className="w-6 h-6 bg-primary rounded-[3px] opacity-80" />
          <div className="w-6 h-6 bg-primary rounded-[3px] opacity-30" />
          <div className="w-6 h-6 bg-primary rounded-[3px] opacity-10" />
          <div className="w-6 h-6 bg-primary rounded-[3px] opacity-30" />
          <div className="w-6 h-6 bg-primary rounded-[3px] opacity-60" />
          <div className="w-6 h-6 bg-primary rounded-[3px] opacity-30" />
          <div className="w-6 h-6 bg-primary rounded-[3px] opacity-10" />
        </div>

        <div
          onClick={() => setBlurType("median")}
          className={`${
            blurType === "median" ? "border-2 border-primary" : ""
          } w-45 h-full rounded-md bg-card grid grid-cols-5 gap-2 p-1 justify-center items-center hover:scale-97 transition-all duration-200 ease-in-out active:scale-90`}
        >
          {[
            40, 100, 80, 100, 40, 100, 20, 100, 20, 80, 80, 20, 100, 20, 100,
            40, 100, 80, 100, 40,
          ].map((opacity, i) => (
            <div
              key={`median-${i}`}
              className="w-6 h-6 bg-primary rounded-[3px]"
              style={{ opacity: `${opacity}%` }}
            />
          ))}
        </div>

        <div
          onClick={() => setBlurType("average")}
          className={`${
            blurType === "average" ? "border-2 border-primary" : ""
          } w-45 h-full rounded-md bg-card grid grid-cols-5 gap-2 p-1 justify-center items-center hover:scale-97 transition-all duration-200 ease-in-out active:scale-90`}
        >
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <div
                key={`avg-${i}`}
                className="w-6 h-6 bg-primary rounded-[3px] opacity-70"
              />
            ))}
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
  );
};

const BitPlane = () => {
  const { image } = useImageContext();
  const [bitPlanes, setBitPlanes] = useState<string[]>([]);

  const sendImageForProcessing = async (image: File) => {
    const formData = new FormData();
    formData.append("image", image);

    const res = await fetch(`http://localhost:5000/bitplane`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setBitPlanes(
      data.bit_planes
        .map((plane: string) => `data:image/png;base64,${plane}`)
        .reverse()
    );
  };

  useEffect(() => {
    if (image) {
      sendImageForProcessing(image);
    }
  }, [image]);

  return (
    <div>
      <div className="flex flex-row justify-center items-center mb-5">
        {bitPlanes.slice(0, 3).map((plane, index) => (
          <div
            key={`plane-${index}`}
            className="h-90 w-80 mr-5 bg-card border-muted border-2 rounded-md p-2"
          >
            {plane && (
              <Image
                src={plane}
                alt={`Bit Plane ${index + 1}`}
                height={250}
                width={250}
                className="rounded-md object-contain w-full h-full"
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center items-center">
        {bitPlanes.slice(3, 6).map((plane, index) => (
          <div
            key={`plane-${index + 3}`}
            className="h-90 w-80 mr-5 bg-card border-muted border-2 rounded-md p-2"
          >
            {plane && (
              <Image
                src={plane}
                alt={`Bit Plane ${index + 4}`}
                height={250}
                width={250}
                className="rounded-md object-contain w-full h-full"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Thresholding = () => {
  const [processedUrl, setProcessedUrl] = useState<string | null>(null);
  const [method, setMethod] = useState("simple");
  const { image, previewUrl } = useImageContext();

  const sendImageForProcessing = async (image: File) => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("method", method);

    const res = await fetch(`http://localhost:5000/threshold`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setProcessedUrl(`data:image/png;base64,${data.processed}`);
  };

  useEffect(() => {
    setProcessedUrl(previewUrl);
  }, []);

  useEffect(() => {
    if (image) {
      sendImageForProcessing(image);
    }
  }, [method]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`h-135 w-180 ${previewUrl ? "bg-card" : "bg-muted"}  ${
          previewUrl ? " border-muted border-2" : ""
        } rounded-md p-2  ${previewUrl ? "" : "animate-pulse"} mb-10`}
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
        className={`h-45 w-90 bg-card border-muted border-2 rounded-md p-2 flex flex-row gap-3 justify-center items-center`}
      >
        <Button
          onClick={() => {
            setMethod("simple");
          }}
          className="text-xl p-5"
        >
          Simple
        </Button>
        <Button
          onClick={() => {
            setMethod("adaptive");
          }}
          className="text-xl p-5"
        >
          Adaptive
        </Button>
        <Button
          onClick={() => {
            setMethod("otsu");
          }}
          className="text-xl p-5"
        >
          Otsu
        </Button>
      </div>
    </div>
  );
};

const Filter = () => {
  const [processedUrl, setProcessedUrl] = useState<string | null>(null);
  const [filterType, setFilterType] = useState("sharpen");
  const { image, previewUrl } = useImageContext();

  const filters = [
    {
      type: "sharpen",
      label: "Sharpen",
      description: "Enhances edges and details",
    },
    {
      type: "edge",
      label: "Edge",
      description: "Highlights edges in the image",
    },
    {
      type: "emboss",
      label: "Emboss",
      description: "Creates 3D embossed effect",
    },
    {
      type: "outline",
      label: "Outline",
      description: "Detects object outlines",
    },
    { type: "blur", label: "Blur", description: "Softens and blurs the image" },
    {
      type: "starburst",
      label: "Starburst",
      description: "Creates a radial enhancement effect",
    },
    {
      type: "glow",
      label: "Glow",
      description: "Creates a glowing halo effect",
    },
    { type: "motion", label: "Motion", description: "Simulates motion blur" },
    {
      type: "crystallize",
      label: "Crystal",
      description: "Adds crystalline texture",
    },
    {
      type: "easter",
      label: "Easter",
      description: "Special decorative effect",
    },
  ];

  const sendImageForProcessing = async (image: File) => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("filterType", filterType);

    const res = await fetch(`http://localhost:5000/filter`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setProcessedUrl(`data:image/png;base64,${data.processed}`);
  };

  useEffect(() => {
    setProcessedUrl(previewUrl);
  }, []);

  useEffect(() => {
    if (image) {
      sendImageForProcessing(image);
    }
  }, [filterType]);

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div
        className={`h-135 w-180 ${previewUrl ? "bg-card" : "bg-muted"} ${
          previewUrl ? "border-muted border-2" : ""
        } rounded-md p-2 ${previewUrl ? "" : "animate-pulse"}`}
      >
        {processedUrl && (
          <Image
            src={processedUrl}
            alt="Filtered Preview"
            height={250}
            width={250}
            className="rounded-md object-contain w-full h-full"
          />
        )}
      </div>

      <div className="w-full max-w-2xl">
        <div className="bg-card border-muted border-2 rounded-md p-4">
          <h3 className="text-center mb-3 font-medium">Filter Effects</h3>
          <div className="grid grid-cols-5 gap-2">
            <TooltipProvider>
              {filters.map((filter) => (
                <Tooltip key={filter.type}>
                  <TooltipTrigger asChild>
                    <Button
                      variant={
                        filterType === filter.type ? "default" : "outline"
                      }
                      onClick={() => setFilterType(filter.type)}
                      className="h-12 text-xs p-2 whitespace-normal"
                    >
                      {filter.label}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{filter.description}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

const Bitwise = () => {
  const [processedUrl, setProcessedUrl] = useState<string | null>(null);
  const [operation, setOperation] = useState("and");
  const { image, previewUrl } = useImageContext();

  const sendImageForProcessing = async (image: File) => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("operation", operation);

    const res = await fetch(`http://localhost:5000/bitwise`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setProcessedUrl(`data:image/png;base64,${data.bitwise_image}`);
  };

  useEffect(() => {
    setProcessedUrl(previewUrl);
  }, []);

  useEffect(() => {
    if (image) {
      sendImageForProcessing(image);
    }
  }, [operation]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`h-135 w-180 ${previewUrl ? "bg-card" : "bg-muted"}  ${
          previewUrl ? " border-muted border-2" : ""
        } rounded-md p-2  ${previewUrl ? "" : "animate-pulse"} mb-10`}
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
        className={`h-45 w-90 bg-card border-muted border-2 rounded-md p-2 flex flex-row gap-3 justify-center items-center`}
      >
        <Button
          onClick={() => {
            setOperation("and");
          }}
          className="text-2xl p-7"
        >
          AND
        </Button>
        <Button
          onClick={() => {
            setOperation("or");
          }}
          className="text-2xl p-7"
        >
          OR
        </Button>
        <Button
          onClick={() => {
            setOperation("xor");
          }}
          className="text-2xl p-7"
        >
          XOR
        </Button>
      </div>
    </div>
  );
};

export default function Home() {
  const { image, previewUrl } = useImageContext();
  const {
    isErosion,
    isDilation,
    isOpening,
    isClosing,
    isImageLoaded,
    isEdge,
    isClassifier,
    isSharpen,
    isSmooth,
    isBitPlane,
    isBitWise,
    isThreshold,
    isFilter,
  } = useFilterContext();

  const [histogramData, setHistogramData] = useState<number[]>([]);
  const [fftImage, setFftImage] = useState<string>("");

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

  useEffect(() => {
    if (image) {
      sendImageAndGetHistogram(image);
      sendImageAndGetFFTImage(image);
    }
  }, [image]);

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <div className="w-[83vw] grid grid-cols-5 gap-4">
          <div className="w-full col-span-4 border-r-2 border-solid border-muted">
            <div className="mt-28 flex justify-center items-center">
              {isImageLoaded && <ImageLoaded />}
              {isErosion && <Morphology operation="erosion" />}
              {isDilation && <Morphology operation="dilation" />}
              {isOpening && <Morphology operation="opening" />}
              {isClosing && <Morphology operation="closing" />}
              {isEdge && <Edge />}
              {isClassifier && <Classifier />}
              {isSharpen && <Sharpen />}
              {isSmooth && <Smooth />}
              {isBitPlane && <BitPlane />}
              {isBitWise && <Bitwise />}
              {isThreshold && <Thresholding />}
              {isFilter && <Filter />}
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
                className={`h-[250px] w-full p-1 mb-5  rounded-md ${
                  previewUrl
                    ? "bg-gray-200/10 backdrop-blur-md border border-white/10 rounded-xl shadow-md p-1"
                    : "bg-muted"
                } ${previewUrl ? "" : "animate-pulse"} ${
                  previewUrl ? " border-muted border-2" : ""
                }`}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  {fftImage && (
                    <Image
                      src={fftImage}
                      alt="FFT Image"
                      height={350}
                      width={350}
                      className="rounded-md object-cover w-full h-full"
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
