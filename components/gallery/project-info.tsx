import { Project } from "@/data/projects"

interface ProjectInfoProps {
  project: Project
}

export function ProjectInfo({ project }: ProjectInfoProps) {
  return (
    <div className="flex flex-col justify-center space-y-8">
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white font-secondary">
          {project.title}
        </h1>
        <p className="text-lg sm:text-xl text-emerald-400 mb-8 font-secondary">
          {project.role}
        </p>
      </div>

      <div className="text-white/90 text-base sm:text-lg leading-relaxed font-secondary mb-8">
        <ul className="list-disc list-inside space-y-2">
          {project.description
            .split(/[.!?]+/)
            .filter(sentence => sentence.trim().length > 0)
            .map((sentence, index) => (
              <li key={index} className="pl-2">
                {sentence.trim()}
                {index < project.description.split(/[.!?]+/).filter(s => s.trim().length > 0).length - 1 ? '.' : ''}
              </li>
            ))}
        </ul>
      </div>

      {project.techStack && project.techStack.length > 0 && (
        <div className="mb-8">
          <h3 className="text-white font-semibold mb-4">Tech Stack:</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm border border-emerald-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {(project.website || project.appSumo) && (
        <div className="flex flex-col sm:flex-row gap-4">
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-emerald-400 to-sky-500 text-black font-semibold rounded-full hover:opacity-90 transition-opacity text-center"
            >
              Visit Website
            </a>
          )}
          {project.appSumo && (
            <a
              href={project.appSumo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-white/50 text-white rounded-full hover:bg-white/10 transition-colors text-center"
            >
              View on AppSumo
            </a>
          )}
        </div>
      )}
    </div>
  )
}


