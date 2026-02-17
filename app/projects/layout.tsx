import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "All Projects | Mihini Ranasinghe",
  description: "A comprehensive showcase of my work, including professional projects and academic assignments.",
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

