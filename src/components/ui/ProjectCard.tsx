import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import type { Project } from "@/src/data/portfolio";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  return (
    <Link
      href={project.href ?? "#"}
      className={`
        group
        relative
        block
        overflow-hidden
        rounded-[28px]
        border
        backdrop-blur-xl
        transition-all
        duration-500
        ease-out

        ${
          featured
            ? `
              border-[#efa6c1]/70
              bg-white/65
              shadow-[0_24px_70px_rgba(217,108,155,0.16)]
            `
            : `
              border-white/70
              bg-white/50
              shadow-[0_20px_50px_rgba(93,68,84,0.08)]
            `
        }

        hover:-translate-y-2
        hover:shadow-[0_28px_70px_rgba(93,68,84,0.14)]
      `}
    >
      {/* FEATURED AMBIENT GLOW */}
      {featured && (
        <>
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              z-0
              h-44
              w-44
              rounded-full
              bg-[#efa6c1]/35
              blur-[55px]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -left-12
              bottom-12
              z-0
              h-36
              w-36
              rounded-full
              bg-[#b9a7ee]/25
              blur-[55px]
            "
          />
        </>
      )}

      {/* IMAGE */}
      <div
        className="
          relative
          z-10
          aspect-[4/3]
          overflow-hidden
        "
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.04]
          "
        />

        {/* FEATURED BADGE */}
        {featured && (
          <div
            className="
              absolute
              left-4
              top-4
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/80
              bg-white/75
              px-3
              py-2
              text-[11px]
              font-medium
              uppercase
              tracking-[0.12em]
              text-[#d96c9b]
              shadow-[0_8px_20px_rgba(93,68,84,0.10)]
              backdrop-blur-xl
            "
          >
            <Sparkles size={13} />

            Featured
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 p-6">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <p
              className="
                mb-2
                text-xs
                uppercase
                tracking-[0.14em]
                text-[#7d707a]
              "
            >
              {project.category}
            </p>

            <h3
              className={`
                font-semibold
                tracking-[-0.03em]
                text-[#29232d]
                transition-colors
                duration-300
                ${
                  featured
                    ? "text-[1.7rem]"
                    : "text-2xl"
                }
                group-hover:text-[#806fbd]
              `}
            >
              {project.title}
            </h3>
          </div>

          {/* INTERNAL PAGE INDICATOR */}
          <div
            className={`
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              transition-all
              duration-300

              ${
                featured
                  ? `
                    border-[#efa6c1]/60
                    bg-[#fff4f8]/80
                    text-[#d96c9b]
                  `
                  : `
                    border-white
                    bg-white/70
                    text-[#7d707a]
                  `
              }

              group-hover:-translate-y-1
              group-hover:translate-x-1
            `}
          >
            <ArrowUpRight size={18} />
          </div>
        </div>

        <p
          className="
            mb-5
            leading-7
            text-[#7d707a]
          "
        >
          {project.description}
        </p>

        {/* TECHNOLOGIES */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className={`
                rounded-full
                border
                px-3
                py-1.5
                text-xs

                ${
                  featured
                    ? `
                      border-[#efa6c1]/30
                      bg-[#fff4f8]/70
                      text-[#9a5874]
                    `
                    : `
                      border-white
                      bg-white/60
                      text-[#7d707a]
                    `
                }
              `}
            >
              {technology}
            </span>
          ))}
        </div>

        {/* CASE STUDY HINT */}
        <div
          className="
            mt-6
            flex
            items-center
            gap-2
            text-xs
            font-medium
            text-[#9b8f99]
            transition-colors
            duration-300
            group-hover:text-[#806fbd]
          "
        >
          <span>Read build notes</span>

          <span
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}