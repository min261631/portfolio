import { Project } from "@/data/projects"

interface ProjectInfoProps {
  project: Project
}

export function ProjectInfo({ project }: ProjectInfoProps) {
  return (
    <div className="flex flex-col space-y-10 lg:sticky lg:top-32">
      {/* Title */}
      <div>
        <h1 className="h2 leading-tight text-accent mb-0">
          {project.title}.
        </h1>
      </div>

      {/* Description */}
      <div className="space-y-4">
        {project.description
          .split(/\.\s+/)
          .filter((sentence) => sentence.trim().length > 0)
          .map((sentence, index, array) => (
            <p
              key={index}
              className="text-white/80 text-base sm:text-lg leading-relaxed font-secondary"
            >
              {sentence.trim()}
              {index < array.length - 1 && "."}
      </p>
          ))}
      </div>

      {/* Tech Stack */}
      {project.techStack && project.techStack.length > 0 && (
        <div className="pt-6 border-t border-white/10">
          <h3 className="text-white/60 font-semibold text-sm uppercase tracking-wider mb-5 font-secondary">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/5 text-sky-400 rounded-md text-sm border border-white/10 hover:border-sky-500/50 hover:bg-white/10 transition-all font-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}


