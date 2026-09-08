import Container from "./Container";
import { ArrowUpRight } from "lucide-react";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 pt-4">
      <Container>
        <nav
          className="
            flex
            items-center
            justify-between
            rounded-full
            border
            border-white/80
            bg-white/65
            px-5
            py-3
            shadow-[0_10px_40px_rgba(93,68,84,0.10)]
            backdrop-blur-xl
          "
        >
          <a
            href="#home"
            className="
              font-semibold
              tracking-[-0.03em]
              text-[#29232d]
            "
          >
            AURI
            <span className="text-[#d96c9b]">.</span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-[#7d707a] md:flex">
            <a
              href="#work"
              className="
                transition
                duration-200
                hover:text-[#29232d]
              "
            >
              Work
            </a>

            <a
              href="#about"
              className="
                transition
                duration-200
                hover:text-[#29232d]
              "
            >
              About
            </a>

            <a
              href="#stack"
              className="
                transition
                duration-200
                hover:text-[#29232d]
              "
            >
              Stack
            </a>

            <a
              href="#contact"
              className="
                transition
                duration-200
                hover:text-[#29232d]
              "
            >
              Contact
            </a>
          </div>

          <Button href="#contact">
            Let&apos;s talk
          </Button>
        </nav>
      </Container>
    </header>
  );
}