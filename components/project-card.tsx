import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import type { CaseStudy } from "@/lib/projects";

export default function ProjectCard({ project }: { project: CaseStudy }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <Card className="overflow-hidden border-border hover:border-ring pt-0">
        <div className="relative aspect-video bg-muted">
          <Image
            src={project.coverImage}
            alt={project.coverAlt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          />
        </div>
        <CardContent className="px-6 py-5">
          <h3 className="font-serif text-xl text-card-foreground mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
