import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Component,
  ExternalLink,
  LayoutTemplate,
  MonitorSmartphone,
  Search,
  Sparkles,
} from "lucide-react";

import Container from "@/src/components/layout/Container";

const projectDetails = [
  {
    label: "Role",
    value: "Primary Webflow Developer",
  },
  {
    label: "Project type",
    value: "Professional Client Work",
  },
  {
    label: "Completed through",
    value: "Dorxata",
  },
  {
    label: "Focus",
    value: "Webflow · Figma Implementation",
  },
];

const technologies = [
  "Webflow",
  "Client-First",
  "Components",
  "Responsive Development",
  "Webflow Interactions",
];

const highlights = [
  {
    icon: LayoutTemplate,
    title: "Built from supplied designs",
    description:
      "I translated the provided designs into a complete multi-page Webflow implementation, building the site structure from the ground up.",
  },
  {
    icon: Component,
    title: "Reusable Webflow structure",
    description:
      "I used Client-First conventions and reusable components to keep the build organized, consistent, and easier to maintain across its pages.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive implementation",
    description:
      "I worked through desktop, tablet, and mobile layouts to make sure the supplied design translated cleanly across different viewport sizes.",
  },
  {
    icon: Search,
    title: "Custom navigation interaction",
    description:
      "One of my favorite details was a navigation search interaction where the search field expands while the surrounding navigation links collapse to make room for it.",
  },
];

const liveUrl = "https://www.solerabank.com/";

