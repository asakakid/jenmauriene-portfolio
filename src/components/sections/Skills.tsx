import Container from "../layout/Container";
import GlassCard from "../ui/GlassCard";
import { skills } from "@/src/data/portfolio";

export default function Skills() {
  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">

          {/* LEFT FEATURE PANEL */}
          <GlassCard
            className="
              group
              relative
              overflow-hidden
              border-white/80
              bg-white/50
              p-7
              shadow-[0_22px_60px_rgba(79,61,73,0.07)]
              md:p-10
              lg:min-h-[560px]
            "
          >
            {/* subtle ambient response */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-24
                top-1/3
                h-72
                w-72
                rounded-full
                bg-[#b9a7ee]/0
                blur-[80px]
                transition-all
                duration-700
                group-hover:bg-[#b9a7ee]/12
              "
            />

            <div className="relative z-10 flex h-full flex-col justify-between">
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
                  Capabilities
                </p>

                <h2
                  className="
                    max-w-md
                    text-4xl
                    font-semibold
                    leading-[0.96]
                    tracking-[-0.05em]
                    text-[#29232d]
                    md:text-6xl
                  "
                >
                  What I bring to the build.
                </h2>

                <p
                  className="
                    mt-6
                    max-w-md
                    leading-7
                    text-[#7d707a]
                  "
                >
                  Visual-first development with enough front-end depth
                  to move beyond templates when the project needs it.
                </p>

                {/* capability chips */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "Visual Development",
                    "Responsive",
                    "CMS",
                    "AI-Assisted",
                  ].map((item, index) => (
                    <span
                      key={item}
                      className={`
                        rounded-full
                        border
                        border-white/80
                        bg-white/58
                        px-3
                        py-2
                        text-xs
                        text-[#7d707a]
                        shadow-[0_6px_18px_rgba(79,61,73,0.04)]
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-white/80
                        hover:text-[#29232d]

                        ${
                          index === 0
                            ? "hover:border-[#efa6c1]/50"
                            : "hover:border-[#b9a7ee]/45"
                        }
                      `}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* CORE APPROACH */}
              <div
                className="
                  mt-12
                  rounded-[26px]
                  border
                  border-white/80
                  bg-white/62
                  p-6
                  shadow-[0_10px_28px_rgba(79,61,73,0.05)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  ease-out
                  group-hover:border-[#d8cff4]/70
                  group-hover:bg-white/72
                  group-hover:shadow-[0_14px_34px_rgba(79,61,73,0.07)]
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
                  Core approach
                </p>

                <p
                  className="
                    mt-3
                    text-2xl
                    font-medium
                    leading-snug
                    tracking-[-0.03em]
                    text-[#29232d]
                  "
                >
                  Webflow first.
                  <br />
                  Code where it creates leverage.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* RIGHT CAPABILITY GRID */}
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill, index) => {
              const featured = index === 0;

              return (
                <article
                  key={skill.name}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    p-6
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    ease-out
                    hover:-translate-y-1

                    ${
                      featured
                        ? `
                          border-[#d8cff4]/70
                          bg-[linear-gradient(145deg,rgba(255,255,255,0.76),rgba(247,243,252,0.72))]
                          shadow-[0_16px_40px_rgba(126,103,160,0.09)]
                        `
                        : `
                          border-white/80
                          bg-white/54
                          shadow-[0_12px_30px_rgba(79,61,73,0.05)]
                        `
                    }

                    hover:border-[#d8cff4]/85
                    hover:bg-white/74
                    hover:shadow-[0_18px_42px_rgba(79,61,73,0.09)]
                  `}
                >

                  {/* HOVER BLOOM */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -right-12
                      -top-12
                      h-36
                      w-36
                      rounded-full
                      bg-[#b9a7ee]/0
                      blur-[45px]
                      transition-all
                      duration-500
                      group-hover:bg-[#b9a7ee]/18
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -bottom-16
                      -left-12
                      h-32
                      w-32
                      rounded-full
                      bg-[#efa6c1]/0
                      blur-[45px]
                      transition-all
                      duration-500
                      group-hover:bg-[#efa6c1]/10
                    "
                  />

                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div>
                      {/* TOP ROW */}
                      <div className="mb-10 flex items-start justify-between gap-4">
                        <span
                          className="
                            text-xs
                            font-medium
                            uppercase
                            tracking-[0.14em]
                            text-[#9b8f99]
                            transition-all
                            duration-300
                            group-hover:translate-x-1
                            group-hover:text-[#8f7ccf]
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          className="
                            rounded-full
                            border
                            border-white/80
                            bg-white/60
                            px-2.5
                            py-1
                            text-xs
                            font-medium
                            text-[#7d707a]
                            transition-all
                            duration-300
                            group-hover:border-[#d8cff4]/80
                            group-hover:bg-[#f5f1ff]/80
                            group-hover:text-[#8f7ccf]
                          "
                        >
                          {skill.level}%
                        </span>
                      </div>

                      {/* TITLE */}
                      <h3
                        className="
                          text-2xl
                          font-semibold
                          tracking-[-0.04em]
                          text-[#29232d]
                          transition-all
                          duration-300
                          group-hover:translate-x-1
                          group-hover:text-[#8f7ccf]
                        "
                      >
                        {skill.name}
                      </h3>

                      <p
                        className="
                          mt-3
                          text-sm
                          leading-6
                          text-[#7d707a]
                        "
                      >
                        {skill.description}
                      </p>
                    </div>

                    {/* INTERACTIVE PROGRESS */}
                    <div className="mt-8">
                      <div
                        className="
                          relative
                          h-[5px]
                          overflow-hidden
                          rounded-full
                          bg-[#eeeaf0]
                        "
                      >
                        {/* resting indicator */}
                        <div
                          className="
                            absolute
                            inset-y-0
                            left-0
                            rounded-full
                            bg-[#d8d0da]
                          "
                          style={{
                            width: `${skill.level}%`,
                          }}
                        />

                        {/* animated color layer */}
                        <div
                          className="
                            absolute
                            inset-y-0
                            left-0
                            origin-left
                            scale-x-0
                            rounded-full
                            bg-[linear-gradient(90deg,#efa6c1_0%,#b9a7ee_100%)]
                            transition-transform
                            duration-500
                            ease-out
                            group-hover:scale-x-100
                          "
                          style={{
                            width: `${skill.level}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}