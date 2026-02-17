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

function splitDescription(desc: string) {
  return desc
    .split("<br>")
    .map((s) => s.trim())
    .filter(Boolean)
}

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
      ? "bg-sky-500 text-white"
      : "bg-emerald-500 text-white"

  return (
    <div className={`h-10 w-10 rounded-full flex items-center justify-center shadow-lg ${dotClass}`}>
      <NodeIcon type={type} />
    </div>
  )
}

function DateText({ date, align }: { date: string; align: "left" | "right" }) {
  return (
    <div
      className={[
        "text-white/80 text-sm whitespace-nowrap leading-none",
        align === "right" ? "text-right" : "text-left",
      ].join(" ")}
    >
      {date}
    </div>
  )
}

function ExperienceCard({ item, isRightSide }: { item: TimelineItem; isRightSide?: boolean }) {
  const logoElement = (
    <div className="flex-shrink-0">
      <Image
        src={item.logoUrl}
        alt={item.logoAlt}
        width={item.logoWidth || 80}
        height={item.logoWidth || 80}
        className="object-contain"
        unoptimized
        onError={(e) => {
          const target = e.target as HTMLImageElement
          target.style.display = "none"
        }}
      />
    </div>
  )

  const textElement = (
    <div className="text-left flex-1 flex-col">
      <span className="text-xl font-semibold text-white font-secondary block mb-1.5">
        {item.title}
      </span>
      <p
        className="text-white text-base font-secondary leading-relaxed"
        dangerouslySetInnerHTML={{ __html: item.description }}
      />
    </div>
  )

  return (
    <div className="bg-black/50 backdrop-blur-2xl p-3 rounded-2xl flex flex-row items-start gap-4 max-w-[600px] w-full">
      {isRightSide ? (
        <>
          {logoElement}
          {textElement}
        </>
      ) : (
        <>
          {textElement}
          {logoElement}
        </>
      )}
    </div>
  )
}

export function WorkSection() {
  return (
    <>
      {/* Desktop Timeline */}
      <section
        id="work"
        className="pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-20 xl:pb-32 mb-20 hidden lg:block relative z-10"
        aria-label="Work Experience section"
      >
        <div className="container mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <h2 className="h2 text-accent text-center mx-auto mb-12">
            Academic and Work Experience.
          </h2>

          <div className="experience flex">
            <ul className="relative w-full flex flex-col py-1.5 px-4 flex-grow list-none m-0 p-0">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/20 transform -translate-x-1/2"></div>

              {timelineItems.map((item, index) => {
                const isLeftCard = item.position === "left"

                return (
                  <li key={index} className="relative mb-5 list-none flex min-h-[60px] w-full">
                    <div className="flex items-center w-full">
                      {/* Left Content - Date or Card */}
                      <div className={`flex-1 pr-12 flex items-center ${isLeftCard ? "justify-end" : "justify-start"}`}>
                        {isLeftCard ? (
                          <ExperienceCard item={item} isRightSide={false} />
                        ) : (
                          <div className="text-white text-base font-secondary text-right">
                            {item.date}
                          </div>
                        )}
                      </div>

                      {/* Timeline Separator - Fixed width to ensure centering */}
                      <div className="relative z-10 flex flex-col items-center flex-shrink-0 w-14">
                        <div className="w-0.5 h-4 bg-white/20"></div>
                        <TimelineDot type={item.type} />
                        <div className="w-0.5 h-4 bg-white/20"></div>
                      </div>

                      {/* Right Content - Date or Card */}
                      <div className={`flex-1 pl-12 flex items-center ${isLeftCard ? "justify-start" : "justify-end"}`}>
                        {isLeftCard ? (
                          <div className="text-white text-base font-secondary text-left">
                            {item.date}
                          </div>
                        ) : (
                          <ExperienceCard item={item} isRightSide={true} />
                        )}
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Mobile Timeline */}
      <section
        id="work"
        className="pt-24 sm:pt-32 md:pt-40 pb-12 mb-20 lg:hidden relative z-10"
        aria-label="Work Experience section"
      >
        <div className="container mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="h2 text-accent text-center mx-auto mb-12">Academic and Work Experience.</h2>
          <div className="experience flex">
            <ul className="relative w-full">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/20"></div>

              {timelineItems.map((item, index) => (
                <li key={index} className="relative mb-5 pl-16">
                  {/* Timeline Separator */}
                  <div className="absolute left-0 top-0 flex flex-col items-center">
                    <div className="w-0.5 h-4 bg-white/20"></div>
                    <TimelineDot type={item.type} />
                    <div className="w-0.5 h-4 bg-white/20"></div>
                  </div>

                  {/* Content Card */}
                  <div>
                    <p className="text-white text-base font-secondary mb-2">{item.date}</p>
                    <ExperienceCard item={item} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
