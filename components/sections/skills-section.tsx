import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface TechItem {
  name: string
  imageUrl: string
}

const techStack: Record<string, TechItem[]> = {
  Languages: [
    { name: "JavaScript", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "C++", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "C#", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: "HTML", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  ],
  Frontend: [
    { name: "React Js", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Vue Js", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "Laravel PHP", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
    { name: "Framer", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg" },
    { name: "Bootstrap", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Tailwind CSS", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  ],
  "Backend and API": [
    { name: "Node JS", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express JS", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Django", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "Rest API", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Supabase", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    { name: "Postman", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  ],
  Database: [
    { name: "MySQL", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "SQLite", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
    { name: "Firebase", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Redis", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "Supabase", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  ],
  "Cloud & DevOps": [
    { name: "AWS", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Azure", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "Docker", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  ],
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="pt-4 sm:pt-6 md:pt-8 pb-24 sm:pb-32 md:pb-40 lg:pb-48 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative scroll-mt-20"
      aria-label="Skills section"
    >
      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 items-stretch">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category} className="flex flex-col h-full">
              <h6 className="mb-6 font-bold text-center text-green-400 flex-shrink-0">
                {category}
              </h6>
              <div className="grid grid-cols-2 gap-6 border border-green-400 rounded-lg p-4 hover:bg-green-800 transition-all duration-300 hover:scale-[102%] flex-1 min-h-0">
                {items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center justify-between text-center h-[80px]"
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="h-[50px] object-contain"
                      unoptimized
                    />
                    <span className="leading-tight text-sm text-white">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Buttons - Same as hero section */}
        <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 w-full justify-end mt-6 sm:mt-8 md:mt-10">
          <Button
            size="sm"
            className="btn px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base shadow-lg shadow-emerald-500/20 hover:opacity-90 hover:scale-[1.02] transition-all bg-gradient-to-r from-emerald-400 to-sky-500 whitespace-nowrap h-[40px] sm:h-[44px] md:h-[48px]"
            asChild
          >
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              My Resume
            </Link>
          </Button>

          <Link
            href="tel:+61492917957"
            target="_blank"
            rel="noreferrer"
            className="btn btn_secondary border-2 border-none bg-none text-white hover:bg-accent hover:text-white transition-all flex items-center justify-center hover:animate-pulse whitespace-nowrap ease-in-out duration-700 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base h-[40px] sm:h-[44px] md:h-[48px]"
          >
            Contact me
          </Link>
        </div>
      </div>
    </section>
  )
}
