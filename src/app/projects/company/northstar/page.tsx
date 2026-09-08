import Link from "next/link";
import {
  ArrowLeft,
  EyeOff,
  Search,
  Sparkles,
} from "lucide-react";

import Container from "@/src/components/layout/Container";
import Button from "@/src/components/ui/Button";

export default function NorthstarPage() {
  const highlights = [
    "Built from scratch in Webflow",
    "Client-First structure",
    "Reusable Webflow components",
    "Around 5 pages",
    "Responsive implementation",
    "Custom nav search interaction",
  ];

  return (
    <main className="pb-20 pt-28">
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

          Back to projects
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
          {/* ambient light */}
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
              bg-[#b9a7ee]/10
              blur-[90px]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-24
              left-0
              h-72
              w-72
              rounded-full
              bg-[#efa6c1]/8
              blur-[90px]
            "
          />

          <div
            className="
              relative
              z-10
              grid
              gap-12
              lg:grid-cols-[1.05fr_0.95fr]
              lg:gap-16
            "
          >
            {/* LEFT */}
            <div>
              <div
                className="
                  mb-5
                  flex
                  items-center
                  gap-2
                  text-sm
                  uppercase
                  tracking-[0.14em]
                  text-[#7d707a]
                "
              >
                <span>Company Project</span>

                <span
                  aria-hidden="true"
                  className="
                    h-1
                    w-1
                    rounded-full
                    bg-[#cfc6ce]
                  "
                />

                <span>Webflow Development</span>
              </div>

              <h1
                className="
                  max-w-3xl
                  text-5xl
                  font-semibold
                  leading-[0.94]
                  tracking-[-0.06em]
                  text-[#29232d]
                  md:text-7xl
                "
              >
                Project Northstar
              </h1>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-lg
                  leading-8
                  text-[#7d707a]
                "
              >
                My first full project assignment at Dorxata — a
                multi-page Webflow build that taught me a lot about
                structure, implementation, and why small interactions
                are sometimes the most satisfying part.
              </p>

              {/* NDA NOTE */}
              <div
                className="
                  mt-7
                  flex
                  max-w-xl
                  items-start
                  gap-3
                  border-l
                  border-[#d8cff4]
                  pl-4
                "
              >
                <EyeOff
                  size={15}
                  className="
                    mt-1
                    shrink-0
                    text-[#8f7ccf]
                  "
                />

                <p
                  className="
                    text-sm
                    leading-6
                    text-[#8b7f89]
                  "
                >
                  The project is real. The name is not. Confidentiality
                  says the client gets to stay mysterious. :)
                </p>
              </div>
            </div>

            {/* RIGHT — QUICK NOTES */}
            <div
              className="
                flex
                items-center
                justify-center
              "
            >
              <div
                className="
                  w-full
                  max-w-sm
                  rotate-[-1deg]
                  rounded-[28px]
                  border
                  border-white/85
                  bg-white/70
                  p-7
                  shadow-[0_20px_50px_rgba(79,61,73,0.07)]
                  backdrop-blur-xl
                "
              >
                <Sparkles
                  size={16}
                  className="mb-4 text-[#b9a7ee]"
                />

                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.14em]
                    text-[#9b8f99]
                  "
                >
                  Build notes
                </p>

                <div className="mt-5 space-y-3">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-start
                        gap-3
                      "
                    >
                      <span
                        className="
                          mt-2
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-[#efa6c1]
                        "
                      />

                      <p
                        className="
                          text-sm
                          leading-6
                          text-[#5f5560]
                        "
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE ASSIGNMENT */}
        <section className="py-20 md:py-24">
          <div
            className="
              grid
              gap-10
              lg:grid-cols-[0.7fr_1.3fr]
              lg:gap-20
            "
          >
            <div>
              <p
                className="
                  mb-4
                  text-sm
                  uppercase
                  tracking-[0.14em]
                  text-[#7d707a]
                "
              >
                The assignment
              </p>

              <h2
                className="
                  max-w-md
                  text-4xl
                  font-semibold
                  leading-[0.98]
                  tracking-[-0.05em]
                  text-[#29232d]
                  md:text-5xl
                "
              >
                My first proper build.
                No pressure.
              </h2>
            </div>

            <div
              className="
                max-w-2xl
                space-y-5
                leading-7
                text-[#7d707a]
              "
            >
              <p>
                The design was provided by our design team, and my job
                was to turn it into a working Webflow site from scratch.
              </p>

              <p>
                The project was around five pages and built using
                Client-First, reusable Webflow components, and a clean
                structure that would be easy to maintain after handoff.
              </p>

              <p>
                It wasn&apos;t a wildly complex build — and that&apos;s
                part of why I still like it. The focus was on keeping
                everything organized, responsive, and intentional.
              </p>
            </div>
          </div>
        </section>

        {/* SEARCH INTERACTION */}
        <section
          className="
            border-y
            border-[#e9e3ea]
            py-16
            md:py-20
          "
        >
          <div
            className="
              grid
              gap-12
              lg:grid-cols-[1fr_1fr]
              lg:gap-16
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
                <Search
                  size={16}
                  className="text-[#d96c9b]"
                />

                <p
                  className="
                    text-sm
                    uppercase
                    tracking-[0.14em]
                    text-[#7d707a]
                  "
                >
                  My favorite detail
                </p>
              </div>

              <h2
                className="
                  max-w-xl
                  text-3xl
                  font-semibold
                  leading-[1]
                  tracking-[-0.045em]
                  text-[#29232d]
                  md:text-5xl
                "
              >
                The search bar had no business being this fun.
              </h2>
            </div>

            <div
              className="
                max-w-2xl
                space-y-5
                leading-7
                text-[#7d707a]
              "
            >
              <p>
                The navigation included a search function, but instead of
                treating it like a normal input that just appears, I
                wanted the interaction to feel more deliberate.
              </p>

              <p>
                When you hover over the search icon, the search field
                expands across the navigation while the other nav links
                smoothly collapse to zero width to make room for it.
              </p>

              <p
                className="
                  font-medium
                  text-[#29232d]
                "
              >
                Tiny interaction. Extremely satisfying.
              </p>
            </div>
          </div>

          {/* INTERACTION DIAGRAM */}
          <div
            className="
              mt-12
              rounded-[28px]
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
              Roughly what happens
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
                <p
                  className="
                    mb-3
                    text-xs
                    text-[#9b8f99]
                  "
                >
                  Rest
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
                  <span className="text-sm text-[#7d707a]">
                    Home
                  </span>

                  <span className="text-sm text-[#7d707a]">
                    About
                  </span>

                  <span className="text-sm text-[#7d707a]">
                    Services
                  </span>

                  <Search
                    size={15}
                    className="ml-auto text-[#806fbd]"
                  />
                </div>
              </div>

              <span
                className="
                  hidden
                  text-[#b9a7ee]
                  md:block
                "
              >
                →
              </span>

              {/* HOVER */}
              <div>
                <p
                  className="
                    mb-3
                    text-xs
                    text-[#9b8f99]
                  "
                >
                  Hover
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
          </div>
        </section>

        {/* WHAT I LEARNED */}
        <section className="py-20 md:py-24">
          <div
            className="
              grid
              gap-10
              lg:grid-cols-[0.8fr_1.2fr]
              lg:gap-20
            "
          >
            <div>
              <p
                className="
                  mb-4
                  text-sm
                  uppercase
                  tracking-[0.14em]
                  text-[#7d707a]
                "
              >
                What I learned
              </p>

              <h2
                className="
                  max-w-lg
                  text-4xl
                  font-semibold
                  leading-[0.98]
                  tracking-[-0.05em]
                  text-[#29232d]
                  md:text-5xl
                "
              >
                Simple doesn&apos;t mean thoughtless.
              </h2>
            </div>

            <div
              className="
                max-w-2xl
                space-y-5
                leading-7
                text-[#7d707a]
              "
            >
              <p>
                This project taught me a lot about building cleanly from
                an existing design system instead of trying to make the
                implementation more complicated than it needed to be.
              </p>

              <p>
                Good structure, reusable components, responsive behavior,
                and a few intentional interactions can do a lot of the
                heavy lifting.
              </p>

              <p
                className="
                  font-medium
                  text-[#29232d]
                "
              >
                It was my first full assignment, so yes, I&apos;m probably
                a little sentimental about it.
              </p>
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section
          className="
            rounded-[30px]
            border
            border-white/80
            bg-white/48
            px-7
            py-10
            shadow-[0_20px_60px_rgba(79,61,73,0.06)]
            backdrop-blur-xl
            md:px-10
            md:py-12
          "
        >
          <div
            className="
              flex
              flex-col
              gap-7
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div>
              <p
                className="
                  mb-3
                  text-xs
                  uppercase
                  tracking-[0.14em]
                  text-[#9b8f99]
                "
              >
                End note
              </p>

              <h2
                className="
                  max-w-2xl
                  text-3xl
                  font-semibold
                  leading-[1]
                  tracking-[-0.045em]
                  text-[#29232d]
                  md:text-5xl
                "
              >
                Real project.
                Fake name.
                Very real attachment to that search interaction.
              </h2>
            </div>

            <Button
              href="/#contact"
              variant="secondary"
              showArrow={false}
              className="w-fit shrink-0 px-6 py-3"
            >
              Work with me
            </Button>
          </div>
        </section>
      </Container>
    </main>
  );
}