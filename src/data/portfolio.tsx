import northstarImage from "@/src/app/projects/company/northstar/northstar.webp";
import sideprojimg from "@/src/app/projects/company/side-projects.webp";
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
    title: "Client Projects",
    category: "Webflow · Professional Work",
    description:
      "A selection of client websites I worked on as the primary Webflow developer, focused on responsive implementation, interactions, CMS, and production-ready builds.",
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
      "Personal tools and experiments I built while exploring faster workflows, automation, AI, and practical ways to solve repetitive problems.",
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
    category: "Next.js · AI-Assisted Development",
    description:
      "Personal builds, front-end experiments, and small projects where I explore new tools, patterns, and AI-assisted development workflows.",
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
      "Responsive builds, CMS structure, reusable components, interactions, and production-ready Webflow implementation.",
  },
  {
    name: "Responsive Front-End",
    level: 82,
    description:
      "Building layouts that adapt cleanly across desktop, tablet, and mobile while preserving the intended design hierarchy.",
  },
  {
    name: "Figma to Web",
    level: 85,
    description:
      "Translating provided designs into structured, responsive, and functional web experiences.",
  },
  {
    name: "AI-Assisted Development",
    level: 72,
    description:
      "Using AI tools to prototype, debug, iterate, and explore front-end development workflows more efficiently.",
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
      "Primary visual development platform for responsive and scalable website implementation.",
    order: 1,
  },
  {
    id: "figma",
    name: "Figma",
    category: "Design",
    status: "In use",
    description:
      "Used for design handoff, reviewing layouts, understanding component systems, and translating interfaces into development.",
    order: 2,
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Development",
    status: "Learning",
    description:
      "Used for front-end experiments, personal projects, and AI-assisted coding workflows.",
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
      "Used for fast, consistent styling and responsive front-end implementation.",
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