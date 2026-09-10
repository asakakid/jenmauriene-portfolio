import { Mail } from "lucide-react";

import Container from "./Container";

export default function Footer() {
  return (
    <footer className="pb-8">
      <Container>
        <div
          className="
            border-t
            border-[#e5dfe6]
            pt-8
          "
        >
          {/* TOP ROW */}
          <div
            className="
              grid
              gap-8
              md:grid-cols-[1fr_auto]
              md:items-end
            "
          >
            {/* LEFT */}
            <div>
              <p
                className="
                  text-lg
                  font-semibold
                  tracking-[-0.03em]
                  text-[#29232d]
                "
              >
                jenmauriene
                <span className="text-[#d96c9b]">.</span>
              </p>

              <p
                className="
                  mt-2
                  max-w-sm
                  text-sm
                  leading-6
                  text-[#7d707a]
                "
              >
                Web developer with a thing for clean builds, thoughtful interactions, 
                and getting the little details right.
              </p>

              <div
                className="
                  mt-5
                  h-[2px]
                  w-16
                  rounded-full
                  bg-[linear-gradient(90deg,#efa6c1,#b9a7ee,#f1d86f)]
                "
              />
            </div>

            {/* RIGHT */}
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-4
                text-sm
              "
            >
              <a
                href="mailto:your@email.com"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-[#7d707a]
                  transition-colors
                  duration-300
                  hover:text-[#29232d]
                "
              >
                <Mail
                  size={15}
                  className="
                    transition-colors
                    duration-300
                    group-hover:text-[#d96c9b]
                  "
                />
                Email
              </a>

              <span
                aria-hidden="true"
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-[#d8cfd7]
                "
              />

              <a
                href="https://www.linkedin.com/in/jenmauriene"
                target="_blank"
                rel="noreferrer"
                className="
                  text-[#7d707a]
                  transition-colors
                  duration-300
                  hover:text-[#806fbd]
                "
              >
                LinkedIn
              </a>

              <span
                aria-hidden="true"
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-[#d8cfd7]
                "
              />

              <a
                href="https://github.com/asakakid"
                target="_blank"
                rel="noreferrer"
                className="
                  text-[#7d707a]
                  transition-colors
                  duration-300
                  hover:text-[#b85f82]
                "
              >
                GitHub
              </a>
            </div>
          </div>

          {/* BOTTOM ROW */}
          <div
            className="
              mt-8
              flex
              flex-col
              gap-2
              border-t
              border-[#eee8ef]
              pt-5
              text-xs
              text-[#9b8f99]
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p>
              © {new Date().getFullYear()} jenmauriene.
            </p>

            <p>
              Webflow Developer · Front-End Development
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}