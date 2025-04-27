"use client";
import React, { createContext, useContext, useState } from "react";

type ImageContextType = {
  image: File | null;
  previewUrl: string | null;
  setImage: (file: File | null) => void;
  setPreviewUrl: (url: string | null) => void;
};

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useImageContext must be used within an ImageProvider");
  }
  return context;
};

export const ImageProvider = ({ children }: { children: React.ReactNode }) => {
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  return (
    <ImageContext.Provider
      value={{ image, previewUrl, setImage, setPreviewUrl }}
    >
      {children}
    </ImageContext.Provider>
  );
};
