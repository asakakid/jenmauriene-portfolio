import {
  ArrowDown,
  Sparkles,
} from "lucide-react";

import Container from "../layout/Container";
import GlassCard from "../ui/GlassCard";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28"
    >
      <Container>
        <div className="relative">

          {/* FLOATING YELLOW BANNER */}
          <div
            className="
              absolute
              left-6
              top-0
              z-20
              -translate-y-1/2
              rounded-full
              border
              border-[#eadf9f]
              bg-[#fff9d8]
              px-4
              py-2.5
              shadow-[0_8px_20px_rgba(119,101,45,0.08)]
              backdrop-blur-md
              md:left-10
            "
          >
            <div className="flex items-center gap-2">
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#e4c74e]
                "
              />

              <span
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.1em]
                  text-[#7a6f47]
                "
              >
                Currently accepting good ideas
              </span>
            </div>
          </div>

          {/* HERO CARD */}
          <GlassCard
            className="
              relative
              overflow-hidden
              border-white/80
              bg-white/50
              shadow-[0_24px_80px_rgba(79,61,73,0.08)]
            "
          >
            <div
              className="
                grid
                min-h-[680px]
                gap-10
                lg:grid-cols-[1.05fr_0.95fr]
              "
            >
              {/* LEFT */}
              <div
                className="
                  relative
                  z-10
                  flex
                  flex-col
                  justify-center
                  p-7
                  md:p-12
                  lg:p-16
                "
              >
                <p
                  className="
                    mb-5
                    text-sm
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    text-[#7d707a]
                  "
                >
                  Webflow Developer · Front-End Developer
                </p>

                <h1
                  className="
                    max-w-[760px]
                    text-5xl
                    font-semibold
                    leading-[0.96]
                    tracking-[-0.06em]
                    text-[#29232d]
                    md:text-7xl
                  "
                >
                  Websites built
                  <br />
                  with intention.
                </h1>

                <div
                  className="
                    mt-7
                    max-w-lg
                    border-l
                    border-[#d8cff4]
                    pl-4
                  "
                >
                  <p
                    className="
                      text-sm
                      leading-6
                      text-[#6f636d]
                    "
                  >
                    I like clean structure, soft interactions, and
                    details nobody asked me to notice — but I noticed
                    anyway.
                  </p>
                </div>

                <div className="mt-9 flex flex-wrap gap-3">
                  <Button
                    href="#work"
                    showArrow={false}
                    className="px-6 py-3"
                  >
                    <span className="flex items-center gap-2">
                      View my work
                      <ArrowDown size={16} />
                    </span>
                  </Button>

                  <Button
                    href="#contact"
                    variant="secondary"
                    showArrow={false}
                    className="px-6 py-3"
                  >
                    Work with me
                  </Button>
                </div>
              </div>

              {/* RIGHT */}
              <div
                className="
                  relative
                  hidden
                  min-h-[560px]
                  lg:block
                "
              >
                {/* SOFT AMBIENT LIGHT */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-[420px]
                    w-[420px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[radial-gradient(circle,rgba(239,166,193,0.13)_0%,rgba(185,167,238,0.11)_45%,transparent_72%)]
                    blur-[40px]
                  "
                />

                {/* MAIN GLASS NOTE */}
                <div
                  className="
                    absolute
                    left-[48%]
                    top-[48%]
                    w-[300px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rotate-[-2deg]
                    rounded-[28px]
                    border
                    border-white/85
                    bg-white/70
                    p-7
                    shadow-[0_24px_60px_rgba(79,61,73,0.08)]
                    backdrop-blur-xl
                    transition-transform
                    duration-500
                    hover:rotate-0
                    hover:scale-[1.02]
                  "
                >
                  <div
                    className="
                      mb-5
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <Sparkles
                      size={15}
                      className="text-[#b9a7ee]"
                    />

                    <span
                      className="
                        text-xs
                        uppercase
                        tracking-[0.12em]
                        text-[#9b8f99]
                      "
                    >
                      What I work with
                    </span>
                  </div>

                  <div className="space-y-3">
                    {[
                      "Webflow development",
                      "Custom front-end code",
                      "Interactive experiences",
                    ].map((item) => (
                      <div
                        key={item}
                        className="
                          flex
                          items-center
                          gap-3
                        "
                      >
                        <span
                          className="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-[#efa6c1]
                          "
                        />

                        <p className="text-sm text-[#4f454d]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TOP WRITTEN NOTE */}
                <div
                  className="
                    absolute
                    left-[7%]
                    top-[17%]
                    rotate-[-5deg]
                  "
                >
                  <div className="flex items-start gap-2">
                    <span
                      className="
                        text-lg
                        leading-none
                        text-[#b9a7ee]
                      "
                    >
                      ✦
                    </span>

                    <p
                      className="
                        max-w-[140px]
                        text-[15px]
                        font-medium
                        italic
                        leading-5
                        tracking-[-0.02em]
                        text-[#806fbd]
                      "
                    >
                      probably needs 
                      <br />
                      one more tweak.
                    </p>
                  </div>

                  <svg
                    aria-hidden="true"
                    viewBox="0 0 80 34"
                    fill="none"
                    className="
                      ml-16
                      mt-1
                      h-8
                      w-20
                      rotate-[8deg]
                      text-[#b9a7ee]/55
                    "
                  >
                    <path
                      d="M3 4C22 5 45 11 69 27"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />

                    <path
                      d="M61 26L70 28L68 19"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* BOTTOM WRITTEN NOTE */}
                <div
                  className="
                    absolute
                    bottom-[13%]
                    right-[5%]
                    rotate-[3deg]
                  "
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 76 40"
                    fill="none"
                    className="
                      -ml-10
                      mb-1
                      h-9
                      w-20
                      -rotate-[8deg]
                      text-[#d99aae]/65
                    "
                  >
                    <path
                      d="M72 35C57 33 38 27 15 8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />

                    <path
                      d="M22 7L13 7L15 16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p
                    className="
                      max-w-[190px]
                      text-[15px]
                      font-medium
                      italic
                      leading-5
                      tracking-[-0.025em]
                      text-[#a66f82]
                    "
                  >
                    yes, I noticed
                    <br />
                    that 4px gap. :)
                  </p>
                </div>

                {/* TINY DECORATIVE MARK */}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    right-[14%]
                    top-[20%]
                    rotate-12
                    text-xl
                    text-[#e4c74e]
                  "
                >
                  ✿
                </span>
              </div>
            </div>
          </GlassCard>
        </div>
      </Container>
    </section>
  );
}