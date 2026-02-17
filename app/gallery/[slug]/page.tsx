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
          <Link href="/#projects" className="bg-gradient-to-r from-emerald-400 to-sky-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
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
      <div className="pt-32 sm:pt-36 md:pt-40 pb-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        <div className="max-w-[1800px] mx-auto">
          {/* Back Button */}
          <div className="mb-8 sm:mb-12 relative z-10">
            <Link
              href="/projects"
              className="inline-flex items-center text-white hover:text-white transition-colors text-sm font-secondary tracking-wide"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Projects
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.9fr] gap-8 sm:gap-10 lg:gap-16 xl:gap-20 items-start">
            {/* Left Column - Project Info */}
            <div className="relative z-10">
              <ProjectInfo project={project} />
            </div>

            {/* Right Column - Image Gallery */}
            <div className="relative z-10">
              <ImageGallery
                images={project.images}
                currentIndex={currentImageIndex}
                onNext={nextImage}
                onPrev={prevImage}
                onSelect={goToImage}
                title={project.title}
                website={project.website}
                imageLinksToWebsite={project.imageLinksToWebsite}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

