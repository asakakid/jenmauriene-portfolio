import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  EyeOff,
  Sparkles,
} from "lucide-react";

import Container from "@/src/components/layout/Container";

const companyProjects = [
  {
    id: 1,
    title: "Project Northstar",
    eyebrow: "Webflow Development",
    description:
      "My first full project assignment — a multi-page Webflow build from supplied designs, built with a clean Client-First structure and a tiny search interaction I’m still a little too proud of.",
    image: "/images/projects/project-01.jpg",
    technologies: [
      "Webflow",
      "Client-First",
      "Components",
    ],
    href: "/projects/company/northstar",
    note: "First full assignment",
  },

    {
    id: 2,
    title: "Project Relay",
    eyebrow: "Webflow Development · Interactions",
    description:
      "A sports-tech website where Webflow started feeling less like a visual builder and more like a front-end playground — Rive, Lenis, CMS utilities, custom video controls, Swiper.js, and a lot of interaction work.",
    image: "/images/projects/project-02.jpg",
    technologies: [
      "Webflow",
      "Rive",
      "Lenis",
      "Finsweet",
      "Swiper.js",
      "Custom Code",
    ],
    href: "/projects/company/relay",
    note: "Where custom code started getting fun",
  },


  {
    id: 3,
    title: "Project Pulse",
    eyebrow: "Webflow Development · Custom Integration",
    description:
      "A healthcare-AI website with more advanced Rive interactions, CMS-driven layouts, marquee motion, and a custom Shopify integration for the client's merch experience.",
    image: "/images/projects/project-03.jpg",
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
                Company Projects
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
                The work is real.
                <br />
                The names are undercover.
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
                A collection of websites I&apos;ve worked on through
                Dorxata — from full builds to fixes, revisions, and the
                little details that made me stop and go, “okay, I like
                that.”
              </p>
            </div>

            {/* CONFIDENTIALITY NOTE */}
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
                <EyeOff
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
                  A small note before snooping
                </p>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-[#6f636d]
                  "
                >
                  Client names are intentionally left out, so the
                  projects here use aliases instead. I&apos;ll still tell
                  you what I worked on, what I built, and what I learned.
                </p>

                <p
                  className="
                    mt-4
                    text-xs
                    italic
                    text-[#9b8f99]
                  "
                >
                  Mystery, but make it contractual. ✦
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
                Things I&apos;ve shipped at work.
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
              Each one has its own little story — what I was given,
              what I handled, and the part that stuck with me.
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
                    alt={project.title}
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
              More company work will live here as I document it without
              accidentally giving the confidentiality department a
              reason to know my name.
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