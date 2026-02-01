"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

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
  const [imageAspectRatio, setImageAspectRatio] = useState<number | null>(null)

  useEffect(() => {
    // Reset aspect ratio when image changes
    setImageAspectRatio(null)
    
    // Preload image to get dimensions
    const img = new window.Image()
    img.onload = () => {
      const aspectRatio = img.naturalWidth / img.naturalHeight
      setImageAspectRatio(aspectRatio)
    }
    img.onerror = () => {
      // Fallback to default aspect ratio if image fails to load
      setImageAspectRatio(4/3)
    }
    img.src = images[currentIndex]
  }, [currentIndex, images])

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget
    const aspectRatio = img.naturalWidth / img.naturalHeight
    setImageAspectRatio(aspectRatio)
  }

  // Fallback aspect ratio if image hasn't loaded yet
  const aspectRatioStyle = imageAspectRatio 
    ? { aspectRatio: imageAspectRatio.toString() }
    : { aspectRatio: '4/3' } // Default fallback

  return (
    <div className="relative w-full">
      {/* Main Image - Dynamically sized based on image dimensions */}
      <div 
        className="relative w-full bg-black/20 rounded-xl overflow-hidden border-2 border-emerald-400/30 shadow-lg shadow-emerald-500/10 max-w-full transition-all duration-300"
        style={aspectRatioStyle}
      >
        <Image
          src={images[currentIndex]}
          alt={`${title} - Image ${currentIndex + 1}`}
          fill
          className="object-contain"
          priority={currentIndex === 0}
          unoptimized
          onLoad={handleImageLoad}
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = `https://via.placeholder.com/1200x900/1e293b/64748b?text=${encodeURIComponent(title)}`
          }}
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 hover:scale-110 transition-all z-10 shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 hover:scale-110 transition-all z-10 shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Navigation - Made smaller */}
      {images.length > 1 && (
        <div className="mt-8 flex gap-3 overflow-x-auto pb-2 scrollbar-hide justify-center lg:justify-start">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => onSelect(index)}
              className={`relative flex-shrink-0 w-14 h-14 lg:w-16 lg:h-16 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? "border-emerald-400 scale-110 shadow-lg shadow-emerald-500/30"
                  : "border-white/20 hover:border-white/40 hover:scale-105"
              }`}
              aria-label={`Go to image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                unoptimized
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
