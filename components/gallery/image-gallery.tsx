"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ImageCounter } from "./image-counter"

interface ImageGalleryProps {
  images: string[]
  currentIndex: number
  onNext: () => void
  onPrev: () => void
  onSelect: (index: number) => void
  title: string
}

export function ImageGallery({
  images,
  currentIndex,
  onNext,
  onPrev,
  onSelect,
  title,
}: ImageGalleryProps) {
  const currentImage = images[currentIndex]

  return (
    <div className="flex flex-col space-y-6">
      {/* Main Image Display */}
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border-2 border-white/20 bg-black/20">
        <Image
          src={currentImage}
          alt={`${title} - Image ${currentIndex + 1}`}
          fill
          className="object-contain"
          priority
          unoptimized
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = `https://via.placeholder.com/800x600/1e293b/64748b?text=${encodeURIComponent(title)}`
          }}
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 hover:border-emerald-400/50 transition-all duration-200 backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 hover:border-emerald-400/50 transition-all duration-200 backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute top-4 right-4 z-10">
            <ImageCounter current={currentIndex + 1} total={images.length} />
          </div>
        )}
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-emerald-400/30 scrollbar-track-transparent">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => onSelect(index)}
              className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                index === currentIndex
                  ? "border-emerald-400 scale-105"
                  : "border-white/20 hover:border-white/40"
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`${title} thumbnail ${index + 1}`}
                fill
                className="object-cover"
                unoptimized
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = `https://via.placeholder.com/96/1e293b/64748b?text=${index + 1}`
                }}
              />
              {index === currentIndex && (
                <div className="absolute inset-0 bg-emerald-400/20" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
