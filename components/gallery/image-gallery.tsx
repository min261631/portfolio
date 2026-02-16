"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageGalleryProps {
  images: string[]
  currentIndex: number
  onNext: () => void
  onPrev: () => void
  onSelect: (index: number) => void
  title: string
  website?: string
  imageLinksToWebsite?: boolean
}

export function ImageGallery({
  images,
  currentIndex,
  onNext,
  onPrev,
  onSelect,
  title,
  website,
  imageLinksToWebsite,
}: ImageGalleryProps) {
  const currentImage = images[currentIndex]
  const shouldLinkToWebsite = website && imageLinksToWebsite

  return (
    <div className="flex flex-col space-y-6">
      {/* Main Image Display */}
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-black/20">
        {shouldLinkToWebsite ? (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full h-full block cursor-pointer group/image-link"
            onClick={(e) => {
              // Allow navigation arrows to work by stopping propagation if clicking on them
              // But allow the image itself to link to website
            }}
          >
            <Image
              src={currentImage}
              alt={`${title} - Click to visit website`}
              fill
              className="object-contain group-hover/image-link:scale-105 transition-transform duration-300"
              priority
              unoptimized
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = `https://via.placeholder.com/800x600/1e293b/64748b?text=${encodeURIComponent(title)}`
              }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover/image-link:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover/image-link:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-400/50">
                <span className="text-emerald-400 text-sm font-semibold">Visit Website →</span>
              </div>
            </div>
          </a>
        ) : (
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
        )}

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onPrev()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 hover:border-emerald-400/50 transition-all duration-200 backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onNext()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 hover:border-emerald-400/50 transition-all duration-200 backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </>
        )}
      </div>
    </div>
  )
}
