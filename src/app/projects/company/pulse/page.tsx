import Link from "next/link";
import {
  ArrowLeft,
  EyeOff,
  Layers3,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

import Container from "@/src/components/layout/Container";
import Button from "@/src/components/ui/Button";

export default function PulsePage() {
  const highlights = [
    "More advanced Rive interactions",
    "Partner logo marquee",
    "CMS-driven content",
    "Stacking highlighted-work layout",
    "Custom Shopify integration",
    "Dedicated merch experience",
  ];

  const supportingWork = [
    {
      title: "Rive, round two",
      description:
        "Worked with more involved Rive interactions and got more comfortable treating animation as part of the interface rather than a decorative extra.",
    },
    {
      title: "Partner marquee",
      description:
        "Built a continuously moving logo marquee for the partnership section while keeping the motion clean and secondary to the content.",
    },
    {
      title: "CMS-driven content",
      description:
        "Used Webflow CMS for content that needed to stay manageable and reusable instead of hard-coding every entry into the page.",
    },
    {
      title: "Stacking grid",
      description:
        "Built the highlighted-work section with a stacked visual treatment, giving CMS-driven content a more designed and interactive presentation.",
    },
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
          {/* AMBIENT LIGHT */}
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
                Project Pulse
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
                A healthcare-AI website where I worked with more
                advanced Rive interactions, CMS-driven layouts, motion,
                and a custom integration that brought the client&apos;s
                Shopify store into the Webflow experience.
              </p>

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
                  Another alias joins the collection. The company name
                  stays offstage; the things I built do not.
                </p>
              </div>
            </div>

            {/* BUILD NOTES */}
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

        {/* PROJECT CONTEXT */}
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
                The project
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
                Healthcare AI,
                with a lot happening underneath.
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
                The website is for a healthcare AI platform focused on
                automating operational workflows, so the site needed to
                communicate a fairly technical product without feeling
                overly dense.
              </p>

              <p>
                My work was on the Webflow implementation and the pieces
                around it: interactive Rive assets, CMS content,
                motion, custom layouts, and functionality that needed
                more than Webflow&apos;s native tools.
              </p>

              <p
                className="
                  font-medium
                  text-[#29232d]
                "
              >
                And then there was the merch page.
              </p>
            </div>
          </div>
        </section>

        {/* SHOPIFY HIGHLIGHT */}
        <section
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-[#eadff0]
            bg-white/52
            p-7
            shadow-[0_20px_60px_rgba(79,61,73,0.06)]
            backdrop-blur-xl
            md:p-10
            lg:p-12
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-80
              w-80
              rounded-full
              bg-[#efa6c1]/12
              blur-[100px]
            "
          />

          <div
            className="
              relative
              z-10
              grid
              gap-12
              lg:grid-cols-[0.9fr_1.1fr]
              lg:gap-20
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
                "
              >
                <ShoppingBag
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
                  The highlight
                </p>
              </div>

              <h2
                className="
                  max-w-xl
                  text-4xl
                  font-semibold
                  leading-[0.96]
                  tracking-[-0.05em]
                  text-[#29232d]
                  md:text-6xl
                "
              >
                And then Webflow met Shopify.
              </h2>

              <p
                className="
                  mt-6
                  max-w-xl
                  text-lg
                  leading-8
                  text-[#7d707a]
                "
              >
                The client had a Shopify store. The website had a merch
                page. Those two things needed to feel like they belonged
                together.
              </p>
            </div>

            {/* RIGHT */}
            <div
              className="
                flex
                flex-col
                justify-center
              "
            >
              <div
                className="
                  space-y-5
                  leading-7
                  text-[#7d707a]
                "
              >
                <p>
                  Instead of treating the merch section as a completely
                  separate experience, I used custom code to integrate
                  the client&apos;s Shopify setup with the Webflow site.
                </p>

                <p>
                  That meant working outside the normal Webflow-only
                  workflow and figuring out how the two systems could
                  work together while keeping the experience visually
                  connected to the rest of the website.
                </p>

                <p
                  className="
                    font-medium
                    text-[#29232d]
                  "
                >
                  This was less “find the right Webflow element” and
                  more “okay, these two systems need to talk now.”
                </p>
              </div>
            </div>
          </div>

          {/* WEBFLOW → SHOPIFY VISUAL */}
          <div
            className="
              relative
              z-10
              mt-12
              grid
              gap-4
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
                Layout, styling, interaction, and the surrounding merch
                experience.
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
                The commerce side
              </p>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-[#7d707a]
                "
              >
                The client&apos;s existing store and product
                infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* RIVE */}
        <section className="py-20 md:py-24">
          <div
            className="
              grid
              gap-12
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
                Rive, round two
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
                This time, the interactions got more involved.
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
                I&apos;d already worked with Rive before this project,
                but here the interactions were more complex.
              </p>

              <p>
                By this point, I was getting more comfortable working
                with Rive inside Webflow and thinking about the
                animations as functional pieces of the interface rather
                than something that simply plays on the page.
              </p>

              <p
                className="
                  font-medium
                  text-[#29232d]
                "
              >
                Less “how do I put this in Webflow?” and more “how
                should this actually behave?”
              </p>
            </div>
          </div>
        </section>

        {/* CMS + MASONRY GRID */}
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
      lg:grid-cols-[0.75fr_1.25fr]
      lg:gap-20
    "
  >
    {/* LEFT COPY */}
    <div>
      <div
        className="
          mb-5
          flex
          items-center
          gap-2
        "
      >
        <Layers3
          size={16}
          className="text-[#806fbd]"
        />

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
        CMS, but make it editorial.
      </h2>

      <div
        className="
          mt-6
          max-w-lg
          space-y-5
          leading-7
          text-[#7d707a]
        "
      >
        <p>
          The highlighted work section was CMS-driven, but I didn&apos;t
          want it to read like a normal repeating grid.
        </p>

        <p>
          I built it with mixed image heights, overlay text, and an
          intentionally uneven rhythm so the content feels more like a
          curated gallery wall than a standard collection list.
        </p>

        <p
          className="
            font-medium
            text-[#29232d]
          "
        >
          Structured underneath. A little chaotic on purpose on top.
        </p>
      </div>
    </div>

    {/* MASONRY-STYLE VISUAL */}
    <div
      className="
        grid
        grid-cols-2
        gap-3
        md:grid-cols-3
      "
    >
      {/* COLUMN 1 */}
      <div className="space-y-3">
        <div
          className="
            relative
            min-h-[260px]
            overflow-hidden
            rounded-[22px]
            bg-[#eee8f5]
          "
        >
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              bg-gradient-to-t
              from-[#29232d]/70
              to-transparent
              p-4
            "
          >
            <p className="text-sm text-white">
              Highlighted work
            </p>
          </div>
        </div>

        <div
          className="
            relative
            min-h-[180px]
            overflow-hidden
            rounded-[22px]
            bg-[#f7edf2]
          "
        >
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              bg-gradient-to-t
              from-[#29232d]/65
              to-transparent
              p-4
            "
          >
            <p className="text-sm text-white">
              CMS item
            </p>
          </div>
        </div>
      </div>

      {/* COLUMN 2 */}
      <div className="space-y-3">
        <div
          className="
            relative
            min-h-[190px]
            overflow-hidden
            rounded-[22px]
            bg-[#edf3f7]
          "
        >
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              bg-gradient-to-t
              from-[#29232d]/65
              to-transparent
              p-4
            "
          >
            <p className="text-sm text-white">
              Story
            </p>
          </div>
        </div>

        <div
          className="
            relative
            min-h-[250px]
            overflow-hidden
            rounded-[22px]
            bg-[#f3ede8]
          "
        >
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              bg-gradient-to-t
              from-[#29232d]/70
              to-transparent
              p-4
            "
          >
            <p className="text-sm text-white">
              Another highlight
            </p>
          </div>
        </div>
      </div>

      {/* COLUMN 3 */}
      <div className="hidden space-y-3 md:block">
        <div
          className="
            relative
            min-h-[280px]
            overflow-hidden
            rounded-[22px]
            bg-[#efeaf7]
          "
        >
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              bg-gradient-to-t
              from-[#29232d]/70
              to-transparent
              p-4
            "
          >
            <p className="text-sm text-white">
              Feature
            </p>
          </div>
        </div>

        <div
          className="
            relative
            min-h-[160px]
            overflow-hidden
            rounded-[22px]
            bg-[#f8eef3]
          "
        >
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              bg-gradient-to-t
              from-[#29232d]/65
              to-transparent
              p-4
            "
          >
            <p className="text-sm text-white">
              CMS item
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* OTHER DETAILS */}
        <section className="py-20 md:py-24">
          <div
            className="
              mb-12
              max-w-2xl
            "
          >
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
                text-4xl
                font-semibold
                leading-[0.98]
                tracking-[-0.05em]
                text-[#29232d]
                md:text-5xl
              "
            >
              Not everything needed to be the main character.
            </h2>
          </div>

          <div
            className="
              grid
              gap-x-10
              gap-y-8
              md:grid-cols-2
            "
          >
            {supportingWork.map((item) => (
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
        </section>

        {/* WHAT I LEARNED */}
        <section
          className="
            border-t
            border-[#e9e3ea]
            py-20
            md:py-24
          "
        >
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
                Sometimes the website is only one piece of the system.
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
                This project pushed me further into thinking beyond the
                Webflow canvas itself.
              </p>

              <p>
                Between more involved Rive interactions, CMS-driven
                layouts, and connecting Shopify through custom code, I
                was working with several different pieces that still had
                to feel like one website to the person using it.
              </p>

              <p
                className="
                  font-medium
                  text-[#29232d]
                "
              >
                Webflow was still home base. It just had neighbors now.
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
                Webflow + Rive + CMS + Shopify.
                <br />
                Somehow, everyone got along.
              </h2>
            </div>

            <Button
              href="/#contact"
              variant="secondary"
              showArrow={false}
              className="
                w-fit
                shrink-0
                px-6
                py-3
              "
            >
              Work with me
            </Button>
          </div>
        </section>
      </Container>
    </main>
  );
}