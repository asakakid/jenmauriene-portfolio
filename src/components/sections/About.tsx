import Link from "next/link";

import Container from "../layout/Container";
import Button from "../ui/Button";

export default function About() {
  const process = [
    [
      "01",
      "Give me the idea",
      "Rough briefs and “something like this” are welcome.",
    ],
    [
      "02",
      "Let me cook",
      "I make sense of it, ask questions, and try things.",
    ],
    [
      "03",
      "Pick a direction",
      "I give you a few. You tell me what feels right.",
    ],
    [
      "04",
      "There it is",
      "We keep going until we get the “yep, that’s it.”",
    ],
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-32"
    >
      <Container>
        <div
          className="
            rounded-[34px]
            border
            border-white/80
            bg-white/42
            p-7
            shadow-[0_22px_70px_rgba(79,61,73,0.06)]
            backdrop-blur-xl
            md:p-10
            lg:p-12
          "
        >
          <div
            className="
              grid
              gap-12
              lg:grid-cols-[0.95fr_1.05fr]
              lg:gap-16
            "
          >
            {/* LEFT — EDITORIAL */}
            <div className="flex flex-col justify-between">
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
                  About Me
                </p>

                <h2
                  className="
                    max-w-xl
                    text-4xl
                    font-semibold
                    leading-[0.94]
                    tracking-[-0.055em]
                    text-[#29232d]
                    md:text-6xl
                  "
                >
                  Give me the idea.
                  <br />
                  I&apos;ll figure out the “how.”
                </h2>

                <div
                  className="
                    mt-8
                    max-w-xl
                    leading-7
                    text-[#7d707a]
                  "
                >
                  <p>
                    I&apos;m a Webflow developer at Dorxata who started
                    as an intern fixing bugs and somehow ended up
                    becoming the person people rely on when the feedback
                    starts rolling in.
                  </p>
                </div>

                {/* ABOUT TEASER */}
                <div
                  className="
                    mt-7
                    max-w-sm
                    border-l
                    border-[#d8cff4]
                    pl-4
                  "
                >
                  <p
                    className="
                      text-xs
                      italic
                      leading-5
                      text-[#9b8f99]
                    "
                  >
                    Oops — there&apos;s a whole story behind that.
                  </p>

                  <Link
                    href="/about"
                    className="
                      group
                      mt-1
                      inline-flex
                      items-center
                      gap-1
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
                    Read the lore

                    <span
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>

              <div className="mt-10">
                <Button
                  href="#contact"
                  variant="secondary"
                  showArrow={false}
                  className="px-5 py-3"
                >
                  Work with me
                </Button>
              </div>
            </div>

            {/* RIGHT — PROCESS RAIL */}
            <div className="relative">
              {/* VERTICAL ACCENT LINE */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  bottom-0
                  left-[18px]
                  top-0
                  w-px
                  bg-[linear-gradient(to_bottom,rgba(217,108,155,0.45),rgba(185,167,238,0.35),rgba(255,255,255,0))]
                "
              />

              <div className="space-y-8">
                {process.map(([number, title, description]) => (
                  <div
                    key={number}
                    className="
                      group
                      relative
                      grid
                      grid-cols-[38px_1fr]
                      gap-5
                    "
                  >
                    {/* NUMBER */}
                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/90
                        bg-white/80
                        text-xs
                        font-medium
                        text-[#7d707a]
                        shadow-[0_8px_20px_rgba(79,61,73,0.05)]
                        transition-all
                        duration-300
                        group-hover:border-[#d8cff4]
                        group-hover:text-[#8f7ccf]
                      "
                    >
                      {number}
                    </div>

                    {/* PROCESS ITEM */}
                    <div
                      className="
                        rounded-[24px]
                        border
                        border-white/70
                        bg-white/48
                        p-5
                        transition-all
                        duration-300
                        ease-out
                        group-hover:-translate-y-0.5
                        group-hover:bg-white/70
                        group-hover:shadow-[0_12px_30px_rgba(79,61,73,0.06)]
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
                        {title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-[#7d707a]
                        "
                      >
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}