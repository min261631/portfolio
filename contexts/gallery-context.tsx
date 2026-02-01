"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface GalleryContextType {
  currentImageIndex: number
  totalImages: number
  setGalleryState: (current: number, total: number) => void
  clearGalleryState: () => void
}

export const GalleryContext = createContext<GalleryContextType | undefined>(undefined)

export function GalleryProvider({ children }: { children: ReactNode }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [totalImages, setTotalImages] = useState(0)

  const setGalleryState = (current: number, total: number) => {
    setCurrentImageIndex(current)
    setTotalImages(total)
  }

  const clearGalleryState = () => {
    setCurrentImageIndex(0)
    setTotalImages(0)
  }

  return (
    <GalleryContext.Provider
      value={{
        currentImageIndex,
        totalImages,
        setGalleryState,
        clearGalleryState,
      }}
    >
      {children}
    </GalleryContext.Provider>
  )
}

export function useGallery() {
  const context = useContext(GalleryContext)
  if (context === undefined) {
    throw new Error("useGallery must be used within a GalleryProvider")
  }
  return context
}

