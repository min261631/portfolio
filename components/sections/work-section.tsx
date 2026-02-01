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
    date: "Jul 2023 - Jul 2025 (Graduated)",
    title: "Masters of Information Technology",
    description: "Queensland University of Technology (QUT) <br> - Brisbane, Australia",
    logoUrl: "/logos/qut.png",
    logoAlt: "QUT",
    logoWidth: 80,
    type: "academic",
    position: "right",
  },
  {
    date: "Mar 2023 - Aug 2023",
    title: "Senior Front-End Developer",
    description: "Nexmind AI - Malaysia",
    logoUrl: "/logos/nexmind.png",
    logoAlt: "Nexmind",
    logoWidth: 50,
    type: "work",
    position: "left",
  },
  {
    date: "May 2021 - Nov 2022",
    title: "Front-End Web Developer",
    description: "EasyStore - Malaysia",
    logoUrl: "/logos/easystore.webp",
    logoAlt: "EasyStore",
    logoWidth: 80,
    type: "work",
    position: "right",
  },
  {
    date: "Mar 2021 - Feb 2022",
    title: "Front-End Web Developer (Freelance)",
    description: "IOT Advance - Malaysia",
    logoUrl: "/logos/iotadvance.png",
    logoAlt: "IOT Advance",
    logoWidth: 90,
    type: "work",
    position: "left",
  },
  {
    date: "Dec 2019 - Dec 2020",
    title: "Web Developer",
    description: "Enterprise 73 - Malaysia",
    logoUrl: "/logos/e73.webp",
    logoAlt: "Enterprise 73",
    logoWidth: 150,
    type: "work",
    position: "right",
  },
  {
    date: "2015 - 2019",
    title: "Bachelor in Computer Science (HONs)",
    description: "Quest International University (QIU) - Malaysia",
    logoUrl: "/logos/qiu.jpg",
    logoAlt: "QIU",
    logoWidth: 50,
    type: "academic",
    position: "left",
  },
]

export function WorkSection() {
  return (
    <>
      {/* Desktop Timeline */}
      <section
        id="work"
        className="xl:h-[860px] py-12 xl:py-24 mb-20 hidden lg:block"
        aria-label="Work Experience section"
      >
        <div className="container mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <h2 className="h2 text-accent text-center mx-auto mb-12">Academic and Work Experience.</h2>
          <div className="experience flex">
            <ul className="relative w-full flex flex-col py-1.5 px-4 flex-grow list-none m-0 p-0">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/20 transform -translate-x-1/2"></div>

              {timelineItems.map((item, index) => {
                const isEven = index % 2 === 0
                const dateOnLeft = isEven
                const cardOnRight = isEven

                return (
                  <li key={index} className="relative mb-8 list-none flex min-h-[70px] w-full">
                    <div className="flex items-center w-full">
                      {/* Left Content - Date or Card */}
                      <div className={`w-1/2 ${dateOnLeft ? "pr-8" : "pl-8"}`}>
                        {dateOnLeft ? (
                          <div className="text-white/70 text-sm font-secondary text-right">
                            {item.date}
                          </div>
                        ) : (
                          <div
                            className={`bg-black/50 backdrop-blur-2xl rounded-full flex items-center p-5 pl-10 pr-6 flex-row ${
                              cardOnRight ? "" : "justify-end"
                            }`}
                          >
                            <div className="text-left flex-1 flex-col">
                              <span className="text-lg font-bold text-white font-primary block mb-1">
                                {item.title}
                              </span>
                              <p
                                className="text-white/70 text-sm font-secondary"
                                dangerouslySetInnerHTML={{ __html: item.description }}
                              ></p>
                            </div>
                            <div className="ml-4">
                              <Image
                                src={item.logoUrl}
                                alt={item.logoAlt}
                                width={item.logoWidth || 50}
                                height={item.logoWidth || 50}
                                className="object-contain"
                                unoptimized
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement
                                  target.style.display = "none"
                                }}
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Timeline Separator */}
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="w-0.5 h-8 bg-white/20"></div>
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            item.type === "academic"
                              ? "bg-blue-500 text-white"
                              : "bg-purple-500 text-white"
                          }`}
                        >
                          {item.type === "academic" ? (
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 640 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"></path>
                            </svg>
                          ) : (
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 24 24"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM8 8h12v3H4V8h4zM4 19v-6h6v2h4v-2h6l.001 6H4z"></path>
                            </svg>
                          )}
                        </div>
                        <div className="w-0.5 h-8 bg-white/20"></div>
                      </div>

                      {/* Right Content - Date or Card */}
                      <div className={`w-1/2 ${cardOnRight ? "pl-8" : "pr-8"}`}>
                        {cardOnRight ? (
                          <div
                            className={`bg-black/50 backdrop-blur-2xl rounded-full flex items-center ${
                              index === 0 ? "py-4 px-10 flex-row" : "p-5 px-12 flex-row"
                            }`}
                          >
                            <div>
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
                            <div className="text-right flex-1 flex-col ml-4">
                              <span className="text-lg font-bold text-white font-primary block mb-1">
                                {item.title}
                              </span>
                              <p
                                className="text-white/70 text-sm font-secondary"
                                dangerouslySetInnerHTML={{ __html: item.description }}
                              ></p>
                            </div>
                          </div>
                        ) : (
                          <div className="text-white/70 text-sm font-secondary text-left">
                            {item.date}
                          </div>
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
        className="py-12 mb-20 lg:hidden"
        aria-label="Work Experience section"
      >
        <div className="container mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="h2 text-accent text-center mx-auto mb-12">Academic and Work Experience.</h2>
          <div className="experience flex">
            <ul className="relative w-full">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/20"></div>

              {timelineItems.map((item, index) => (
                <li key={index} className="relative mb-8 pl-16">
                  {/* Timeline Separator */}
                  <div className="absolute left-0 top-0 flex flex-col items-center">
                    <div className="w-0.5 h-4 bg-white/20"></div>
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        item.type === "academic"
                          ? "bg-blue-500 text-white"
                          : "bg-purple-500 text-white"
                      }`}
                    >
                      {item.type === "academic" ? (
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 640 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"></path>
                        </svg>
                      ) : (
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM8 8h12v3H4V8h4zM4 19v-6h6v2h4v-2h6l.001 6H4z"></path>
                        </svg>
                      )}
                    </div>
                    <div className="w-0.5 h-4 bg-white/20"></div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-black/50 backdrop-blur-2xl p-4 rounded flex flex-col">
                    <div className="text-left flex-1 flex-col mb-3">
                      <span className="text-lg font-bold text-white font-primary block mb-1">
                        {item.title}
                      </span>
                      <p
                        className="text-white/70 text-sm font-secondary"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      ></p>
                    </div>
                    <div className="flex items-end justify-between">
                      <p className="text-white/70 text-sm font-secondary">{item.date}</p>
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

