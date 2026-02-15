"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { getProjectBySlug } from "@/data/projects"
import { BackgroundEffects } from "@/components/sections/background-effects"
import { ImageGallery } from "@/components/gallery/image-gallery"
import { ProjectInfo } from "@/components/gallery/project-info"
import { useGallery } from "@/contexts/gallery-context"
import { useState, useEffect } from "react"

export default function GalleryPage() {
  const params = useParams()
  const slug = params.slug as string
  const project = getProjectBySlug(slug)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { setGalleryState, clearGalleryState } = useGallery()

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    
    // Update gallery context when project loads
    if (project) {
      setGalleryState(0, project.images.length)
    }
    
    // Cleanup when component unmounts
    return () => {
      clearGalleryState()
    }
  }, [project, setGalleryState, clearGalleryState])

  useEffect(() => {
    // Update context when image index changes
    if (project) {
      setGalleryState(currentImageIndex, project.images.length)
    }
  }, [currentImageIndex, project, setGalleryState])

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/#projects" className="text-emerald-400 hover:text-emerald-300">
            Return to Projects
          </Link>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative">
      <BackgroundEffects />

      {/* Main Content */}
      <div className="pt-24 sm:pt-28 md:pt-32 pb-12 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 xl:gap-16">
            {/* Left Column - Project Info */}
            <ProjectInfo project={project} />

            {/* Right Column - Image Gallery */}
            <ImageGallery
              images={project.images}
              currentIndex={currentImageIndex}
              onNext={nextImage}
              onPrev={prevImage}
              onSelect={goToImage}
              title={project.title}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

