import { Mail, Sparkles } from "lucide-react";

import Container from "../layout/Container";
import ContactForm from "../ui/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        py-24
        md:py-32
      "
    >
      {/* ambient pastel light */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-24
          top-16
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#efa6c1]/10
          blur-[110px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-24
          bottom-0
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#b9a7ee]/10
          blur-[120px]
        "
      />

      <Container className="relative z-10">
        <div
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-white/80
            bg-white/46
            p-7
            shadow-[0_24px_70px_rgba(79,61,73,0.07)]
            backdrop-blur-xl
            md:p-10
            lg:p-12
          "
        >
          {/* decorative sparkle */}
          <Sparkles
            aria-hidden="true"
            size={84}
            strokeWidth={0.7}
            className="
              pointer-events-none
              absolute
              right-6
              top-4
              text-[#b9a7ee]/16
              md:right-10
              md:top-8
            "
          />

          <div
            className="
              grid
              gap-14
              lg:grid-cols-[0.78fr_1.22fr]
              lg:gap-16
            "
          >
            {/* LEFT */}
            <div className="flex flex-col justify-between">
              <div>
                <div
                  className="
                    mb-6
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-[#eadff2]
                    bg-white/65
                    px-3.5
                    py-2
                    text-xs
                    font-medium
                    text-[#8f7ccf]
                    shadow-[0_8px_20px_rgba(126,103,160,0.06)]
                  "
                >
                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[#efa6c1]
                    "
                  />

                  Say hi
                </div>

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
                  Let&apos;s make something
                  nice together.
                </h2>

                <p
                  className="
                    mt-6
                    max-w-sm
                    leading-7
                    text-[#7d707a]
                  "
                >
                  Got a project, rough idea, or a
                  “can we make this better?” situation?
                  Send it over.
                </p>
              </div>

              {/* CONTACT LINKS */}
              <div className="mt-12">
                <p
                  className="
                    mb-4
                    text-xs
                    uppercase
                    tracking-[0.14em]
                    text-[#9b8f99]
                  "
                >
                  Prefer direct?
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:your@email.com"
                    className="
                      group
                      flex
                      w-fit
                      items-center
                      gap-3
                      text-sm
                      text-[#7d707a]
                      transition
                      duration-300
                      hover:-translate-y-0.5
                      hover:text-[#29232d]
                    "
                  >
                    <span
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#f0dfe6]
                        bg-[#fff5f8]
                        transition-all
                        duration-300
                        group-hover:border-[#e8bfd0]
                        group-hover:bg-[#fff0f5]
                      "
                    >
                      <Mail
                        size={15}
                        className="text-[#b85f82]"
                      />
                    </span>

                    builtbyjenmauriene@gmail.com
                  </a>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.linkedin.com/in/jen-mauriene-ramos-a04499369/"
                      className="
                        rounded-full
                        border
                        border-[#ddd5f2]
                        bg-[#f6f2ff]
                        px-4
                        py-2
                        text-xs
                        font-medium
                        text-[#806fbd]
                        transition
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-[#efe8ff]
                      "
                    >
                      LinkedIn
                    </a>

                    <a
                      href="https://github.com/asakakid"
                      className="
                        rounded-full
                        border
                        border-[#f0dfe6]
                        bg-[#fff5f8]
                        px-4
                        py-2
                        text-xs
                        font-medium
                        text-[#b85f82]
                        transition
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-[#fff0f5]
                      "
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div
              className="
                rounded-[30px]
                border
                border-white/85
                bg-white/62
                p-6
                shadow-[0_18px_50px_rgba(79,61,73,0.06)]
                backdrop-blur-xl
                md:p-8
              "
            >
              <div className="mb-7">
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.14em]
                    text-[#9b8f99]
                  "
                >
                  Your turn
                </p>

                <p
                  className="
                    mt-2
                    text-xl
                    font-medium
                    tracking-[-0.03em]
                    text-[#29232d]
                  "
                >
                  Tell me what you have in mind.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}