import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, getAdjacentProjects, projects } from "@/lib/projects";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: { images: [project.coverImage] },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <article className="max-w-3xl mx-auto px-6 pb-24">
      <div className="relative aspect-[16/7] bg-muted -mx-6 mb-12 md:mx-0 md:rounded-lg overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.coverAlt}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-8">
        {project.title}
      </h1>

      <dl className="grid grid-cols-3 gap-4 mb-12 p-6 bg-card border border-border rounded-lg">
        <div>
          <dt className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
            Role
          </dt>
          <dd className="text-sm text-foreground">{project.role}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
            Timeline
          </dt>
          <dd className="text-sm text-foreground">{project.timeline}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
            Tools
          </dt>
          <dd className="text-sm text-foreground">{project.tools.join(", ")}</dd>
        </div>
      </dl>

      <Separator className="mb-12" />

      {[
        { heading: "The Problem", content: project.problem },
        { heading: "The Process", content: project.process },
        { heading: "The Outcome", content: project.outcome },
      ].map(({ heading, content }) => (
        <section key={heading} className="mb-14">
          <h2 className="font-serif text-2xl font-light text-foreground mb-4">
            {heading}
          </h2>
          {content.split("\n\n").map((para, i) => (
            <p
              key={i}
              className="text-base text-muted-foreground leading-relaxed mb-4"
            >
              {para}
            </p>
          ))}
        </section>
      ))}

      <Separator className="mb-12" />

      <nav className="flex justify-between gap-4">
        {prev ? (
          <Link
            href={`/work/${prev.slug}`}
            className={buttonVariants({ variant: "ghost" }) + " h-auto py-3 flex-col items-start"}
          >
            <span className="text-xs text-muted-foreground mb-0.5">← Previous</span>
            <span className="text-sm text-foreground">{prev.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/work/${next.slug}`}
            className={buttonVariants({ variant: "ghost" }) + " h-auto py-3 flex-col items-end"}
          >
            <span className="text-xs text-muted-foreground mb-0.5">Next →</span>
            <span className="text-sm text-foreground">{next.title}</span>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </article>
  );
}
