import Link from "next/link";
import {
  ArrowLeft,
  Sparkles,
} from "lucide-react";

import Container from "@/src/components/layout/Container";
import Button from "@/src/components/ui/Button";

export default function AboutPage() {
  const timeline = [
    {
      year: "Started",
      title: "Intern at Dorxata",
      description:
        "I started by helping debug websites, fix issues, and understand how real client work actually moves.",
    },
    {
      year: "Then",
      title: "More responsibility",
      description:
        "As I got more comfortable, I started taking on more fixes, revisions, and feedback instead of only assisting.",
    },
    {
      year: "Now",
      title: "Night-shift reliability",
      description:
        "I became someone the team could rely on during the night shift — right when a lot of feedback and bugs tend to come in.",
    },
  ];

  const tools = [
    "Webflow",
    "ChatGPT",
    "Claude",
    "Gemini",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ];

  return (
    <main className="pb-20 pt-28">
      <Container>
        {/* BACK */}
        <Link
          href="/"
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

          Back home
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
          {/* subtle ambient light */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-20
              -top-24
              h-80
              w-80
              rounded-full
              bg-[#b9a7ee]/12
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
              bg-[#efa6c1]/10
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
              <p
                className="
                  mb-5
                  text-sm
                  uppercase
                  tracking-[0.14em]
                  text-[#7d707a]
                "
              >
                The slightly longer version
              </p>

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
                I started with bugs.
                <br />
                Stayed for the building.
              </h1>

              <p
                className="
                  mt-7
                  max-w-2xl
                  text-base
                  leading-7
                  text-[#7d707a]
                  md:text-lg
                "
              >
                I&apos;m a Webflow developer with about a year of
                experience at Dorxata, where I also started as an intern.
                What began as debugging and fixing issues slowly turned
                into being trusted with more responsibility — especially
                during the night shift, when feedback and bugs usually
                start showing up.
              </p>

              <p
                className="
                  mt-5
                  max-w-2xl
                  text-base
                  leading-7
                  text-[#7d707a]
                  md:text-lg
                "
              >
                Somewhere along the way, I realized that the part I enjoy
                most is figuring out what someone actually wants to
                happen — even when they don&apos;t have the exact words
                for it yet.
              </p>
            </div>

            {/* RIGHT NOTE */}
            <div
              className="
                flex
                items-center
                justify-center
              "
            >
              <div
                className="
                  relative
                  max-w-sm
                  rotate-[-2deg]
                  rounded-[28px]
                  border
                  border-white/85
                  bg-white/72
                  p-7
                  shadow-[0_20px_50px_rgba(79,61,73,0.07)]
                  backdrop-blur-xl
                "
              >
                <Sparkles
                  size={17}
                  className="mb-4 text-[#b9a7ee]"
                />

                <p
                  className="
                    text-2xl
                    font-medium
                    leading-snug
                    tracking-[-0.035em]
                    text-[#29232d]
                  "
                >
                  “Give me the idea. I&apos;ll figure out the how.”
                </p>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-6
                    text-[#7d707a]
                  "
                >
                  Probably the easiest way to describe how I work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="py-20 md:py-24">
          <div
            className="
              grid
              gap-12
              lg:grid-cols-[0.72fr_1.28fr]
              lg:gap-20
            "
          >
            {/* LEFT */}
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
                Experience
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
                From intern to “I&apos;ve got it.”
              </h2>

              <p
                className="
                  mt-5
                  max-w-md
                  leading-7
                  text-[#7d707a]
                "
              >
                My experience at Dorxata taught me how to work inside
                real feedback loops — not just build something once and
                call it finished.
              </p>
            </div>

            {/* TIMELINE */}
            <div
              className="
                border-t
                border-[#e3dde5]
              "
            >
              {timeline.map((item) => (
                <div
                  key={item.title}
                  className="
                    grid
                    gap-3
                    border-b
                    border-[#e3dde5]
                    py-6
                    md:grid-cols-[110px_1fr]
                    md:gap-8
                  "
                >
                  <span
                    className="
                      text-xs
                      uppercase
                      tracking-[0.13em]
                      text-[#9b8f99]
                    "
                  >
                    {item.year}
                  </span>

                  <div>
                    <h3
                      className="
                        text-xl
                        font-semibold
                        tracking-[-0.03em]
                        text-[#29232d]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        max-w-2xl
                        text-sm
                        leading-6
                        text-[#7d707a]
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW I THINK */}
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
              gap-10
              lg:grid-cols-2
              lg:gap-16
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
                How I think
              </p>

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
                I&apos;m good at translating “something like this”
                into something real.
              </h2>
            </div>

            <div
              className="
                space-y-5
                leading-7
                text-[#7d707a]
              "
            >
              <p>
                You don&apos;t need to hand me a perfectly documented
                brief. A rough idea, a few references, or even just
                “this feels close, but not quite” gives me something to
                work with.
              </p>

              <p>
                I like trying a few directions, noticing what works,
                adjusting what doesn&apos;t, and getting closer to the
                version you were actually imagining.
              </p>

              <p
                className="
                  font-medium
                  text-[#29232d]
                "
              >
                Basically: give me the idea, I&apos;ll give you a few,
                and we&apos;ll work toward the “yep, that&apos;s it.”
              </p>
            </div>
          </div>
        </section>

        {/* AI + THIS WEBSITE */}
        <section className="py-20 md:py-24">
          <div
            className="
              grid
              gap-12
              lg:grid-cols-[1fr_1fr]
              lg:gap-16
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
                The AI part
              </p>

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
                Webflow is home base.
                <br />
                AI made the playground bigger.
              </h2>

              <div
                className="
                  mt-6
                  max-w-xl
                  space-y-5
                  leading-7
                  text-[#7d707a]
                "
              >
                <p>
                  I use ChatGPT the most, with Claude and Gemini also in
                  the mix. I use them to think through problems, debug,
                  prototype ideas, and learn concepts faster.
                </p>

                <p>
                  I don&apos;t really see AI as the thing doing the work
                  for me. I see it more as a way to shorten the distance
                  between “I wonder if I can build this” and actually
                  trying it.
                </p>
              </div>
            </div>

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
                Exhibit A: this website
              </p>

              <p
                className="
                  max-w-xl
                  text-2xl
                  font-medium
                  leading-snug
                  tracking-[-0.035em]
                  text-[#29232d]
                "
              >
                I built this portfolio with Next.js instead of Webflow
                because I wanted to get my hands a little dirtier.
              </p>

              <div
                className="
                  mt-6
                  max-w-xl
                  space-y-5
                  leading-7
                  text-[#7d707a]
                "
              >
                <p>
                  It uses React components, TypeScript, Tailwind CSS,
                  reusable UI pieces, client-side interactions, and a
                  Next.js API route for the contact form.
                </p>

                <p>
                  More importantly, it gave me a place to experiment
                  with code while still working the way I naturally do:
                  build something, look at it, tweak it, repeat.
                </p>
              </div>
            </div>
          </div>

          {/* TOOL STRIP */}
          <div
            className="
              mt-12
              flex
              flex-wrap
              gap-2
            "
          >
            {tools.map((tool) => (
              <span
                key={tool}
                className="
                  rounded-full
                  border
                  border-[#e5dfe6]
                  bg-white/50
                  px-3
                  py-2
                  text-xs
                  text-[#7d707a]
                "
              >
                {tool}
              </span>
            ))}
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
                So, that&apos;s the lore.
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
                If you&apos;ve got the idea,
                I&apos;m happy to help figure out the rest.
              </h2>
            </div>

            <Button
              href="/#contact"
              variant="secondary"
              showArrow={false}
              className="w-fit shrink-0 px-6 py-3"
            >
              Tell me about it
            </Button>
          </div>
        </section>
      </Container>
    </main>
  );
}