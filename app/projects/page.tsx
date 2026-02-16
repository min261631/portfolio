"use client"

import Image from "next/image"
import Link from "next/link"
import { projectsData } from "@/data/projects"
import { BackgroundEffects } from "@/components/sections/background-effects"

export default function AllProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative">
      <BackgroundEffects />

      {/* Main Content */}
      <div className="pt-24 sm:pt-28 md:pt-32 pb-12 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <Link
              href="/#projects"
              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-6 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
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
              Back to Home
            </Link>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white font-secondary">
              All Projects
            </h1>
            <p className="text-lg sm:text-xl text-white/70 font-secondary max-w-2xl">
              A comprehensive showcase of my work, including professional projects and academic assignments.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: typeof projectsData[0] }) {
  return (
    <Link href={`/gallery/${project.slug}`} className="h-full">
      <div className="group relative overflow-hidden border-2 border-white/20 rounded-xl hover:border-emerald-400/50 transition-all duration-300 bg-black/20 h-full flex flex-col">
        <div className="relative w-full aspect-[4/3] flex-shrink-0">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="group-hover:scale-110 transition-transform duration-500 object-cover"
            unoptimized
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = `https://via.placeholder.com/600x450/1e293b/64748b?text=${encodeURIComponent(project.title)}`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2">
            {project.title}
          </h3>
          <p className="text-emerald-400 text-sm mb-4">{project.role}</p>
          {project.techStack && project.techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs border border-emerald-500/30"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="px-2 py-1 text-white/50 rounded text-xs">
                  +{project.techStack.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

