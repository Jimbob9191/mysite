export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  coverAlt: string;
  role: string;
  timeline: string;
  tools: string[];
  problem: string;
  process: string;
  outcome: string;
}

export const projects: CaseStudy[] = [
  {
    slug: "fintrack-redesign",
    title: "FinTrack Dashboard Redesign",
    description:
      "Redesigning a complex financial analytics dashboard to reduce cognitive load and surface actionable insights faster.",
    coverImage: "/images/projects/metamask-cover.png",
    coverAlt: "MetaMask-style crypto wallet UI redesign",
    role: "Lead Product Designer",
    timeline: "Jan – Apr 2024 · 14 weeks",
    tools: ["Figma", "FigJam", "Maze", "Loom"],
    problem:
      "FinTrack's power users were spending an average of 8 minutes per session just orienting themselves before beginning any analytical task. Exit surveys cited 'information overload' as the primary frustration. The business needed to reduce time-to-insight and improve retention among high-value enterprise accounts.\n\nThe existing interface had accumulated five years of feature additions with no coherent information architecture review. Twelve primary navigation items competed for attention, data visualisations lacked consistent encoding rules, and the mobile experience had been abandoned entirely.\n\nStakeholders were caught in a cycle of adding more features to address user complaints, which only compounded the underlying problem. The product team had no shared framework for evaluating whether a given addition helped or hurt the experience.",
    process:
      "I began with a two-week discovery sprint: reviewing session recordings in FullStory, conducting six 45-minute contextual interviews with enterprise users, and running a card sort with 12 participants to understand their mental models of financial data.\n\nFrom this research I identified three distinct user archetypes — the Daily Monitor, the Monthly Analyst, and the Executive Reviewer — each with fundamentally different task flows. The existing navigation had been built around the database schema rather than these jobs-to-be-done.\n\nI ran a two-day design studio workshop with the product and engineering team to ideate on a restructured information architecture. We converged on a progressive disclosure model: a summary layer for daily monitoring that expanded into detailed drill-down views on demand.\n\nPrototypes were tested with six users in Maze across two rounds of iteration, reducing task completion time from 8 minutes to under 2 minutes on the primary scenario. Engineering was involved from the first design review to flag implementation constraints early.",
    outcome:
      "The redesigned dashboard shipped to all enterprise accounts in Q3 2024. At 60-day post-launch:\n\n- Average time-to-first-meaningful-action reduced by 74%\n- Enterprise account 30-day retention improved from 61% to 79%\n- Support tickets related to navigation confusion dropped by 52%\n- NPS among daily active users increased 18 points\n\nThe component library created for this project was adopted as the foundation for FinTrack's new design system, covering 14 additional product surfaces over the following two quarters.",
  },
  {
    slug: "journeymap-onboarding",
    title: "JourneyMap Onboarding Flow",
    description:
      "Rebuilding a SaaS onboarding experience from the ground up to cut time-to-value and reduce churn in the critical first week.",
    coverImage: "/images/projects/journeymap-cover.png",
    coverAlt: "JourneyMap onboarding flow screens",
    role: "UX Designer (Solo)",
    timeline: "Aug – Oct 2023 · 10 weeks",
    tools: ["Figma", "Notion", "Hotjar", "Typeform"],
    problem:
      "JourneyMap, a customer journey mapping SaaS tool, was losing 68% of trial users before they created their first map. Hotjar recordings revealed most users arrived on an empty canvas with no guidance, stared at it for under 90 seconds, and churned without taking any action.\n\nThe product had significant depth but no scaffolding to surface that depth to new users. The core tension: power users needed immediate access to the full canvas, but new users needed structure and guidance. A single onboarding flow could not serve both groups.\n\nThe founding team had iterated on tooltips and walkthroughs repeatedly without meaningful improvement, which suggested the problem was not the presentation of guidance but the absence of a meaningful starting point.",
    process:
      "I audited 40 Hotjar session recordings and tagged every moment of visible hesitation or abandonment. Three failure patterns emerged: users did not know what a journey map was, users understood the concept but not the interface, and users understood the interface but had no sample data to work with.\n\nI designed three parallel solutions to test — a blank canvas with contextual tooltips, a template library with one-click scaffolding, and an AI-assisted first-map wizard. Using Typeform surveys, I recruited 24 trial users for moderated remote testing, eight per variant.\n\nThe template library variant significantly outperformed the others on task completion and qualitative satisfaction. I refined the template selection UI through two more rapid prototype cycles, then worked with engineering on a phased implementation plan that allowed the feature to ship incrementally without a big-bang release.\n\nI also designed a parallel 'skip to canvas' entry point to preserve the power-user workflow, ensuring the new onboarding did not create friction for returning users.",
    outcome:
      "The new onboarding shipped in October 2023. Results at 30 days:\n\n- Trial-to-first-map completion rate improved from 32% to 71%\n- Week-1 churn reduced from 68% to 41%\n- Trial-to-paid conversion rate increased by 22%\n- Average time to first map creation: 6 minutes (down from 18 minutes for users who previously completed it)\n\nThe template library introduced as part of this project subsequently became one of JourneyMap's top-cited features in sales calls and was expanded to 40 templates within six months of launch.",
  },
];

export function getProjectBySlug(slug: string): CaseStudy | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: CaseStudy | null;
  next: CaseStudy | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
