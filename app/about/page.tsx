import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About",
  description: "About James Molyneux-Birch — UX/UI designer.",
};

const skills = [
  "Design Systems",
  "Information Architecture",
  "Interaction Design",
  "Visual Design",
  "User Research",
  "Prototyping & Testing",
  "Accessibility",
];

const tools = [
  "Figma",
  "Claude Code",
  "Adobe",
  "Slack",
  "Jira",
  "Hotjar",
  "Google Analytics",
  "ABTasty",
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="font-serif text-5xl font-light text-foreground mb-8">
        About
      </h1>

      <div className="space-y-5 text-base text-muted-foreground leading-relaxed mb-16">
        <p>
          Hey, I&apos;m James Molyneux-Birch, a UX/UI designer with over five
          years of experience across fintech, healthcare, and ecommerce -
          working with both early-stage startups and established brands.
        </p>
        <p>
          I care about design that earns trust: the kind that gets out of the
          way and lets people do what they actually came to do. Currently
          designing at Foundation Health, previously at Pavers Shoes and coeo.
          Open to well-considered problems at companies that care about craft.
          Outside of work I&apos;m usually shooting photos, playing video
          games, or pulling apart whatever AI tool just dropped.
        </p>
      </div>

      <Separator className="mb-12" />

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="font-serif text-2xl font-light text-foreground mb-5">
            Skills
          </h2>
          <ul className="space-y-2">
            {skills.map((s) => (
              <li key={s} className="text-sm text-muted-foreground">
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-2xl font-light text-foreground mb-5">
            Tools
          </h2>
          <ul className="space-y-2">
            {tools.map((t) => (
              <li key={t} className="text-sm text-muted-foreground">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator className="mb-12" />

      <div className="bg-card border border-border rounded-lg px-6 py-5">
        <p className="text-sm text-muted-foreground flex items-center">
          <span
            className="inline-block shrink-0 w-2 h-2 rounded-full bg-green-500 mr-2"
            aria-hidden="true"
          />
          <span>
            Currently available for projects. Interested in working together?{" "}
            <a
              href="/contact"
              className="text-foreground underline underline-offset-4"
            >
              Get in touch.
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
