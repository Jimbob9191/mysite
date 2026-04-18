import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <section className="py-24 md:py-36">
        <h1 className="font-serif text-5xl md:text-7xl font-normal leading-none text-foreground mb-6">
          Product Obsessed
          <br />
          Designer & Creative
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-10">
          Hi, I&apos;m James, a product focused UX/UI professional with 5 years experience delivering user friendly, accessible and engaging digital products.
        </p>
        <Link href="/work" className={buttonVariants({ variant: "default" })}>
          View my work
        </Link>
      </section>

      <section className="pb-24">
        <h2 className="font-serif text-3xl font-light text-foreground mb-10">
          Selected work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
