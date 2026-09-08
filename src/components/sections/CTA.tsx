import Container from "../layout/Container";
import Button from "../ui/Button";

export default function CTA() {
  return (
    <section
      aria-label="Project inquiry"
      className="pb-16 md:pb-20"
    >
      <Container>
        <div
          className="
            relative
            border-y
            border-[#e7e1e8]
            py-6
            md:py-7
          "
        >
          {/* YELLOW ACCENT STRIP */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-0
              top-0
              h-[3px]
              w-28
              rounded-full
              bg-[#f1d86f]
            "
          />

          <div
            className="
              flex
              flex-col
              gap-5
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <div className="max-w-2xl">
              <p
                className="
                  mb-2
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.13em]
                  text-[#9a8f65]
                "
              >
                Tiny reminder
              </p>

              <p
                className="
                  text-xl
                  font-medium
                  leading-snug
                  tracking-[-0.03em]
                  text-[#29232d]
                  md:text-2xl
                "
              >
                You don&apos;t need a perfect brief.
                <span className="text-[#9b8f99]">
                  {" "}“I have a vibe” is valid input.
                </span>
              </p>
            </div>

            <Button
              href="#contact"
              variant="secondary"
              showArrow={false}
              className="
                w-fit
                shrink-0
                px-5
                py-2.5
              "
            >
              Show me the vibe
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}