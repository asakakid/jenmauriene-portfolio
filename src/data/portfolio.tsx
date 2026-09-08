import northstarImage from "@/src/app/projects/company/northstar/northstar.webp";
import sideprojimg from"@/src/app/projects/company/side-projects.webp";
import experimentsimg from "@/src/app/projects/company/experiments.webp";
import { StaticImageData } from "next/dist/shared/lib/image-external";

export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string | StaticImageData;
  technologies: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Company Projects",
    category: "Webflow · Client Work",
    description:
      "A collection of company builds, fixes, and late-night feedback rounds — with the client names politely wearing disguises.",
    image: northstarImage,
    technologies: [
      "Webflow",
      "Client-First",
      "Components",
    ],
    href: "/projects/company",
  },

  {
    id: 2,
    title: "Side Projects",
    category: "Automation · Experiments",
    description:
      "Things I built because I thought, “there has to be a faster way.” Including a scraper that started as a work problem.",
    image: sideprojimg,
    technologies: [
      "Python",
      "Automation",
      "AI",
    ],
    href: "/projects/side",
  },

  {
    id: 3,
    title: "Portfolio & Experiments",
    category: "Next.js · Vibe Coding",
    description:
      "Personal builds, front-end experiments, and places where I let myself poke at code until something interesting happens.",
    image: experimentsimg,
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "AI-Assisted",
    ],
    href: "/projects/experiments",
  },
];

export type Skill = {
  name: string;
  level: number;
  description: string;
};

export const skills: Skill[] = [
  {
    name: "Webflow Development",
    level: 90,
    description:
      "Responsive builds, CMS structure, reusable components, animations, and production-ready implementation.",
  },
  {
    name: "Responsive Front-End",
    level: 82,
    description:
      "Layouts that adapt properly across desktop, tablet, and mobile without sacrificing hierarchy.",
  },
  {
    name: "Figma to Web",
    level: 85,
    description:
      "Translating designs into clean, structured, and responsive websites.",
  },
  {
    name: "AI-Assisted Development",
    level: 72,
    description:
      "Using AI tools to prototype, debug, iterate, and build front-end experiences faster.",
  },
];

export type Tool = {
  id: string;
  name: string;
  category: "Design" | "Development" | "Automation";
  status: "Core" | "In use" | "Learning" | "Experimental";
  description?: string;
  order: number;
};

export const tools: Tool[] = [
  {
    id: "webflow",
    name: "Webflow",
    category: "Development",
    status: "Core",
    description:
      "Primary visual development platform for responsive and scalable website builds.",
    order: 1,
  },
  {
    id: "figma",
    name: "Figma",
    category: "Design",
    status: "In use",
    description:
      "Used for layout planning, design handoff, and interface structure.",
    order: 2,
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Development",
    status: "Learning",
    description:
      "Used for front-end experiments, portfolio builds, and AI-assisted coding workflows.",
    order: 3,
  },
  {
    id: "react",
    name: "React",
    category: "Development",
    status: "Learning",
    description:
      "Used for component-based front-end development and interface logic.",
    order: 4,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Development",
    status: "In use",
    description:
      "Used for fast, consistent styling and responsive implementation.",
    order: 5,
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "Development",
    status: "Core",
    description:
      "Primary development environment for coding, debugging, and iteration.",
    order: 6,
  },
  {
    id: "github",
    name: "GitHub",
    category: "Development",
    status: "In use",
    description:
      "Used for version control, project history, and deployment workflows.",
    order: 7,
  },
  {
    id: "ai-tools",
    name: "AI Coding Tools",
    category: "Automation",
    status: "Core",
    description:
      "Used for prototyping, debugging, iteration, and accelerating development workflows.",
    order: 8,
  },
];