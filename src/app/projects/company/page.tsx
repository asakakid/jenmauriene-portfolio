import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";

import Container from "@/src/components/layout/Container";

const companyProjects = [
  {
    id: 1,
    title: "Solerabank",
    eyebrow: "Webflow Development",
    description:
      "My first full Webflow project assignment — translating supplied designs into a responsive multi-page build using Client-First, reusable components, and a custom search interaction.",
    image: "/images/projects/solerabank.webp",
    technologies: [
      "Webflow",
      "Client-First",
      "Components",
    ],
    href: "/projects/company/northstar",
    note: "My first full Webflow project assignment",
  },

  {
    id: 2,
    title: "Spalk",
    eyebrow: "Webflow Development · Interactions",
    description:
      "A sports-tech website I developed in Webflow, with Rive animations, Lenis smooth scrolling, CMS functionality, custom video controls, Swiper.js, and interaction-heavy front-end work.",
    image: "/images/projects/spalk.png",
    technologies: [
      "Webflow",
      "Rive",
      "Lenis",
      "Finsweet",
      "Swiper.js",
      "Custom Code",
    ],
    href: "/projects/company/relay",
    note: "Where custom interactions started getting fun",
  },

  {
    id: 3,
    title: "Jorie AI",
    eyebrow: "Webflow Development · Custom Integration",
    description:
      "A healthcare-AI website I developed in Webflow, featuring more advanced Rive interactions, CMS-driven layouts, marquee motion, and a custom Shopify integration for its merch experience.",
    image: "/images/projects/jorie-ai.png",
    technologies: [
      "Webflow",
      "Rive",
      "CMS",
      "Shopify",
      "Custom Code",
    ],
    href: "/projects/company/pulse",
    note: "The one where Webflow met Shopify",
  },

  {
    id: 4,
    title: "Ron J. West",
    eyebrow: "Webflow Development · AI-Assisted Build",
    description:
      "An executive coaching and leadership development website for Ron J. West, covering his coaching, advisory services, and Chrysalis leadership framework. The initial Webflow implementation was accelerated through an AI-assisted Claude/MCP workflow, then I took over the project to refine the build, align it closely with the supplied design and client expectations, and complete the experience with extensive custom code.",
    image: "/images/projects/ron-j-west.png",
    technologies: [
      "Webflow",
      "Claude",
      "MCP",
      "Custom Code",
      "Responsive Development",
    ],
    href: "/projects/company/ron-j-west",
    note: "My first full project built around an AI-assisted Webflow workflow",
  },

  {
  id: 5,
  title: "Ignition Benefits",
  eyebrow: "Webflow Development · Rebrand",
  description:
    "An employee benefits platform helping companies better understand, compare, and manage their benefits costs. I handled the Webflow implementation of a client-led rebrand, reskinning the existing website across its pages to match the new Figma designs and updated visual identity while preserving the underlying site structure and functionality.",
  image: "/images/projects/ignition-benefits.png",
  technologies: [
    "Webflow",
    "Figma",
    "Responsive Development",
    "Components",
    "Client-First",
  ],
  href: "/projects/company/ignition-benefits",
  note: "A full-site rebrand without rebuilding from scratch",
},
{
  id: 6,
  title: "HZM Europa",
  eyebrow: "Webflow Development · Map Integration",
  description:
    "A heavy-equipment website built from supplied Figma designs in Webflow, with CMS-driven product content and a custom dealer-finder experience using Mapbox and location search functionality.",
  image: "/images/projects/hzm.webp",
  technologies: [
    "Webflow",
    "Figma",
    "Webflow CMS",
    "Mapbox",
    "JavaScript",
    "API Integration",
    "Responsive Development",
  ],
  href: "/projects/company/hzm-europa",
  note: "Where Webflow met maps and location search",
},
];

