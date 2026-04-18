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
    coverImage: "/images/projects/cover-fintrack.png",
    coverAlt: "FinTrack dashboard redesign",
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
    slug: "design-system",
    title: "Modular Design System",
    description:
      "Building a scalable component library and token-based design system to unify a fragmented product suite across 6 product teams.",
    coverImage: "/images/projects/designsystem-cover.png",
    coverAlt: "Design system component library overview",
    role: "Lead Design Systems Designer",
    timeline: "Mar – Aug 2023 · 24 weeks",
    tools: ["Figma", "Storybook", "Notion", "GitHub"],
    problem:
      "Across six product teams, the same UI patterns had been built independently more than a dozen times. Buttons, form fields, and modal dialogs all looked and behaved slightly differently depending on which team had shipped the surface. Users moving between products experienced an inconsistent brand and inconsistent interaction patterns, eroding trust and increasing cognitive load.\n\nEngineering estimated that 30–40% of front-end development time was spent rebuilding solved UI problems. Design reviews were slow because there was no shared vocabulary — designers and engineers spent meeting time resolving ambiguity that a shared system would have eliminated.\n\nThe organisation had attempted a design system twice before. Both efforts stalled because they were treated as side projects without dedicated ownership or a clear adoption strategy.",
    process:
      "I started by auditing the existing UI across all six products, cataloguing every unique component variant and visual inconsistency. This gave me a data-driven argument for prioritisation: the 12 most-duplicated patterns covered 80% of all UI surface area.\n\nI ran a series of working sessions with engineers from each team to understand implementation constraints before designing anything. This revealed that three teams used different CSS frameworks, which shaped the decision to build the system in framework-agnostic tokens first.\n\nI designed and documented the token layer (colour, spacing, typography, elevation) before touching components. This gave teams something immediately useful — they could adopt tokens without waiting for the full component library.\n\nComponents were built iteratively with paired engineering from the platform team, published to Storybook with usage guidelines and do/don't examples. I ran monthly office hours for design and engineering consumers to surface friction and feed it back into the backlog.",
    outcome:
      "The system launched with 48 components covering the core interaction patterns. At six months post-launch:\n\n- Adoption across 5 of 6 product teams (the sixth onboarding in progress)\n- Estimated 35% reduction in time spent on UI implementation per sprint, validated by engineering leads\n- Design review cycles shortened by an average of 2 days per feature\n- Accessibility compliance improved: 100% of system components met WCAG 2.2 AA\n\nThe system is now maintained by a cross-functional working group and has become the foundation for all new product development.",
  },
  {
    slug: "journeymap-onboarding",
    title: "JourneyMap Onboarding Flow",
    description:
      "Rebuilding a SaaS onboarding experience from the ground up to cut time-to-value and reduce churn in the critical first week.",
    coverImage: "/images/projects/cover-journeymap.png",
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
  {
    slug: "mobile-checkout",
    title: "Mobile Checkout Redesign",
    description:
      "Overhauling a high-drop-off mobile checkout flow for a retail brand to lift conversion and reduce payment abandonment.",
    coverImage: "/images/projects/mobile-cover.png",
    coverAlt: "Mobile checkout flow redesign screens",
    role: "Senior UX/UI Designer",
    timeline: "Nov 2022 – Feb 2023 · 12 weeks",
    tools: ["Figma", "Maze", "Hotjar", "Zeplin"],
    problem:
      "A mid-market retail brand was seeing a 71% cart abandonment rate on mobile — well above the industry benchmark of 55%. Revenue analytics showed that users who reached the payment step were converting at under 40%, pointing to a problem concentrated in the final stages of checkout rather than earlier in the funnel.\n\nThe existing checkout had been built incrementally over four years and had accumulated significant technical debt in the UI layer: inconsistent form field behaviour, an address entry step that required 14 individual taps, and a payment screen that loaded a third-party iframe with no loading state. On slower connections, users frequently assumed the page had frozen and abandoned.\n\nThe business case was direct: a 10-point improvement in mobile conversion would generate an estimated £1.2M in incremental annual revenue at current traffic levels.",
    process:
      "I began with a structured teardown of the existing flow, mapping every tap, input, and screen transition from cart to confirmation. I then recruited 10 mobile users for moderated usability sessions, asking them to complete a purchase while thinking aloud.\n\nFive of the ten sessions ended in abandonment at the payment step. Qualitative feedback clustered around three themes: distrust of the payment screen's visual design, frustration with address re-entry (many users had shipped to the same address before), and confusion about whether the order had actually been placed after tapping the CTA.\n\nI designed a revised flow that consolidated the four-step checkout into two screens, integrated address autocomplete via the Google Places API, redesigned the payment step with explicit trust signals, and added a persistent order summary panel visible at every step. Skeleton loading states replaced the blank wait during iframe initialisation.\n\nTwo rounds of prototype testing with 8 users each validated the direction. I worked closely with the mobile engineering team on gesture handling and keyboard behaviour, areas where design intent and implementation had previously diverged.",
    outcome:
      "The redesigned checkout shipped in February 2023. Results at 60 days:\n\n- Mobile cart abandonment reduced from 71% to 48%\n- Payment step conversion increased from 38% to 67%\n- Average checkout completion time reduced by 43%\n- Estimated incremental annual revenue attributable to conversion uplift: £1.6M\n\nThe address autocomplete component was subsequently adopted across the brand's other digital touchpoints, and the design patterns established in this project informed a later desktop checkout refresh.",
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
