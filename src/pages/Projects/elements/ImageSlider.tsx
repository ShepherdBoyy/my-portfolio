import type { SliderProps } from "@/types";
import { ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import { useCallback, useState } from "react";

export default function ImageSlider({ images = [], title }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [imgError, setImgError] = useState<boolean>(false);

  const handlePrev = useCallback((): void => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setImgError(false);
  }, [images.length]);

  const handleNext = useCallback((): void => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setImgError(false);
  }, [images.length]);

  const handleDotClick = (index: number): void => {
    setCurrentIndex(index);
    setImgError(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full h-72 sm:h-120 rounded-3xl overflow-hidden bg-elevated border border-border/60 group">
        {imgError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted">
            <ImageOff size={32} />
            <p className="text-sm">Image not available</p>
          </div>
        ) : (
          <img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${title} screenshot ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-300"
            onError={() => setImgError(true)}
          />
        )}

        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-2 rounded-full">
          {currentIndex + 1} / {images.length}
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-black/70 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-black/70 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-black/40 to-transparent" />
        )}
      </div>

      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`rounded-full transition-all duration-300 cursor-pointer
                    ${currentIndex === index
                        ? "w-6 h-2 bg-accent"
                        : "w-2 h-2 bg-border hover:bg-muted"
                    }
                `}
                aria-label={`Go to image $index + 1`}
            />
          ))}
        </div>
      )}

      {images.length > 2 && (
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-1">
            {images.map((image, index) => (
                <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer
                        ${currentIndex === index
                            ? "border-accent shadow-lg shadow-accent/20"
                            : "border-border/60 opacity-60 hover:opacity-100"
                        }
                    `}
                >
                    <img
                        src={image}
                        alt={`${title} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </button>
            ))}
        </div>
      )}
    </div>
  );
}