export default function CompanyProjectsPage() {
  return (
    <main className="pb-24 pt-28 md:pt-32">
      <Container>
        {/* BACK */}
        <Link
          href="/#work"
          className="
            group
            mb-10
            inline-flex
            items-center
            gap-2
            text-sm
            text-[#7d707a]
            transition-colors
            duration-300
            hover:text-[#29232d]
          "
        >
          <ArrowLeft
            size={15}
            className="
              transition-transform
              duration-300
              group-hover:-translate-x-1
            "
          />

          Back to selected work
        </Link>

        {/* HERO */}
        <section
          className="
            relative
            overflow-hidden
            rounded-[34px]
            border
            border-white/80
            bg-white/46
            p-7
            shadow-[0_24px_80px_rgba(79,61,73,0.07)]
            backdrop-blur-xl
            md:p-10
            lg:p-14
          "
        >
          {/* AMBIENT GLOWS */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-72
              w-72
              rounded-full
              bg-[#efa6c1]/12
              blur-[90px]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-24
              left-[30%]
              h-64
              w-64
              rounded-full
              bg-[#b9a7ee]/10
              blur-[90px]
            "
          />

          <div
            className="
              relative
              z-10
              grid
              gap-12
              lg:grid-cols-[1.15fr_0.85fr]
              lg:items-end
              lg:gap-16
            "
          >
            {/* LEFT */}
            <div>
              <p
                className="
                  mb-5
                  text-sm
                  uppercase
                  tracking-[0.14em]
                  text-[#7d707a]
                "
              >
                Professional Work
              </p>

              <h1
                className="
                  max-w-4xl
                  text-5xl
                  font-semibold
                  leading-[0.92]
                  tracking-[-0.06em]
                  text-[#29232d]
                  md:text-7xl
                "
              >
                Client work,
                <br />
                through my developer lens.
              </h1>

              <p
                className="
                  mt-7
                  max-w-2xl
                  text-lg
                  leading-8
                  text-[#7d707a]
                "
              >
                A selection of websites I&apos;ve worked on through
                Dorxata, where I served as the primary Webflow developer
                on the projects featured here. Each case study focuses
                on the development work I personally handled.
              </p>
            </div>

            {/* PROJECT NOTE */}
            <div
              className="
                lg:flex
                lg:justify-end
              "
            >
              <div
                className="
                  max-w-sm
                  rotate-[1deg]
                  rounded-[26px]
                  border
                  border-white/85
                  bg-white/68
                  p-6
                  shadow-[0_18px_45px_rgba(79,61,73,0.06)]
                  backdrop-blur-xl
                "
              >
                <BriefcaseBusiness
                  size={16}
                  className="mb-4 text-[#8f7ccf]"
                />

                <p
                  className="
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.14em]
                    text-[#9b8f99]
                  "
                >
                  A quick project note
                </p>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-[#6f636d]
                  "
                >
                  These projects were completed through Dorxata. I&apos;m
                  highlighting my development contributions using only
                  publicly available project details.
                </p>

                <p
                  className="
                    mt-4
                    text-xs
                    italic
                    text-[#9b8f99]
                  "
                >
                  The websites belong to their respective owners. ✦
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECT INDEX */}
        <section className="py-20 md:py-28">
          <div
            className="
              mb-10
              flex
              flex-col
              gap-5
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div>
              <p
                className="
                  mb-3
                  text-sm
                  uppercase
                  tracking-[0.14em]
                  text-[#7d707a]
                "
              >
                The collection
              </p>

              <h2
                className="
                  max-w-2xl
                  text-4xl
                  font-semibold
                  leading-[0.98]
                  tracking-[-0.05em]
                  text-[#29232d]
                  md:text-5xl
                "
              >
                Websites I&apos;ve helped bring to life.
              </h2>
            </div>

            <p
              className="
                max-w-sm
                text-sm
                leading-6
                text-[#8b7f89]
              "
            >
              Each one has its own story — the project I was handed,
              the development work I handled, and the techniques I
              picked up along the way.
            </p>
          </div>

          {/* PROJECT LIST */}
          <div className="space-y-6">
            {companyProjects.map((project, index) => (
              <Link
                key={project.id}
                href={project.href}
                className="
                  group
                  relative
                  grid
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/75
                  bg-white/48
                  shadow-[0_18px_55px_rgba(79,61,73,0.06)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  ease-out
                  hover:-translate-y-1
                  hover:bg-white/62
                  hover:shadow-[0_24px_65px_rgba(79,61,73,0.09)]
                  lg:grid-cols-[0.9fr_1.1fr]
                "
              >
                {/* IMAGE */}
                <div
                  className="
                    relative
                    min-h-[280px]
                    overflow-hidden
                    lg:min-h-[390px]
                  "
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} website`}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.025]
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#29232d]/10
                      to-transparent
                    "
                  />

                  {/* NUMBER */}
                  <div
                    className="
                      absolute
                      left-5
                      top-5
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/80
                      bg-white/75
                      text-xs
                      font-medium
                      text-[#7d707a]
                      shadow-[0_8px_20px_rgba(79,61,73,0.08)]
                      backdrop-blur-xl
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* CONTENT */}
                <div
                  className="
                    relative
                    flex
                    flex-col
                    justify-between
                    p-7
                    md:p-9
                    lg:p-10
                  "
                >
                  <div>
                    <div
                      className="
                        mb-5
                        flex
                        items-center
                        gap-2
                      "
                    >
                      <Sparkles
                        size={14}
                        className="text-[#d96c9b]"
                      />

                      <p
                        className="
                          text-xs
                          uppercase
                          tracking-[0.14em]
                          text-[#7d707a]
                        "
                      >
                        {project.eyebrow}
                      </p>
                    </div>

                    <h3
                      className="
                        text-3xl
                        font-semibold
                        tracking-[-0.045em]
                        text-[#29232d]
                        transition-colors
                        duration-300
                        group-hover:text-[#806fbd]
                        md:text-4xl
                      "
                    >
                      {project.title}
                    </h3>

                    <p
                      className="
                        mt-5
                        max-w-xl
                        leading-7
                        text-[#7d707a]
                      "
                    >
                      {project.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="
                            rounded-full
                            border
                            border-white
                            bg-white/60
                            px-3
                            py-1.5
                            text-xs
                            text-[#7d707a]
                          "
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* BOTTOM */}
                  <div
                    className="
                      mt-10
                      flex
                      items-end
                      justify-between
                      gap-6
                      border-t
                      border-[#ebe5ec]
                      pt-6
                    "
                  >
                    <div>
                      <p
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.14em]
                          text-[#aaa0a8]
                        "
                      >
                        A little context
                      </p>

                      <p
                        className="
                          mt-1
                          text-sm
                          text-[#7d707a]
                        "
                      >
                        {project.note}
                      </p>
                    </div>

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#d8cff4]
                        bg-white/70
                        text-[#806fbd]
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:border-[#efa6c1]/60
                        group-hover:text-[#d96c9b]
                      "
                    >
                      <ArrowUpRight size={17} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* BOTTOM NOTE */}
        <section
          className="
            border-t
            border-[#e9e3ea]
            pt-10
          "
        >
          <div
            className="
              flex
              flex-col
              gap-4
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <p
              className="
                max-w-xl
                text-sm
                leading-6
                text-[#8b7f89]
              "
            >
              More professional work will live here as I continue
              documenting the projects, challenges, and development
              techniques that have shaped how I build for the web.
            </p>

            <Link
              href="/#work"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-[#806fbd]
                underline
                decoration-[#cfc3ef]
                decoration-2
                underline-offset-4
                transition-colors
                duration-300
                hover:text-[#d96c9b]
                hover:decoration-[#efa6c1]
              "
            >
              Explore the other work

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}