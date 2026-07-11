import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ALL_PROJECTS } from "@/data/projects";
import { SITE } from "@/lib/constants";
import { ProjectsGrid } from "./ProjectsGrid";

export const metadata: Metadata = {
  title: "Усі проєкти",
  description: `Повне портфоліо реалізованих сайтів ${SITE.name} — ${ALL_PROJECTS.length} проєктів у різних нішах бізнесу.`,
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 sm:pt-40 sm:pb-32">
        <ProjectsGrid />
      </main>
      <Footer />
    </>
  );
}
