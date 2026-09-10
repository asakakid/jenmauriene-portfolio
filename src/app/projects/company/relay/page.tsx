import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Braces,
  ExternalLink,
  Gauge,
  Layers3,
  MonitorPlay,
  MousePointer2,
  Play,
  Sparkles,
  Volume2,
  Waves,
} from "lucide-react";

import Container from "@/src/components/layout/Container";

const liveUrl =
  "https://spalk-a40d25-a9683ab85bbea240fee5db36d5.webflow.io/";

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
    value: "Webflow · Interactions · Custom Code",
  },
];

const technologies = [
  "Webflow",
  "Rive",
  "Lenis",
  "Finsweet",
  "Webflow CMS",
  "Swiper.js",
  "JavaScript",
  "Custom CSS",
];

const highlights = [
  {
    icon: Waves,
    title: "Rive inside Webflow",
    description:
      "I implemented interactive Rive assets throughout the build and became much more comfortable integrating animation as part of the interface rather than treating it as a separate visual layer.",
  },
  {
    icon: MousePointer2,
    title: "Lenis smooth scrolling",
    description:
      "I introduced Lenis smooth scrolling to give the site a more controlled sense of movement and carried that experience into later Webflow projects.",
  },
  {
    icon: Layers3,
    title: "CMS + Finsweet",
    description:
      "I worked with Webflow CMS and Finsweet utilities to support reusable content and extend sections that needed more flexibility than a basic Collection List.",
  },
  {
    icon: MonitorPlay,
    title: "Custom video tabs",
    description:
      "I extended native Webflow tabs with custom JavaScript so each tab could contain its own video with user-controlled playback and audio behavior.",
  },
];

const supportingWork = [
  {
    icon: Gauge,
    title: "Animated number scaling",
    description:
      "I implemented an animated numerical interaction for site statistics, adding movement to figures that would otherwise remain static.",
  },
  {
    icon: Braces,
    title: "Custom CSS details",
    description:
      "Some of the supplied visual treatments required custom CSS beyond standard Webflow controls, including the inverted and cut-out corner treatments used in the layouts.",
  },
  {
    icon: Play,
    title: "Swiper.js interactions",
    description:
      "I incorporated Swiper.js where the design called for draggable or swipeable behavior that went beyond what I wanted to handle with native Webflow interactions alone.",
  },
  {
    icon: Sparkles,
    title: "Scroll-based motion",
    description:
      "I implemented smaller scroll-triggered reveals and transitions throughout the site, keeping motion present without making every section compete for attention.",
  },
];

export default function SpalkPage() {
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
                Webflow · Interactions · Custom Code
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
                  Spalk
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
                  A sports-tech website where I pushed further beyond
                  standard Webflow development — working with Rive,
                  Lenis, CMS utilities, Swiper.js, custom JavaScript,
                  custom CSS, and interaction-heavy front-end behavior.
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

        {/* PROJECT */}
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
              Sports broadcasting,
              <br />
              built with a lot of moving parts.
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
                Spalk provides cloud-based commentary infrastructure for
                sports broadcasters, including remote commentary,
                multilingual talent, production services, and other
                broadcast workflows.
              </p>

              <p>
                My role was focused on translating supplied designs into
                the Webflow implementation and handling the interactive
                pieces around it — including animation, CMS behavior,
                media interactions, third-party libraries, and custom
                front-end code.
              </p>

              <p>
                This became one of the projects where I started treating
                Webflow less as an isolated visual builder and more as
                the foundation of a broader front-end workflow.
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
                Where my Webflow toolkit started getting much bigger.
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

        {/* VIDEO TABS */}
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
              <MonitorPlay size={18} />
            </div>

            <p
              className="
                text-sm
                uppercase
                tracking-[0.14em]
                text-[#7d707a]
              "
            >
              Custom video behavior
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
              Native Webflow tabs underneath. Custom video controls on
              top.
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
                One of the sections used Webflow&apos;s native Tabs
                component, with a separate video living inside each tab.
              </p>

              <p>
                I added custom JavaScript around the component so users
                could manually control playback and mute state without
                the videos conflicting with the tab-switching behavior.
              </p>

              <p>
                It was a relatively contained feature, but it became one
                of the moments where I felt much more comfortable
                extending native Webflow components instead of working
                only within their default behavior.
              </p>
            </div>
          </div>
        </section>

        {/* VIDEO VISUAL */}
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

          <div className="grid gap-4 md:grid-cols-3">
            {["01", "02", "03"].map((tab, index) => (
              <div
                key={tab}
                className="
                  rounded-[24px]
                  border
                  border-white/85
                  bg-white/70
                  p-5
                "
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs text-[#9b8f99]">
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
                    leading-6
                    text-[#7d707a]
                  "
                >
                  {index === 0
                    ? "Each tab manages its own video."
                    : index === 1
                      ? "Playback stays under the user's control."
                      : "Audio can be toggled independently."}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* RIVE + LENIS */}
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
              <Waves size={18} />
            </div>

            <p
              className="
                text-sm
                uppercase
                tracking-[0.14em]
                text-[#7d707a]
              "
            >
              Rive + motion
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
              The point where animation started feeling like part of the
              interface.
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
                Spalk gave me more hands-on experience integrating Rive
                assets into a real Webflow build and making them feel
                connected to the surrounding layout instead of simply
                embedded into it.
              </p>

              <p>
                It was also where I started using Lenis for smooth
                scrolling. That combination made me pay more attention to
                how individual interactions contributed to the overall
                movement of a page.
              </p>

              <p>
                I carried both of those lessons into later builds, where
                animation and scrolling became things I considered much
                earlier in the development process.
              </p>
            </div>
          </div>
        </section>

        {/* SUPPORTING DETAILS */}
        <section
          className="
            border-y
            border-[#e9e3ea]
            py-20
            md:py-28
          "
        >
          <div
            className="
              mb-10
              grid
              gap-6
              lg:grid-cols-[0.8fr_1.2fr]
            "
          >
            <p
              className="
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
                max-w-3xl
                text-4xl
                font-semibold
                leading-[1]
                tracking-[-0.05em]
                text-[#29232d]
                md:text-5xl
              "
            >
              Lots of smaller pieces doing their job.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {supportingWork.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    rounded-[28px]
                    border
                    border-white/80
                    bg-white/50
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
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      leading-7
                      text-[#7d707a]
                    "
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
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
                Webflow got more useful once I stopped treating it as the
                entire toolbox.
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
                Spalk made me much more comfortable combining Webflow
                with Rive, third-party libraries, CMS utilities, custom
                JavaScript, and CSS whenever the interaction called for
                something beyond the native toolset.
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
                Instead of asking only whether Webflow could do
                something natively, I started thinking more about the
                behavior the design actually needed and choosing the
                right implementation for it.
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
              Visit the public Spalk website to explore the finished
              Webflow implementation and interactions.
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
            Visit Spalk

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