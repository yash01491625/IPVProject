"use client";

import { createContext, useState, useContext, ReactNode } from "react";

interface FilterContextType {
  isImageLoaded: boolean;
  setIsImageLoaded: (value: boolean) => void;
  isErosion: boolean;
  setIsErosion: (value: boolean) => void;
  isDilation: boolean;
  setIsDilation: (value: boolean) => void;
  isOpening: boolean;
  setIsOpening: (value: boolean) => void;
  isClosing: boolean;
  setIsClosing: (value: boolean) => void;
  isEdge: boolean;
  setIsEdge: (value: boolean) => void;
  isClassifier: boolean;
  setIsClassifier: (value: boolean) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [isErosion, setIsErosion] = useState<boolean>(false);
  const [isDilation, setIsDilation] = useState<boolean>(false);
  const [isOpening, setIsOpening] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(true);
  const [isEdge, setIsEdge] = useState<boolean>(false);
  const [isClassifier, setIsClassifier] = useState<boolean>(false);

  return (
    <FilterContext.Provider
      value={{
        isImageLoaded,
        setIsImageLoaded,
        isErosion,
        setIsErosion,
        isDilation,
        setIsDilation,
        isOpening,
        setIsOpening,
        isClosing,
        setIsClosing,
        isEdge,
        setIsEdge,
        isClassifier,
        setIsClassifier,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};
