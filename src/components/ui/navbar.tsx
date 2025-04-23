"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import { useImageContext } from "@/app/providers/ImageProvider";
import { useRef } from "react";
import { useFilterContext } from "@/app/providers/operationProvider";

export function FileUploadButton({
  handleChange,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleChange}
        className="hidden"
      />
      <Button
        variant="secondary"
        className="text-sm font-medium"
        type="button"
        onClick={handleClick}
      >
        <Plus className="mr-2 h-4 w-4" />
        Select Image
      </Button>
    </>
  );
}

export default function Navbar() {
  const { setImage, setPreviewUrl } = useImageContext();
  const { isClosing, isDilation, isErosion, isOpening, isImageLoaded } =
    useFilterContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logo = "/logo.png";

  const handleChange = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-primary z-50 fixed top-0 left-0 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-7">
            <div className="flex sm:hidden">
              <motion.div
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </motion.div>
            </div>
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                className="rounded-full"
                src={logo}
                alt={"Logo"}
                width={42}
                height={42}
              />
            </motion.div>

            <div className="hidden sm:flex sm:space-x-4">
              {
                <>
                  <motion.div
                    key={"Select Image"}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 1 * 0.1,
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FileUploadButton handleChange={handleChange} />
                  </motion.div>
                  <div className="ml-75 bg-secondary text-sm font-medium flex justify-center items-center rounded-md px-4 py-2 text-black dark:text-white">
                    {isErosion && "Erosion"}
                    {isDilation && "Dilation"}
                    {isClosing && "Closing"}
                    {isOpening && "Opening"}

                    {isImageLoaded &&
                      !isErosion &&
                      !isDilation &&
                      !isClosing &&
                      !isOpening &&
                      "Choose an Operation"}
                  </div>
                </>
              }
            </div>
          </div>

          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ModeToggle />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="sm:hidden px-4 pt-2 pb-3 space-y-1"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {
              <motion.div
                key={`mobile-${"Select Image"}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 1 * 0.1,
                }}
              >
                {
                  <Button variant="secondary" className="w-full justify-start">
                    <Plus /> Select Image
                  </Button>
                }
              </motion.div>
            }
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
