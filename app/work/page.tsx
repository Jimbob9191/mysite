import type { Metadata } from "next";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected UX/UI design projects by Jane Doe.",
};

export default function WorkPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="font-serif text-5xl font-light text-foreground mb-4">
        Work
      </h1>
      <p className="text-muted-foreground mb-14 max-w-xl">
        A selection of case studies spanning dashboard design, onboarding flows,
        and design systems.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
