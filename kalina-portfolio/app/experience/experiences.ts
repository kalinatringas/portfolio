export interface Experience {
  id: number;
  slot: string,
  title: string;
  subtitle: string;
  dates: string;
  details: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    slot: "Slot 01",
    title: "Google Developers Group",
    subtitle: "Frontend Subteam Lead",
    dates: "Sept. 2025 - Dec. 2025",
    details: [
      "Lead a 10+ student engineering team building a university-wide bartering application using modern web technologies",
    "Mentor developers in React, JavaScript, TypeScript, and TailwindCSS through code reviews, pair programming, and technical walkthroughs",
    "Manage Git workflows, sprint planning, and coordinate development timelines across 10+ contributors",
    "Facilitate weekly stand-ups and maintain code quality standards in a fast-paced, collaborative environment"
    ],
  },
  {
    id: 2,
    slot: "Slot 02",
    title: "Genesis Dance Crew",
    subtitle: "External Vice President",
    dates: "May. 2024 - Jan. 2025",
    details: [
      "Organized and hosted large-scale community events",
      "Led cross-functional teams",
      "Managed logistics and outreach",
    ],
  },
  {
    id: 4,
    slot: "Slot 04",
    title: "Genesis Dance Crew",
    subtitle: "Secretary",
    dates: "May 2025 - Jan. 2026",
    details: [
        "Built and optimized digital systems improving operational efficiency by 65%, demonstrating ability to translate requirements into practical engineering solutions",
        "Automated administrative workflows using programming, reducing workload by 4 hours weekly",
        "Managed internal communications and documentation systems for 50+ members"
    ],
  },
  {
    id: 3,
    slot: "Slot 03",
    title: "Kogna",
    subtitle: "Founding Front-end Developer",
    dates: "Sep 2025 - Jan 2026",
    details: [
      "Develop production-ready UI components using React, TypeScript, and TailwindCSS",
    "Build AI business intelligence dashboards, implementing full-stack features connecting UI to backend data systems",
    "Collaborate with backend engineers to integrate RESTful APIs and develop AI-powered chatbot for natural language queries",
    "Contribute to Agile development processes within a 6-person team, participating in code reviews, sprint planning, and following software engineering best practices"
    ]
  }, {
    id: 5,
    slot: "Slot 05",
    title: "KidzHack",
    subtitle: "Software Engineer Intern",
    dates: "Jan 2026 - Now",
    details: [
      "Implement responsive, user-centered front-end features with Angular and CSS, supporting platform integration for youth-focused educational technologies"
    ]
  }
];