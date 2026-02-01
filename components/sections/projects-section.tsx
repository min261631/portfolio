import Image from "next/image"
import Link from "next/link"
import { projectsData } from "@/data/projects"

// Split projects into left and right columns
const projects = {
  left: projectsData.filter((_, index) => index % 3 === 0),
  right: projectsData.filter((_, index) => index % 3 !== 0),
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative scroll-mt-20"
      aria-label="Projects section"
    >
      <div className="container mx-auto w-full max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-x-10">
          {/* Left Column - Text + One Project */}
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            <div className="lg:h-[268px] flex flex-col justify-between">
              <h2 className="h2 leading-tight text-accent">My Latest Work.</h2>
              <p className="max-w-sm mb-6 text-white font-secondary">
                Screenshots of some of my latest projects from previous jobs, university projects showcasing what I've been up to in the world of web development as a frontend developer.
              </p>
              <h3 className="h3 text-accent mb-14">Click to see more</h3>
            </div>
            {projects.left.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          {/* Right Column - Two Projects */}
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 justify-between">
            {projects.right.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: { title: string; role: string; imageUrl: string; slug: string } }) {
  return (
    <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
      <Link href={`/gallery/${project.slug}`}>
        <div className="group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300"></div>
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="group-hover:scale-125 transition-all duration-500 object-cover"
            unoptimized
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = `https://via.placeholder.com/600x450/1e293b/64748b?text=${encodeURIComponent(project.title)}`
            }}
          />
        </div>
        <div className="absolute -bottom-full left-12 group-hover:bottom-32 transition-all duration-500 z-50">
          <span className="text-gradient">{project.role}</span>
        </div>
        <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
          <span className="text-3xl text-white font-bold">{project.title}</span>
          <p className="text-white mt-2">Click to see more</p>
        </div>
      </Link>
    </div>
  )
}
