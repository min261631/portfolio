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
    description: "Developed a full remote telescope streaming system using WebRTC/HLS with a Flask backend for real-time scientific data capture. Implemented automated safety controls using weather APIs and sunrise/sunset logic to protect telescope hardware during unsafe conditions. Delivered a fully containerized architecture (Docker, MediaMTX, Grafana, Prometheus) enabling scalable deployment and observability.",
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
    description: "Built an AR-powered indoor navigation system using React, TypeScript, Three.js and @react-three/fiber, enabling real-time guidance with camera overlays, 3D aisle paths, device-orientation tracking, and precise product detection on shelves. Designed an AI-driven routing engine that personalises the shopper’s path by analysing shopping lists, user behaviour, promotions, and historical purchase patterns—optimising routes beyond just the shortest distance for higher engagement. Implemented a scalable backend workflow using AWS Lambda and serverless functions to process store blueprint data, generate aisle coordinates, and feed intelligent AR/AI recommendations into a dynamic 2D/3D map rendered on the client.",
    imageUrl: "/projects/coles.png",
    images: [
      "/projects/morifarm.png",
      "/projects/morifarm-1.png",
      "/projects/morifarm-2.png",
    ],
    techStack: ["React", "TypeScript"],
  },
  {
    slug: "gallery-enactus",
    title: "Enactus La Trobe",
    role: "QUT Assignment - Python Flask Application",
    description: "Built an AR-powered indoor navigation system using React, TypeScript, Three.js and @react-three/fiber, enabling real-time guidance with camera overlays, 3D aisle paths, device-orientation tracking, and precise product detection on shelves. Designed an AI-driven routing engine that personalises the shopper's path by analysing shopping lists, user behaviour, promotions, and historical purchase patterns—optimising routes beyond just the shortest distance for higher engagement. Implemented a scalable backend workflow using AWS Lambda and serverless functions to process store blueprint data, generate aisle coordinates, and feed intelligent AR/AI recommendations into a dynamic 2D/3D map rendered on the client.",
    imageUrl: "/projects/enactus.png",
    images: [
      "/projects/enactus.png",
    ],
    techStack: ["Python", "Flask", "SQLite"],
    website: "https://enactuslatrobe.org/",
    imageLinksToWebsite: true,
  },
  {
    slug: "gallery-ybit",
    title: "YBit",
    role: "QUT Assignment - Python Flask Application",
    description: "Built an AR-powered indoor navigation system using React, TypeScript, Three.js and @react-three/fiber, enabling real-time guidance with camera overlays, 3D aisle paths, device-orientation tracking, and precise product detection on shelves. Designed an AI-driven routing engine that personalises the shopper's path by analysing shopping lists, user behaviour, promotions, and historical purchase patterns—optimising routes beyond just the shortest distance for higher engagement. Implemented a scalable backend workflow using AWS Lambda and serverless functions to process store blueprint data, generate aisle coordinates, and feed intelligent AR/AI recommendations into a dynamic 2D/3D map rendered on the client.",
    imageUrl: "/projects/ybit1.png",
    images: [
      "/projects/ybit1.png",
      "/projects/ybit2.png",
      "/projects/ybit3.png",
    ],
    techStack: ["Python", "Flask", "SQLite"],
    imageLinksToWebsite: true,
    website: "https://teachme-landing.vercel.app/pages/landing_page.html?fbclid=PAZXh0bgNhZW0CMTEAAafA5kgiQ0W4W_JopoDOcMzlAv4JLpUVvERD2SbDO7dsrLiixijMmNR5QBn3ZQ_aem_dwkPz1C-b9V7n3IAoNwysQ",
  },
]

// Featured projects for homepage (first 3 projects)
export const featuredProjects = projectsData.slice(0, 3)

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((project) => project.slug === slug)
}

