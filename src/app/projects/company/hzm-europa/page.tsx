import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Layers3,
  MapPinned,
  Search,
  Sparkles,
  Workflow,
} from "lucide-react";

import Container from "@/src/components/layout/Container";

const liveUrl = "https://www.hzm-europa.de/";

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
    value: "Webflow · CMS · Mapbox · API Integration",
  },
];

const technologies = [
  "Webflow",
  "Figma",
  "Webflow CMS",
  "Mapbox",
  "JavaScript",
  "API Integration",
  "Responsive Development",
];

const highlights = [
  {
    icon: Workflow,
    title: "Built from supplied Figma designs",
    description:
      "I built the Webflow implementation from the ground up using supplied Figma designs, translating the layouts into a responsive and structured production site.",
  },
  {
    icon: Layers3,
    title: "CMS-driven content",
    description:
      "I used Webflow CMS for product and reusable content sections so information could be maintained without manually rebuilding repeated page elements.",
  },
  {
    icon: MapPinned,
    title: "Mapbox dealer finder",
    description:
      "I integrated Mapbox into the Webflow site to display dealer locations and create an interactive map-based experience for users looking for nearby support.",
  },
  {
    icon: Search,
    title: "Location search",
    description:
      "I implemented location-search functionality so users could search by place or postal code and use that location data to find relevant dealer locations.",
  },
];

export default function HzmEuropaPage() {
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
                Webflow · CMS · Mapbox · API Integration
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
                  HZM Europa
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
                  A heavy-equipment website I built from supplied Figma
                  designs in Webflow, combining CMS-driven content with a
                  custom dealer-finder experience powered by Mapbox and
                  location-search functionality.
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

        {/* FULL DOCUMENTATION — COMING SOON */}
        <section className="pt-16 md:pt-20">
          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-[#e8e0f4]
              bg-[#f7f3ff]/55
              p-6
              md:p-8
            "
          >
            {/* SUBTLE GLOW */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-16
                -top-20
                h-48
                w-48
                rounded-full
                bg-[#b9a7ee]/15
                blur-[70px]
              "
            />

            <div
              className="
                relative
                z-10
                flex
                flex-col
                gap-5
                md:flex-row
                md:items-center
                md:justify-between
              "
            >
              <div className="max-w-2xl">
                <div className="flex items-center gap-2">
                  <Sparkles
                    size={14}
                    className="text-[#d96c9b]"
                  />

                  <p
                    className="
                      text-xs
                      font-medium
                      uppercase
                      tracking-[0.14em]
                      text-[#8f7ccf]
                    "
                  >
                    Full documentation coming soon
                  </p>
                </div>

                <p
                  className="
                    mt-3
                    text-base
                    leading-7
                    text-[#7d707a]
                  "
                >
                  I&apos;ll be documenting my development journey with
                  this website — including the build process, challenges,
                  and things I learned along the way. Stay tuned :)
                </p>
              </div>

              <div
                aria-hidden="true"
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#d8cff4]
                  bg-white/60
                  text-[#806fbd]
                "
              >
                <Sparkles size={18} />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}