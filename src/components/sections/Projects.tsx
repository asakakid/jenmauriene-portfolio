
import { EyeOff } from "lucide-react";

import Container from "../layout/Container";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/src/data/portfolio";

export default function Projects() {
  return (
    <section
      id="work"
      className="relative py-24 md:py-32"
    >
      <Container>
        {/* SECTION INTRO */}
        <div className="mb-10 md:mb-12">
          <p
            className="
              mb-3
              text-sm
              uppercase
              tracking-[0.14em]
              text-[#7d707a]
            "
          >
            Selected Web Development Work
          </p>

          {/* TOP ROW — HEADING + CONTEXT */}
          <div
            className="
              grid
              gap-8
              md:grid-cols-[1.2fr_0.8fr]
              md:items-end
            "
          >
            <h2
              className="
                max-w-3xl
                text-4xl
                font-semibold
                leading-[0.98]
                tracking-[-0.05em]
                text-[#29232d]
                md:text-6xl
              "
            >
              Things I've built,
              <br />
              fixed, and fussed over.
            </h2>

            <div
              className="
                flex
                max-w-md
                items-start
                gap-3
                border-l
                border-[#d8cff4]
                pl-4
              "
            >
              <EyeOff
                aria-hidden="true"
                size={15}
                className="
                  mt-1
                  shrink-0
                  text-[#9b8fce]
                "
              />

              <div>
                <p
                  className="
                    text-sm
                    font-medium
                    text-[#5f5560]
                  "
                >
                  A quick project note:
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    leading-6
                    text-[#8b7f89]
                  "
                >
                  Some featured websites were completed as part of my professional work. 
                  I highlight my development contributions using only 
                  publicly available project details.
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM ROW — SUBHEADING */}
          <div
            className="
              mt-7
              grid
              md:grid-cols-[1.2fr_0.8fr]
            "
          >
            <p
              className="
                max-w-2xl
                leading-7
                text-[#7d707a]
              "
            >
              Selected Webflow and front-end development projects spanning
              client websites, custom interactions, CMS builds, integrations,
              and the small details that make everything feel finished.
            </p>
          </div>
        </div>

        {/* PROJECT GRID */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={index === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
