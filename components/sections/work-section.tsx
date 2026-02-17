import Image from "next/image"

interface TimelineItem {
  date: string
  title: string
  description: string
  logoUrl: string
  logoAlt: string
  logoWidth?: number
  type: "academic" | "work"
  position: "left" | "right"
}

const timelineItems: TimelineItem[] = [
  {
    date: "Jul 2024 - Jul 2026",
    title: "Bachelor of Information Technology, Software Engineering",
    description: "La Trobe University <br> - Bundoora, Victoria, Australia",
    logoUrl: "/logos/latrobe.png",
    logoAlt: "La Trobe University",
    logoWidth: 80,
    type: "academic",
    position: "right",
  },
  {
    date: "Nov 2025 - Present",
    title: "Information Technology Operations Engineer",
    description: "Archimagnet <br> - Tarneit, Victoria, Australia",
    logoUrl: "/logos/archimagnet.png",
    logoAlt: "Archimagnet",
    logoWidth: 80,
    type: "work",
    position: "left",
  },
  {
    date: "Aug 2025 - Present",
    title: "Artificial Intelligence Engineer",
    description: "YBit Limited <br> - Hong Kong SAR",
    logoUrl: "/logos/ybit_limited_logo.jpg",
    logoAlt: "YBit Limited",
    logoWidth: 70,
    type: "work",
    position: "right",
  },
  {
    date: "Oct 2025 - Feb 2026",
    title: "Full Stack Developer",
    description: "IFFA Awards <br> - Remote",
    logoUrl: "/logos/iffa.jpg",
    logoAlt: "IFFA Awards",
    logoWidth: 70,
    type: "work",
    position: "left",
  },
]

function NodeIcon({ type }: { type: "academic" | "work" }) {
  return type === "academic" ? (
    <svg viewBox="0 0 640 512" className="h-4 w-4 fill-white">
      <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6z" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
      <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM8 8h12v3H4V8h4zM4 19v-6h6v2h4v-2h6l.001 6H4z" />
    </svg>
  )
}

function TimelineDot({ type }: { type: "academic" | "work" }) {
  const dotClass =
    type === "academic"
      ? "bg-sky-500/90 shadow-[0_0_0_10px_rgba(56,189,248,0.14)]"
      : "bg-purple-500/90 shadow-[0_0_0_10px_rgba(168,85,247,0.14)]"

  return (
    <div className={`h-10 w-10 rounded-full grid place-items-center ${dotClass}`}>
      <NodeIcon type={type} />
    </div>
  )
}

function ExperienceCard({
  item,
  logoSide,
}: {
  item: TimelineItem
  logoSide: "left" | "right"
}) {
  const isLogoLeft = logoSide === "left"

  return (
    <div
      className="
        bg-black/55 backdrop-blur-2xl border border-white/10
        shadow-[0_18px_80px_rgba(0,0,0,0.65)]
        rounded-[44px]
        px-7 py-4
        w-full
      "
    >
      <div className={`flex items-center gap-5 ${isLogoLeft ? "flex-row" : "flex-row-reverse"}`}>
        <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
          <Image
            src={item.logoUrl}
            alt={item.logoAlt}
            width={item.logoWidth || 70}
            height={item.logoWidth || 70}
            className="object-contain"
            unoptimized
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = "none"
            }}
          />
        </div>

        <div className={isLogoLeft ? "text-left" : "text-right"}>
          <span className="text-white text-xl font-semibold font-secondary block leading-tight mb-1">
            {item.title}
          </span>

          <p
            className="text-white text-base font-secondary leading-relaxed"
            dangerouslySetInnerHTML={{ __html: item.description.replace(/<br\s*\/?>\s*-\s*/gi, ' - ') }}
          />
        </div>
      </div>
    </div>
  )
}

function Spine({
  type,
  isFirst,
  isLast,
}: {
  type: "academic" | "work"
  isFirst: boolean
  isLast: boolean
}) {
  return (
    <div className="relative z-10 flex flex-col items-center w-[64px] h-full">
      {/* connector above */}
      <div className={`w-[2px] flex-1 bg-white/25 ${isFirst ? "opacity-0" : "opacity-100"}`} />
      <TimelineDot type={type} />
      {/* connector below */}
      <div className={`w-[2px] flex-1 bg-white/25 ${isLast ? "opacity-0" : "opacity-100"}`} />
    </div>
  )
}

export function WorkSection() {
  return (
    <>
      {/* Desktop */}
      <section
        id="work"
        className="pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-8 xl:pb-12 hidden lg:block relative z-10"
        aria-label="Work Experience section"
      >
        <div className="container mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <h2 className="h2 text-accent text-center mx-auto mb-12">
            Academic and Work Experience.
          </h2>

          <div className="relative">
            {/* dead-center spine line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/25 -translate-x-1/2" />

            <ul className="relative w-full list-none m-0 p-0">
              {timelineItems.map((item, index) => {
                const isLeft = item.position === "left"
                const isFirst = index === 0
                const isLast = index === timelineItems.length - 1

                return (
                  <li key={index} className="relative">
                    <div className="py-6">
                      <div
                        className="
                          grid items-center
                          [grid-template-columns:1fr_64px_1fr]
                          gap-x-3
                        "
                      >
                        {/* LEFT SIDE */}
                        <div className="flex items-center justify-end pr-12">
                          {isLeft ? (
                            <div className="max-w-[760px] w-full">
                              <ExperienceCard item={item} logoSide="right" />
                            </div>
                          ) : (
                            <div className="text-white text-base font-secondary text-right whitespace-nowrap">
                              {item.date}
                            </div>
                          )}
                        </div>

                        {/* SPINE */}
                        <Spine type={item.type} isFirst={isFirst} isLast={isLast} />

                        {/* RIGHT SIDE */}
                        <div className="flex items-center justify-start pl-12">
                          {!isLeft ? (
                            <div className="max-w-[760px] w-full">
                              <ExperienceCard item={item} logoSide="left" />
                            </div>
                          ) : (
                            <div className="text-white text-base font-secondary text-left whitespace-nowrap">
                              {item.date}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section
        id="work-mobile"
        className="pt-24 sm:pt-32 pb-8 lg:hidden relative z-10"
        aria-label="Work Experience section mobile"
      >
        <div className="container mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="h2 text-accent text-center mx-auto mb-12">
            Academic and Work Experience.
          </h2>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/25" />

            <ul className="list-none m-0 p-0">
              {timelineItems.map((item, index) => {
                const isFirst = index === 0
                const isLast = index === timelineItems.length - 1

                return (
                  <li key={index} className="relative pl-16">
                    <div className="py-6">
                      <div className="absolute left-0 top-0 h-full flex flex-col items-center w-12">
                        <div className={`w-[2px] flex-1 bg-white/25 ${isFirst ? "opacity-0" : "opacity-100"}`} />
                        <TimelineDot type={item.type} />
                        <div className={`w-[2px] flex-1 bg-white/25 ${isLast ? "opacity-0" : "opacity-100"}`} />
                      </div>

                      <p className="text-white text-base font-secondary mb-2 whitespace-nowrap">
                        {item.date}
                      </p>

                      <ExperienceCard item={item} logoSide="left" />
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
