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
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [isErosion, setIsErosion] = useState<boolean>(false);
  const [isDilation, setIsDilation] = useState<boolean>(false);
  const [isOpening, setIsOpening] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(true);

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
