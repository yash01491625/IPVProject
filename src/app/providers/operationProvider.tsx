"use client";

import { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from "react";

interface FilterContextType {
  isImageLoaded: boolean;
  setIsImageLoaded: Dispatch<SetStateAction<boolean>>;
  isErosion: boolean;
  setIsErosion: Dispatch<SetStateAction<boolean>>;
  isDilation: boolean;
  setIsDilation: Dispatch<SetStateAction<boolean>>;
  isOpening: boolean;
  setIsOpening: Dispatch<SetStateAction<boolean>>;
  isClosing: boolean;
  setIsClosing: Dispatch<SetStateAction<boolean>>;
  isEdge: boolean;
  setIsEdge: Dispatch<SetStateAction<boolean>>;
  isClassifier: boolean;
  setIsClassifier: Dispatch<SetStateAction<boolean>>;
  isGaussian: boolean;
  setIsGaussian: Dispatch<SetStateAction<boolean>>;
  isMedian: boolean;
  setIsMedian: Dispatch<SetStateAction<boolean>>;
  resetFilters: () => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [isErosion, setIsErosion] = useState(false);
  const [isDilation, setIsDilation] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(true);
  const [isEdge, setIsEdge] = useState(false);
  const [isClassifier, setIsClassifier] = useState(false);
  const [isGaussian, setIsGaussian] = useState(false);
  const [isMedian, setIsMedian] = useState(false);

  const resetFilters = () => {
    setIsErosion(false);
    setIsDilation(false);
    setIsOpening(false);
    setIsClosing(false);
    setIsEdge(false);
    setIsClassifier(false);
    setIsGaussian(false);
    setIsMedian(false);
    // Keep imageLoaded state as is unless you want to reset it too
  };

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
        isGaussian,
        setIsGaussian,
        isMedian,
        setIsMedian,
        resetFilters
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