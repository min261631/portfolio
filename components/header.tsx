"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useContext } from "react"
import { GalleryContext } from "@/contexts/gallery-context"
import { ImageCounter } from "@/components/gallery/image-counter"

export function Header() {
  const pathname = usePathname()
  const isGalleryPage = pathname?.startsWith("/gallery")
  const galleryContext = useContext(GalleryContext)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 md:px-6 lg:px-16 xl:px-24 2xl:px-32 py-2 sm:py-2.5 md:py-3 flex items-center justify-between bg-transparent backdrop-blur-sm bg-black/10">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between lg:pl-8 xl:pl-12 2xl:pl-16">
        <Link href={isGalleryPage ? "/#home" : "#home"} className="logo flex items-center" aria-label="Home">
          <Image
            src="/logo.png"
            alt="Logo"
            width={130}
            height={130}
            className="object-contain w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px] lg:w-[95px] lg:h-[95px]"
            priority
          />
        </Link>

        <div className="flex items-center gap-4">
          {isGalleryPage && galleryContext && galleryContext.totalImages > 0 && (
            <ImageCounter
              current={galleryContext.currentImageIndex + 1}
              total={galleryContext.totalImages}
            />
          )}
          <a
            className="btn btn-sm flex justify-center items-center text-xs sm:text-sm px-3 sm:px-4 md:px-6"
            href="mailto:jasdevbedi.aus@gmail.com"
          >
            Work With Me
          </a>
        </div>
      </div>
    </header>
  )
}

