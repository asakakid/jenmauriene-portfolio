import Link from "next/link";
import {
  ArrowLeft,
  EyeOff,
  Play,
  Sparkles,
  Volume2,
} from "lucide-react";

import Container from "@/src/components/layout/Container";
import Button from "@/src/components/ui/Button";

export default function RelayPage() {
  const highlights = [
    "Rive animations inside Webflow",
    "Lenis smooth scrolling",
    "Finsweet CMS utilities",
    "Custom video tab controls",
    "Swiper.js draggable interactions",
    "Animated number scaling",
    "Scroll-based text reveals",
    "Custom CSS inverted corners",
  ];

  return (
    <main className="pb-20 pt-28">
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

          Back to company projects
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
                  flex-wrap
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
                Project Relay
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
                A sports-tech website where I got to go much deeper
                into Webflow interactions, custom code, animation tools,
                and third-party libraries.
              </p>

              <p
                className="
                  mt-4
                  max-w-2xl
                  leading-7
                  text-[#7d707a]
                "
              >
                The site itself supports a sports broadcasting platform,
                so the build had a lot more motion, media, and interactive
                behavior than a typical static marketing site.
              </p>

              {/* CONFIDENTIALITY NOTE */}
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
                  Alias again. Same deal: real work, fake name, very real
                  amount of time spent making interactions behave. :)
                </p>
              </div>
            </div>

            {/* RIGHT NOTES */}
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
                  rotate-[1deg]
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

        {/* WHY THIS ONE MATTERED */}
        <section className="py-20 md:py-24">
          <div
            className="
              grid
              gap-10
              lg:grid-cols-[0.72fr_1.28fr]
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
                Why this one mattered
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
                Webflow started feeling like a playground.
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
                This was one of the projects where I stopped thinking of
                Webflow as only a visual development tool and started
                getting much more comfortable extending it.
              </p>

              <p>
                I worked with Rive animations, Lenis smooth scrolling,
                Finsweet CMS utilities, Swiper.js, custom JavaScript,
                custom CSS, and several scroll-based interactions.
              </p>

              <p
                className="
                  font-medium
                  text-[#29232d]
                "
              >
                Basically, this was where “can Webflow do that?” started
                turning into “okay, let me try.”
              </p>
            </div>
          </div>
        </section>

        {/* RIVE + LENIS */}
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
                Rive + motion
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
                The animation part finally started clicking.
              </h2>

              <p
                className="
                  mt-6
                  max-w-xl
                  leading-7
                  text-[#7d707a]
                "
              >
                The project included Rive animations, and working with
                them here helped me get much more comfortable bringing
                interactive animation assets into Webflow and making them
                feel like part of the page instead of something pasted on
                top.
              </p>
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
                Smooth scroll
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
                This was also when Lenis started becoming part of my
                toolkit.
              </p>

              <p
                className="
                  mt-5
                  max-w-xl
                  leading-7
                  text-[#7d707a]
                "
              >
                I started using Lenis for smoother scrolling and then
                carried that experience into later projects whenever the
                site benefited from a softer, more polished scroll feel.
              </p>
            </div>
          </div>
        </section>

        {/* VIDEO TABS */}
        <section className="py-20 md:py-24">
          <div
            className="
              grid
              gap-12
              lg:grid-cols-[0.85fr_1.15fr]
              lg:gap-20
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
                <Play
                  size={15}
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
                  Custom video tabs
                </p>
              </div>

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
                Native Webflow tabs.
                Custom behavior.
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
                One section used Webflow&apos;s native Tabs component,
                but every tab contained its own video.
              </p>

              <p>
                I added custom JavaScript so users could manually play
                each video and toggle the audio without the videos
                fighting the tab behavior.
              </p>

              <p
                className="
                  font-medium
                  text-[#29232d]
                "
              >
                It was one of those small features that made me realize I
                was getting much more comfortable writing code around
                Webflow instead of only staying inside its native tools.
              </p>
            </div>
          </div>

          {/* SIMPLE VISUAL */}
          <div
            className="
              mt-12
              grid
              gap-4
              md:grid-cols-3
            "
          >
            {["01", "02", "03"].map((tab, index) => (
              <div
                key={tab}
                className="
                  group
                  rounded-[24px]
                  border
                  border-white/80
                  bg-white/48
                  p-5
                  shadow-[0_12px_32px_rgba(79,61,73,0.05)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/66
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  <span
                    className="
                      text-xs
                      text-[#9b8f99]
                    "
                  >
                    Tab {tab}
                  </span>

                  <span
                    className="
                      flex
                      items-center
                      gap-2
                      text-[#806fbd]
                    "
                  >
                    <Play size={14} />
                    <Volume2 size={14} />
                  </span>
                </div>

                <div
                  className="
                    mt-5
                    aspect-video
                    rounded-[18px]
                    bg-[linear-gradient(145deg,#f7f2fb,#fdf8fa)]
                  "
                />

                <p
                  className="
                    mt-4
                    text-sm
                    text-[#7d707a]
                  "
                >
                  {index === 0
                    ? "Video plays when the user wants it to."
                    : index === 1
                    ? "Audio stays under the user’s control."
                    : "Tabs switch without the videos getting confused."}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* OTHER INTERACTIONS */}
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
                Elsewhere in the build
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
                Lots of small things doing their job.
              </h2>
            </div>

            <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
              {[
                {
                  title: "Finsweet + CMS",
                  description:
                    "Used Finsweet utilities to extend CMS-driven sections and make the content behavior more flexible.",
                },
                {
                  title: "Number scaling",
                  description:
                    "Built an animated number interaction that moves through values from 1 up past 100.",
                },
                {
                  title: "Swiper.js",
                  description:
                    "Added draggable, swipeable content using Swiper.js where native Webflow interactions were not enough.",
                },
                {
                  title: "Scroll text reveals",
                  description:
                    "Used scroll-triggered text reveals to add movement without turning every section into an animation showcase.",
                },
                {
                  title: "Inverted corners",
                  description:
                    "Used custom CSS to create those inverted / cut-out corner shapes that are simple to look at and weirdly annoying to build.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="
                    border-t
                    border-[#ddd6df]
                    pt-5
                  "
                >
                  <h3
                    className="
                      text-lg
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
                      text-sm
                      leading-6
                      text-[#7d707a]
                    "
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LEARNING */}
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
                What I took from it
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
                Webflow is nicer when you stop being afraid to leave
                Webflow.
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
                This project made me much more comfortable combining
                Webflow with animation tools, JavaScript libraries,
                CMS utilities, and custom CSS whenever the native toolset
                needed a little help.
              </p>

              <p>
                It also changed how I approached later projects. Instead
                of immediately asking whether Webflow had a native
                feature for something, I started thinking more about
                what behavior I actually needed and what tool made the
                most sense for it.
              </p>

              <p
                className="
                  font-medium
                  text-[#29232d]
                "
              >
                Turns out the answer is occasionally “some JavaScript
                and a mildly unreasonable amount of testing.”
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
                Rive, Lenis, Swiper, custom code...
                <br />
                Webflow survived.
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