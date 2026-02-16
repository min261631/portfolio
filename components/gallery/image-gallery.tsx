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
    <div className="flex flex-col">
      {/* Main Image Display */}
      <div className="relative w-full aspect-[3/2] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-black/30 border border-white/5 shadow-2xl">
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
            {/* Visit Website Button */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-gradient-to-r from-emerald-400 to-sky-500 text-black font-semibold px-8 py-3.5 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(59,172,226,0.5)] hover:scale-105 transition-all duration-300 flex items-center gap-2.5 backdrop-blur-sm">
                <span className="text-sm tracking-wide">Visit Website</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
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
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-3.5 rounded-full bg-black/70 hover:bg-black/90 border border-white/10 hover:border-sky-400/60 transition-all duration-200 backdrop-blur-md shadow-lg hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onNext()
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 p-3.5 rounded-full bg-black/70 hover:bg-black/90 border border-white/10 hover:border-sky-400/60 transition-all duration-200 backdrop-blur-md shadow-lg hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </>
        )}
      </div>
    </div>
  )
}
