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
      <div className="pt-32 sm:pt-36 md:pt-40 pb-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 md:mb-20">
            <Link
              href="/#projects"
              className="inline-flex items-center text-white hover:text-white transition-colors text-sm font-secondary tracking-wide mb-8 relative z-10"
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
              Back to Home
            </Link>
            <h1 className="h2 leading-tight text-accent mb-6 relative z-10">
              All Projects.
            </h1>
            <p className="text-base sm:text-lg text-white font-secondary max-w-2xl leading-relaxed relative z-10">
              A comprehensive showcase of my work, including professional projects and academic assignments.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
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
    <Link href={`/gallery/${project.slug}`} className="h-full group">
      <div className="relative overflow-hidden border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 bg-black/30 backdrop-blur-sm h-full flex flex-col shadow-lg hover:shadow-2xl hover:shadow-sky-500/10">
        {/* Image Container */}
        <div className="relative w-full aspect-[4/3] flex-shrink-0 overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="group-hover:scale-110 transition-transform duration-700 ease-out object-cover"
            unoptimized
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = `https://via.placeholder.com/600x450/1e293b/64748b?text=${encodeURIComponent(project.title)}`
            }}
          />
          {/* Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 flex flex-col flex-grow">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-sky-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 line-clamp-2 font-secondary">
            {project.title}
          </h3>
          <p className="bg-gradient-to-r from-emerald-400 to-sky-500 bg-clip-text text-transparent text-sm mb-5 font-secondary">
            {project.role}
          </p>
          {project.techStack && project.techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
              {project.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-white/5 text-sky-400 rounded-md text-xs border border-white/10 hover:border-sky-500/50 hover:bg-white/10 transition-all font-secondary"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="px-3 py-1.5 text-white/40 rounded-md text-xs border border-white/5 font-secondary">
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

