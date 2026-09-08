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
            Selected Work
          </p>

          <div
            className="
              flex
              flex-col
              gap-6
              md:flex-row
              md:items-end
              md:justify-between
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
              Things I&apos;ve built,
              <br />
              fixed, and fussed over.
            </h2>

            <p
              className="
                max-w-md
                leading-7
                text-[#7d707a]
              "
            >
              A mix of Webflow client work and projects where I got to
              experiment, solve problems, and obsess over the little
              details.
            </p>
          </div>
        </div>

        {/* CONFIDENTIALITY NOTE */}
        <div
          className="
            mb-10
            flex
            max-w-2xl
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
              A tiny confidentiality intermission:
            </p>

            <p
              className="
                mt-1
                text-sm
                leading-6
                text-[#8b7f89]
              "
            >
              Some company projects are wearing aliases here. The work
              is real; the client names are staying offstage. ✦
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