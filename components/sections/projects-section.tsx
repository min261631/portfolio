import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "LINK",
    description: "A platform connecting students with volunteering opportunities based on their skill gaps.",
    status: "In Progress",
    technologies: ["Flutter", "Firebase", "Google Maps API", "TypeScript"],
    highlights: [
      "Built cross-platform mobile app with Flutter for iOS and Android",
      "Integrated Firebase for real-time data sync and authentication",
      "Implemented location-based search using Google Maps API",
    ],
    githubUrl: "https://github.com/min261631/link",
    gradient: "from-emerald-300/10",
  },
  {
    title: "MapMyColes",
    description: "Location-based service helping users find nearest Coles stores with real-time inventory.",
    status: "Completed",
    technologies: ["React", "Node.js", "Google Maps API", "REST APIs"],
    highlights: [
      "Developed full-stack web application with React frontend and Node.js backend",
      "Integrated Google Maps API for store location and routing",
      "Built REST API for inventory management and search functionality",
    ],
    githubUrl: "https://github.com/min261631/mapmycoles",
    gradient: "from-sky-400/10",
  },
]

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 relative min-h-screen flex items-center scroll-mt-28"
      aria-label="Projects section"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg lg:text-xl">Building solutions that make a difference</p>
        </div>

        <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="p-4 sm:p-6 md:p-8 bg-white/[0.04] backdrop-blur-sm border-white/10 hover:border-emerald-300/30 transition-all duration-500 group overflow-hidden relative rounded-xl sm:rounded-2xl"
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br ${project.gradient} to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 sm:gap-4 mb-3 sm:mb-4 relative z-10">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-sky-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 mb-3 sm:mb-4">{project.description}</p>
                </div>
                <Badge className="self-start bg-white/10 text-white border-white/20 text-xs sm:text-sm">{project.status}</Badge>
              </div>

              <div className="flex flex-wrap gap-2 mb-4 sm:mb-5 md:mb-6">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-white/5 text-white/80 border-white/20 text-xs sm:text-sm py-1 px-2 sm:px-3">
                    {tech}
                  </Badge>
                ))}
              </div>

              <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5 md:mb-6 text-white/70 text-sm sm:text-base">
                {project.highlights.map((highlight, index) => (
                  <li key={index}>• {highlight}</li>
                ))}
              </ul>

              <div className="flex gap-2 sm:gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-white/5 text-white border-white/20 hover:bg-white/10 text-xs sm:text-sm"
                  asChild
                >
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={14} className="sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                    Code
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

