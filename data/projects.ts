export interface Project {
  slug: string
  title: string
  role: string
  description: string
  imageUrl: string
  images: string[] // Array of image URLs for the gallery
  techStack?: string[]
  website?: string
  appSumo?: string
  imageLinksToWebsite?: boolean // If true, clicking the image in gallery will go to the website
}

export const projectsData: Project[] = [
  {
    slug: "gallery-nexmind",
    title: "Remote Scientific Data Capture & Control (RSDCC)",
    role: "Frontend Developer at Nexmind AI",
    description:
      "Built a remote telescope monitoring and streaming platform for scientific data capture. Implemented real-time video delivery with a Flask backend and automated safety controls (weather + sunrise/sunset logic) to protect hardware during unsafe conditions. Delivered a containerised stack with MediaMTX, FFmpeg, Grafana and Prometheus for reliable deployment, monitoring, and observability.",
    imageUrl: "/projects/rsdcc.png",
    images: [
      "/projects/rsdcc.png",
      "/projects/rsdcc2.png",
      "/projects/rsdcc3.png",
      "/projects/rsdcc4.png",
    ],
    techStack: ["Vue.js", "Bootstrap"],
    website: "https://www.nexmind.ai/",
    appSumo: "https://appsumo.com/products/nexmind/?query=NexMind",
  },
  {
    slug: "gallery-morifarm",
    title: "Map My Coles",
    role: "Frontend Developer at IOT Advance",
    description:
      "Developed an AR-powered in-store navigation experience that guides shoppers using camera overlays and interactive 2D/3D maps. Built the UI with React + TypeScript and implemented path visualisation with Three.js / @react-three/fiber, including device-orientation tracking for smoother guidance. Supported intelligent routing via a serverless workflow (AWS Lambda) to process store blueprint data, generate aisle coordinates, and feed personalised navigation recommendations to the client.",
    imageUrl: "/projects/coles.png",
    images: ["/projects/morifarm.png", "/projects/morifarm-1.png", "/projects/morifarm-2.png"],
    techStack: ["React", "TypeScript"],
  },
  {
    slug: "gallery-enactus",
    title: "Enactus La Trobe",
    role: "Tech Lead / Web Developer (Enactus La Trobe)",
    description:
      "Designed and maintained the Enactus La Trobe website to support the club’s public presence, recruitment, and sponsor visibility. Focused on clean UI, fast load times, and easy content updates so the team could promote initiatives and events quickly. Implemented structured pages and reusable components to keep the site consistent across projects and campaigns.",
    imageUrl: "/projects/enactus.png",
    images: ["/projects/enactus.png"],
    techStack: ["Python", "Flask", "SQLite"],
    website: "https://enactuslatrobe.org/",
    imageLinksToWebsite: true,
  },
  {
    slug: "gallery-ybit",
    title: "YBit",
    role: "Co-Founder / Product & Full-Stack Developer",
    description:
      "Built an early-stage EdTech product concept focused on ‘learning while scrolling’ through bite-sized, personalised video lessons. Worked on product positioning, landing experience, and user flow to validate interest and communicate the value clearly to students and early adopters. Focused on rapid iteration: testing messaging, refining the pitch, and shaping a roadmap for expansion into Australia.",
    imageUrl: "/projects/ybit1.png",
    images: ["/projects/ybit1.png", "/projects/ybit2.png", "/projects/ybit3.png"],
    techStack: ["Python", "Flask", "SQLite"],
    imageLinksToWebsite: true,
    website:
      "https://teachme-landing.vercel.app/pages/landing_page.html?fbclid=PAZXh0bgNhZW0CMTEAAafA5kgiQ0W4W_JopoDOcMzlAv4JLpUVvERD2SbDO7dsrLiixijMmNR5QBn3ZQ_aem_dwkPz1C-b9V7n3IAoNwysQ",
  },
  {
    slug: "gallery-iffa",
    title: "IFFA Admin Panel",
    role: "Full-Stack Developer (IFFA)",
    description:
      "Developed an internal admin panel to manage platform content and operations for IFFA. Implemented secure login, structured data management, and a clean workflow for staff to update records without technical help. Focused on reliability and usability—making day-to-day admin tasks faster, clearer, and less error-prone.",
    imageUrl: "/projects/admin1.png",
    images: [
      "/projects/admin1.png",
      "/projects/admin2.png",
      "/projects/admin3.png",
      "/projects/admin4.png",
      "/projects/admin5.png",
    ],
    techStack: ["Python", "Flask", "SQLite"],
    imageLinksToWebsite: true,
    website: "https://api.iffa.com.au/login",
  },
  {
    slug: "gallery-cropwise",
    title: "Cropwise",
    role: "Founder / Full-Stack Developer",
    description:
      "Built an AI-powered crop recommendation platform that helps users choose suitable crops based on environmental and farm conditions. Integrated an AI layer (Gemini) to generate practical recommendations and explanations, then designed the app flow so results are easy to understand and act on. Focused on real-world impact: turning raw inputs into clear decisions, with a scalable path for adding datasets and automation over time.",
    imageUrl: "/projects/cp1.jpg",
    images: [
      "/projects/cp1.jpg",
      "/projects/cp2.jpg",
      "/projects/cp3.jpg",
      "/projects/cp4.jpg",
      "/projects/cp5.jpg",
      "/projects/cp6.jpg",
      "/projects/cp7.jpg",
      "/projects/cp8.jpg",
    ],
    techStack: ["Python", "Flask", "SQLite"],
    imageLinksToWebsite: false,
  },
  {
    slug: "gallery-iffamain",
    title: "IFFA",
    role: "Full-Stack Developer (IFFA)",
    description:
      "Contributed to the main IFFA web platform with a focus on building polished, user-friendly experiences and supporting business goals. Worked across UI and backend integration to ensure pages were responsive, consistent, and easy to maintain. Helped align the site structure and content with marketing and operational needs.",
    imageUrl: "/projects/iffa.png",
    images: ["/projects/iffa.png"],
    techStack: ["Python", "Flask", "SQLite"],
    website: "https://www.iffa.com.au/",
    imageLinksToWebsite: true,
  },
  {
    slug: "gallery-archimagnet",
    title: "Archimagnet",
    role: "IT & Systems Coordinator / Developer (Archimagnet)",
    description:
      "Led day-to-day IT and systems setup to keep operations smooth across clients and internal workflows. Managed Microsoft 365 / OneDrive structures, access control, and device setup, and supported file-based production workflows for tools like CabMaster and Mozaik. Created clear setup guides and standardised folder structures so teams and clients could collaborate reliably without constant troubleshooting.",
    imageUrl: "/projects/archi.png",
    images: ["/projects/archi.png"],
    techStack: ["Python", "Flask", "SQLite"],
    website: "https://archimagnet.com.au/",
    imageLinksToWebsite: true,
  },
]

// Featured projects for homepage (first 3 projects)
export const featuredProjects = projectsData.slice(0, 3)

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((project) => project.slug === slug)
}
