"use client";

import {
  useMemo,
  useRef,
  useState,
} from "react";

import Container from "../layout/Container";
import { tools } from "@/src/data/portfolio";

type Filter =
  | "All"
  | "Design"
  | "Development"
  | "Automation";

const filters: Filter[] = [
  "All",
  "Design",
  "Development",
  "Automation",
];

export default function Stack() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [activeFilter, setActiveFilter] =
    useState<Filter>("All");

  const filteredTools = useMemo(() => {
    const sortedTools = [...tools].sort(
      (a, b) => a.order - b.order
    );

    if (activeFilter === "All") {
      return sortedTools;
    }

    return sortedTools.filter(
      (tool) => tool.category === activeFilter
    );
  }, [activeFilter]);

  function handleFilterChange(filter: Filter) {
    setActiveFilter(filter);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        sectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  }

  function getStatusStyles(status: string) {
    switch (status) {
      case "Core":
        return {
          pill: `
            border-[#f0bfd0]
            bg-[#fff0f5]
            text-[#b85f82]
            group-hover:border-[#e9a9c0]
            group-hover:bg-[#ffe8f0]
          `,
          heading: `
            group-hover:text-[#b85f82]
          `,
          background: `
            bg-[linear-gradient(90deg,rgba(255,232,240,0.72)_0%,rgba(255,240,245,0.38)_55%,transparent_100%)]
          `,
          accent: `
            bg-[#e9a9c0]
          `,
        };

      case "In use":
        return {
          pill: `
            border-[#d7cef5]
            bg-[#f4f0ff]
            text-[#806fbd]
            group-hover:border-[#c9bced]
            group-hover:bg-[#eee8ff]
          `,
          heading: `
            group-hover:text-[#806fbd]
          `,
          background: `
            bg-[linear-gradient(90deg,rgba(238,232,255,0.76)_0%,rgba(244,240,255,0.38)_55%,transparent_100%)]
          `,
          accent: `
            bg-[#c9bced]
          `,
        };

      case "Learning":
        return {
          pill: `
            border-[#c7dff2]
            bg-[#eef7ff]
            text-[#5f86a6]
            group-hover:border-[#b5d4ec]
            group-hover:bg-[#e5f3ff]
          `,
          heading: `
            group-hover:text-[#5f86a6]
          `,
          background: `
            bg-[linear-gradient(90deg,rgba(229,243,255,0.78)_0%,rgba(238,247,255,0.38)_55%,transparent_100%)]
          `,
          accent: `
            bg-[#b5d4ec]
          `,
        };

      case "Experimental":
        return {
          pill: `
            border-[#f2d0bd]
            bg-[#fff3ec]
            text-[#b87859]
            group-hover:border-[#ebc0a8]
            group-hover:bg-[#ffebe0]
          `,
          heading: `
            group-hover:text-[#b87859]
          `,
          background: `
            bg-[linear-gradient(90deg,rgba(255,235,224,0.78)_0%,rgba(255,243,236,0.38)_55%,transparent_100%)]
          `,
          accent: `
            bg-[#ebc0a8]
          `,
        };

      default:
        return {
          pill: `
            border-[#e5dfe6]
            bg-white/50
            text-[#9b8f99]
          `,
          heading: `
            group-hover:text-[#8f7ccf]
          `,
          background: `
            bg-[linear-gradient(90deg,rgba(245,241,255,0.6),transparent)]
          `,
          accent: `
            bg-[#d8cff4]
          `,
        };
    }
  }

  return (
    <section
      ref={sectionRef}
      id="stack"
      className="scroll-mt-28 pb-24 md:pb-32"
    >
      <Container>
        <div
          className="
            grid
            gap-12
            lg:grid-cols-[1.2fr_0.8fr]
            lg:gap-20
          "
        >
          {/* LEFT — TOOL INDEX */}
          <div
            className="
              order-2
              border-t
              border-[#e3dde5]
              lg:order-1
            "
          >
            {filteredTools.map((tool, index) => {
              const statusStyles =
                getStatusStyles(tool.status);

              return (
                <div
                  key={tool.id}
                  className="
                    group
                    relative
                    overflow-hidden
                    border-b
                    border-[#e3dde5]
                  "
                >
                  {/* STATUS HOVER BACKGROUND */}
                  <div
                    aria-hidden="true"
                    className={`
                      pointer-events-none
                      absolute
                      inset-0
                      -translate-x-[105%]
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:translate-x-0
                      ${statusStyles.background}
                    `}
                  />

                  {/* STATUS ACCENT */}
                  <div
                    aria-hidden="true"
                    className={`
                      absolute
                      bottom-0
                      left-0
                      top-0
                      w-[2px]
                      origin-center
                      scale-y-0
                      transition-transform
                      duration-300
                      ease-out
                      group-hover:scale-y-100
                      ${statusStyles.accent}
                    `}
                  />

                  <div
                    className="
                      relative
                      z-10
                      grid
                      grid-cols-[48px_1fr_auto]
                      items-start
                      gap-4
                      py-6
                      pl-1
                      transition-all
                      duration-300
                      group-hover:pl-3
                    "
                  >
                    {/* INDEX */}
                    <span
                      className="
                        pt-1
                        text-xs
                        font-medium
                        tracking-[0.12em]
                        text-[#9b8f99]
                      "
                    >
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    {/* TOOL INFO */}
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <p
                          className={`
                            text-2xl
                            font-semibold
                            tracking-[-0.04em]
                            text-[#29232d]
                            transition-all
                            duration-300
                            ease-out
                            group-hover:translate-x-1
                            md:text-3xl
                            ${statusStyles.heading}
                          `}
                        >
                          {tool.name}
                        </p>

                        <span
                          className="
                            text-[10px]
                            uppercase
                            tracking-[0.12em]
                            text-[#9b8f99]
                          "
                        >
                          {tool.category}
                        </span>
                      </div>

                      {tool.description && (
                        <p
                          className="
                            mt-2
                            max-w-xl
                            text-sm
                            leading-6
                            text-[#7d707a]
                          "
                        >
                          {tool.description}
                        </p>
                      )}
                    </div>

                    {/* STATUS PILL */}
                    <span
                      className={`
                        mt-1
                        rounded-full
                        border
                        px-3
                        py-1
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.12em]
                        backdrop-blur-md
                        transition-all
                        duration-300
                        ${statusStyles.pill}
                      `}
                    >
                      {tool.status}
                    </span>
                  </div>
                </div>
              );
            })}

            {filteredTools.length === 0 && (
              <div
                className="
                  border-b
                  border-[#e3dde5]
                  py-10
                  text-sm
                  text-[#7d707a]
                "
              >
                No tools in this category yet.
              </div>
            )}
          </div>

          {/* RIGHT — INTRO + FILTERS */}
          <div
            className="
              order-1
              lg:order-2
              lg:sticky
              lg:top-28
              lg:self-start
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
              Tech Stack
            </p>

            <h2
              className="
                max-w-xl
                text-4xl
                font-semibold
                leading-[0.95]
                tracking-[-0.055em]
                text-[#29232d]
                md:text-6xl
              "
            >
              The tools I reach for most.
            </h2>

            <p
              className="
                mt-6
                max-w-md
                leading-7
                text-[#7d707a]
              "
            >
              A practical mix of visual development,
              front-end tools, and AI-assisted workflows
              that help me move from idea to working
              website faster.
            </p>

            {/* FILTERS */}
            <div className="mt-8">
              <p
                className="
                  mb-3
                  text-xs
                  uppercase
                  tracking-[0.14em]
                  text-[#9b8f99]
                "
              >
                Filter by
              </p>

              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => {
                  const active =
                    activeFilter === filter;

                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() =>
                        handleFilterChange(filter)
                      }
                      className={`
                        rounded-full
                        border
                        px-4
                        py-2
                        text-xs
                        font-medium
                        transition-all
                        duration-300
                        ease-out

                        ${
                          active
                            ? `
                              border-[#b9a7ee]/55
                              bg-[#f3effd]
                              text-[#7867b2]
                              shadow-[0_8px_20px_rgba(126,103,160,0.08)]
                            `
                            : `
                              border-[#e5dfe6]
                              bg-white/45
                              text-[#7d707a]
                              hover:-translate-y-0.5
                              hover:border-[#d8cff4]
                              hover:bg-white/75
                              hover:text-[#8f7ccf]
                            `
                        }
                      `}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RESULTS COUNT */}
            <div
              className="
                mt-7
                flex
                items-center
                gap-2
                text-xs
                uppercase
                tracking-[0.12em]
                text-[#9b8f99]
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#d96c9b]
                "
              />

              {filteredTools.length}{" "}
              {filteredTools.length === 1
                ? "tool"
                : "tools"}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}