export default function NorthstarPage() {
  return (
    <main className="pb-24 pt-28 md:pt-32">
      <Container>
        {/* BACK */}
        <Link
          href="/projects/company"
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

          Back to professional work
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
              left-[25%]
              h-72
              w-72
              rounded-full
              bg-[#b9a7ee]/10
              blur-[90px]
            "
          />

          <div className="relative z-10">
            {/* EYEBROW */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#e3dbf4]
                  bg-white/60
                  px-3
                  py-1.5
                "
              >
                <Sparkles size={13} className="text-[#d96c9b]" />

                <span
                  className="
                    text-xs
                    uppercase
                    tracking-[0.14em]
                    text-[#7d707a]
                  "
                >
                  Professional Work
                </span>
              </div>

              <span className="text-xs text-[#aaa0a8]">
                Webflow · Figma Implementation
              </span>
            </div>

            {/* TITLE + DETAILS */}
            <div
              className="
                grid
                gap-10
                lg:grid-cols-[1.2fr_0.8fr]
                lg:items-end
                lg:gap-16
              "
            >
              <div>
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
                  Solerabank
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
                  My first full Webflow project assignment — a
                  multi-page build from supplied designs that gave me my
                  first opportunity to take ownership of an entire
                  implementation from structure to responsive polish.
                </p>

                {/* LIVE SITE CTA */}
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    mt-8
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[#29232d]
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#806fbd]
                    hover:shadow-[0_12px_30px_rgba(79,61,73,0.15)]
                  "
                >
                  Visit live website

                  <ExternalLink
                    size={15}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </a>
              </div>

              {/* PROJECT DETAILS */}
              <div
                className="
                  rounded-[26px]
                  border
                  border-white/85
                  bg-white/62
                  p-6
                  backdrop-blur-xl
                "
              >
                <p
                  className="
                    mb-5
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.14em]
                    text-[#9b8f99]
                  "
                >
                  Project details
                </p>

                <div className="divide-y divide-[#ebe5ec]">
                  {projectDetails.map((detail) => (
                    <div
                      key={detail.label}
                      className="
                        grid
                        grid-cols-[0.8fr_1.2fr]
                        gap-4
                        py-4
                        first:pt-0
                        last:pb-0
                      "
                    >
                      <span className="text-sm text-[#aaa0a8]">
                        {detail.label}
                      </span>

                      <span
                        className="
                          text-sm
                          font-medium
                          text-[#5f5560]
                        "
                      >
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE PROJECT */}
        <section
          className="
            grid
            gap-10
            py-20
            md:py-28
            lg:grid-cols-[0.75fr_1.25fr]
            lg:gap-20
          "
        >
          <div>
            <p
              className="
                text-sm
                uppercase
                tracking-[0.14em]
                text-[#7d707a]
              "
            >
              The project
            </p>
          </div>

          <div>
            <h2
              className="
                max-w-3xl
                text-4xl
                font-semibold
                leading-[1]
                tracking-[-0.05em]
                text-[#29232d]
                md:text-5xl
              "
            >
              The first one I got to fully own.
            </h2>

            <div
              className="
                mt-8
                max-w-3xl
                space-y-5
                text-base
                leading-8
                text-[#7d707a]
              "
            >
              <p>
                This was my first full project assignment at Dorxata.
                The designs were supplied by the design team, and my
                responsibility was translating them into a complete,
                functional Webflow website.
              </p>

              <p>
                The project consisted of roughly five pages and was
                developed using Client-First conventions, reusable
                components, and a structured Webflow build intended to
                stay manageable after implementation.
              </p>

              <p>
                It wasn&apos;t the most technically complicated project
                I&apos;ve worked on since, but it became an important one
                for me because it was where I started moving from
                assisting with development work to taking responsibility
                for a complete build.
              </p>
            </div>
          </div>
        </section>

        {/* CONTRIBUTIONS */}
        <section
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-[#e8e0f4]
            bg-[#f7f3ff]/60
            p-7
            md:p-10
            lg:p-12
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-52
              w-52
              rounded-full
              bg-[#b9a7ee]/15
              blur-[70px]
            "
          />

          <div className="relative z-10">
            <div
              className="
                mb-10
                grid
                gap-6
                lg:grid-cols-[0.8fr_1.2fr]
              "
            >
              <div>
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.14em]
                    text-[#8f7ccf]
                  "
                >
                  My contribution
                </p>
              </div>

              <h2
                className="
                  max-w-3xl
                  text-3xl
                  font-semibold
                  tracking-[-0.045em]
                  text-[#29232d]
                  md:text-4xl
                "
              >
                From supplied design to structured Webflow build.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {highlights.map((highlight) => {
                const Icon = highlight.icon;

                return (
                  <div
                    key={highlight.title}
                    className="
                      rounded-[28px]
                      border
                      border-white/80
                      bg-white/55
                      p-7
                      shadow-[0_18px_50px_rgba(79,61,73,0.04)]
                      backdrop-blur-xl
                      md:p-8
                    "
                  >
                    <div
                      className="
                        mb-6
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#eadff0]
                        bg-white/70
                        text-[#d96c9b]
                      "
                    >
                      <Icon size={18} />
                    </div>

                    <h3
                      className="
                        text-xl
                        font-semibold
                        tracking-[-0.03em]
                        text-[#29232d]
                      "
                    >
                      {highlight.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        leading-7
                        text-[#7d707a]
                      "
                    >
                      {highlight.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SEARCH INTERACTION */}
        <section
          className="
            grid
            gap-10
            py-20
            md:py-28
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-20
          "
        >
          <div>
            <div
              className="
                mb-5
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#d8cff4]
                bg-white/60
                text-[#806fbd]
              "
            >
              <Search size={18} />
            </div>

            <p
              className="
                text-sm
                uppercase
                tracking-[0.14em]
                text-[#7d707a]
              "
            >
              Favorite detail
            </p>
          </div>

          <div>
            <h2
              className="
                max-w-3xl
                text-3xl
                font-semibold
                tracking-[-0.045em]
                text-[#29232d]
                md:text-4xl
              "
            >
              A tiny search interaction I was way too excited about.
            </h2>

            <div
              className="
                mt-6
                max-w-3xl
                space-y-5
                text-base
                leading-8
                text-[#7d707a]
              "
            >
              <p>
                The navigation included a search function, and I wanted
                opening it to feel integrated into the navigation rather
                than simply displaying another input on top of it.
              </p>

              <p>
                When the search interaction is triggered, the search
                field expands across the navigation while the surrounding
                navigation links collapse to make room for it.
              </p>

              <p>
                It was a small part of the overall build, but it became
                one of those details that made me appreciate how much
                thoughtful motion can change the feel of an otherwise
                straightforward interface.
              </p>
            </div>
          </div>
        </section>

        {/* INTERACTION DIAGRAM */}
        <section
          className="
            rounded-[30px]
            border
            border-white/80
            bg-white/46
            p-6
            shadow-[0_18px_50px_rgba(79,61,73,0.05)]
            backdrop-blur-xl
            md:p-8
          "
        >
          <p
            className="
              mb-6
              text-xs
              uppercase
              tracking-[0.14em]
              text-[#9b8f99]
            "
          >
            Interaction breakdown
          </p>

          <div
            className="
              grid
              gap-8
              md:grid-cols-[1fr_auto_1fr]
              md:items-center
            "
          >
            {/* REST */}
            <div>
              <p className="mb-3 text-xs text-[#9b8f99]">
                Default navigation
              </p>

              <div
                className="
                  flex
                  items-center
                  gap-4
                  rounded-full
                  border
                  border-[#e5dfe6]
                  bg-white/70
                  px-5
                  py-3
                "
              >
                <span className="text-sm text-[#7d707a]">Home</span>
                <span className="text-sm text-[#7d707a]">About</span>
                <span className="text-sm text-[#7d707a]">Services</span>

                <Search
                  size={15}
                  className="ml-auto text-[#806fbd]"
                />
              </div>
            </div>

            <span className="hidden text-[#b9a7ee] md:block">
              →
            </span>

            {/* ACTIVE */}
            <div>
              <p className="mb-3 text-xs text-[#9b8f99]">
                Search active
              </p>

              <div
                className="
                  flex
                  items-center
                  rounded-full
                  border
                  border-[#d8cff4]
                  bg-[#f8f5ff]
                  px-5
                  py-3
                "
              >
                <Search
                  size={15}
                  className="mr-3 text-[#806fbd]"
                />

                <span className="text-sm text-[#9b8f99]">
                  Search...
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* DEVELOPMENT LESSON */}
        <section
          className="
            grid
            gap-10
            border-b
            border-[#e9e3ea]
            py-20
            md:py-28
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-20
          "
        >
          <div>
            <p
              className="
                text-sm
                uppercase
                tracking-[0.14em]
                text-[#7d707a]
              "
            >
              The development lesson
            </p>
          </div>

          <div>
            <h2
              className="
                max-w-3xl
                text-3xl
                font-semibold
                tracking-[-0.045em]
                text-[#29232d]
                md:text-4xl
              "
            >
              Simple doesn&apos;t mean thoughtless.
            </h2>

            <p
              className="
                mt-6
                max-w-3xl
                text-base
                leading-8
                text-[#7d707a]
              "
            >
              This project taught me a lot about translating an existing
              design system without making the implementation more
              complicated than it needed to be. Good structure,
              consistent classes, reusable elements, and responsive
              behavior did most of the heavy lifting.
            </p>

            <p
              className="
                mt-5
                max-w-3xl
                text-base
                leading-8
                text-[#7d707a]
              "
            >
              It also taught me to pay attention to the smaller
              interaction details. Even on a relatively straightforward
              website, those moments can make the finished implementation
              feel much more intentional.
            </p>
          </div>
        </section>

        {/* TECH */}
        <section className="py-16 md:py-20">
          <div
            className="
              flex
              flex-col
              gap-6
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <div>
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.14em]
                  text-[#aaa0a8]
                "
              >
                Tools & technologies
              </p>

              <h2
                className="
                  mt-2
                  text-2xl
                  font-semibold
                  tracking-[-0.035em]
                  text-[#29232d]
                "
              >
                What I worked with
              </h2>
            </div>

            <div className="flex max-w-2xl flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-full
                    border
                    border-white
                    bg-white/60
                    px-4
                    py-2
                    text-sm
                    text-[#7d707a]
                  "
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* TAKEAWAY */}
        <section
          className="
            rounded-[32px]
            border
            border-white/80
            bg-white/50
            p-7
            shadow-[0_18px_55px_rgba(79,61,73,0.05)]
            backdrop-blur-xl
            md:p-10
            lg:p-12
          "
        >
          <div
            className="
              grid
              gap-8
              lg:grid-cols-[0.8fr_1.2fr]
              lg:gap-16
            "
          >
            <div>
              <p
                className="
                  text-sm
                  uppercase
                  tracking-[0.14em]
                  text-[#7d707a]
                "
              >
                What stuck with me
              </p>
            </div>

            <div>
              <h2
                className="
                  max-w-3xl
                  text-3xl
                  font-semibold
                  leading-[1.05]
                  tracking-[-0.045em]
                  text-[#29232d]
                  md:text-4xl
                "
              >
                The project where things started feeling real.
              </h2>

              <p
                className="
                  mt-6
                  max-w-3xl
                  text-base
                  leading-8
                  text-[#7d707a]
                "
              >
                Being responsible for the full implementation gave me a
                much better understanding of what it takes to move from
                a supplied design to a complete Webflow website. It
                wasn&apos;t just about reproducing layouts — it was about
                building them cleanly, making them responsive, and
                thinking about how the whole site worked together.
              </p>
            </div>
          </div>
        </section>

        {/* LIVE SITE */}
        <section
          className="
            mt-16
            flex
            flex-col
            gap-6
            border-t
            border-[#e9e3ea]
            pt-10
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-[0.14em]
                text-[#aaa0a8]
              "
            >
              See it in the wild
            </p>

            <p
              className="
                mt-2
                max-w-lg
                text-sm
                leading-6
                text-[#7d707a]
              "
            >
              Visit the public website to see the finished Webflow
              implementation.
            </p>
          </div>

          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              items-center
              gap-3
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
            Visit live website

            <ArrowUpRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>
        </section>
      </Container>
    </main>
  );
}