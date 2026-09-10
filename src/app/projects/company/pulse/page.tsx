import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Boxes,
  ExternalLink,
  Layers3,
  MoveHorizontal,
  ShoppingBag,
  Sparkles,
  Waves,
} from "lucide-react";

import Container from "@/src/components/layout/Container";

const liveUrl = "https://jorie.ai/";

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
    value: "Webflow · Rive · CMS · Shopify",
  },
];

const technologies = [
  "Webflow",
  "Rive",
  "Webflow CMS",
  "Shopify",
  "JavaScript",
  "Custom Code",
  "Responsive Development",
];

const highlights = [
  {
    icon: Waves,
    title: "More advanced Rive interactions",
    description:
      "I implemented more involved Rive interactions throughout the Webflow build, becoming more comfortable using animation as an interactive part of the interface rather than a decorative layer.",
  },
  {
    icon: MoveHorizontal,
    title: "Partner logo marquee",
    description:
      "I implemented a continuously moving partner-logo marquee that added motion to the page while keeping the interaction secondary to the surrounding content.",
  },
  {
    icon: Layers3,
    title: "CMS-driven content",
    description:
      "I used Webflow CMS for reusable and maintainable content sections, allowing dynamic entries to live within the same visual system as the rest of the website.",
  },
  {
    icon: Boxes,
    title: "Stacked highlighted-work layout",
    description:
      "I built a more editorial presentation for highlighted CMS content, using an intentionally layered and stacked visual treatment instead of a conventional repeating grid.",
  },
];

const supportingWork = [
  {
    title: "Responsive implementation",
    description:
      "I worked through the supplied layouts across breakpoints to make sure the interactive and content-heavy sections translated cleanly beyond desktop.",
  },
  {
    title: "Custom Webflow behavior",
    description:
      "Where native Webflow functionality wasn't enough, I used custom code to support the required interactions and integrations while keeping the rest of the build manageable inside Webflow.",
  },
  {
    title: "Motion throughout the site",
    description:
      "Beyond the larger Rive pieces, I worked on smaller transitions and movement across the experience so the interface felt cohesive rather than like a collection of isolated effects.",
  },
  {
    title: "Integration work",
    description:
      "The project pushed me beyond a Webflow-only workflow and into connecting the site with an external commerce platform while preserving a consistent front-end experience.",
  },
];

export default function JoriePage() {
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
                Webflow · Rive · CMS · Shopify
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
                  Jorie AI
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
                  A healthcare-AI website where I worked across Webflow
                  development, interactive Rive assets, CMS-driven
                  layouts, motion, and a custom Shopify integration for
                  the brand&apos;s merch experience.
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
              Healthcare AI,
              <br />
              with a lot happening underneath.
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
                Jorie AI is a healthcare technology platform focused on
                using AI and automation across revenue-cycle operations,
                including workflows such as eligibility, prior
                authorization, claims, and payment processes.
              </p>

              <p>
                My role was focused on the Webflow implementation and the
                interactive pieces around it. I worked with supplied
                designs and assets, implementing the front-end experience
                across Webflow, Rive, CMS-driven content, motion, and
                custom integrations.
              </p>

              <p>
                The project was a good example of Webflow acting as the
                foundation of a larger front-end system rather than the
                only tool involved in the build.
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
                More motion, more dynamic content, and more systems
                working together.
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

        {/* SHOPIFY */}
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
              <ShoppingBag size={18} />
            </div>

            <p
              className="
                text-sm
                uppercase
                tracking-[0.14em]
                text-[#7d707a]
              "
            >
              The highlight
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
              And then Webflow met Shopify.
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
                One of the more interesting parts of my work on Jorie was
                the merch experience. The site was built in Webflow, while
                the client already had its commerce infrastructure in
                Shopify.
              </p>

              <p>
                I used custom code to connect those pieces so the merch
                experience could live inside the broader Webflow site
                while still relying on Shopify for the commerce side.
              </p>

              <p>
                That pushed me outside a Webflow-only workflow and into
                thinking more carefully about how separate systems can be
                presented as one cohesive front-end experience.
              </p>
            </div>
          </div>
        </section>

        {/* WEBFLOW / SHOPIFY VISUAL */}
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
            Integration breakdown
          </p>

          <div
            className="
              grid
              gap-5
              md:grid-cols-[1fr_auto_1fr]
              md:items-center
            "
          >
            <div
              className="
                rounded-[24px]
                border
                border-white/85
                bg-white/70
                p-6
              "
            >
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.14em]
                  text-[#9b8f99]
                "
              >
                Webflow
              </p>

              <p
                className="
                  mt-2
                  text-lg
                  font-semibold
                  tracking-[-0.03em]
                  text-[#29232d]
                "
              >
                The website experience
              </p>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-[#7d707a]
                "
              >
                Layout, styling, responsive behavior, interactions, and
                the surrounding merch presentation.
              </p>
            </div>

            <div
              className="
                hidden
                items-center
                gap-2
                text-xs
                text-[#9b8fce]
                md:flex
              "
            >
              <span>custom code</span>
              <span>→</span>
            </div>

            <div
              className="
                rounded-[24px]
                border
                border-white/85
                bg-white/70
                p-6
              "
            >
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.14em]
                  text-[#9b8f99]
                "
              >
                Shopify
              </p>

              <p
                className="
                  mt-2
                  text-lg
                  font-semibold
                  tracking-[-0.03em]
                  text-[#29232d]
                "
              >
                The commerce layer
              </p>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-[#7d707a]
                "
              >
                The existing product and commerce infrastructure behind
                the merch experience.
              </p>
            </div>
          </div>
        </section>

        {/* RIVE */}
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
              Rive, round two
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
              This time, the interactions got more involved.
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
                I&apos;d already worked with Rive on previous Webflow
                builds, but Jorie gave me more experience working with
                richer interactions and integrating them into the page
                experience.
              </p>

              <p>
                By this point, I was thinking less about simply embedding
                an animation and more about how it should behave within
                the surrounding interface.
              </p>
            </div>
          </div>
        </section>

        {/* CMS */}
        <section
          className="
            grid
            gap-10
            border-y
            border-[#e9e3ea]
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
              <Layers3 size={18} />
            </div>

            <p
              className="
                text-sm
                uppercase
                tracking-[0.14em]
                text-[#7d707a]
              "
            >
              CMS + layout
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
              Dynamic content without making it look repetitive.
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
                I used Webflow CMS for sections that needed to remain
                manageable and reusable, including highlighted content
                that could be updated without rebuilding the surrounding
                page.
              </p>

              <p>
                For the highlighted-work presentation, I implemented a
                more stacked and editorial visual treatment rather than
                letting the CMS output read as a conventional repeating
                grid.
              </p>

              <p>
                That gave me more experience separating the underlying
                content structure from the way that content is presented
                visually.
              </p>
            </div>
          </div>
        </section>

        {/* SUPPORTING WORK */}
        <section className="py-20 md:py-28">
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
              A lot of smaller pieces still had to work together.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {supportingWork.map((item) => (
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
            ))}
          </div>
        </section>

        {/* TECH */}
        <section
          className="
            border-t
            border-[#e9e3ea]
            py-16
            md:py-20
          "
        >
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
                Sometimes Webflow is only one piece of the system.
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
                Jorie pushed me further into combining Webflow with other
                tools rather than treating it as a closed environment.
                Between Rive, CMS-driven layouts, motion, custom code, and
                the Shopify integration, several different pieces still
                had to feel like one cohesive website to the person using
                it.
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
              Visit the public Jorie AI website to explore the finished
              Webflow experience.
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
            Visit Jorie AI

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