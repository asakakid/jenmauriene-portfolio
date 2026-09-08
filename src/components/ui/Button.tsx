import {
  ArrowUpRight,
  Sparkle,
} from "lucide-react";

import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type CommonProps = {
  children: ReactNode;
  showArrow?: boolean;
  className?: string;
  variant?: "primary" | "secondary";
};

type LinkButtonProps = CommonProps & {
  href: string;
  type?: never;
  disabled?: never;
};

type NativeButtonProps = CommonProps & {
  href?: never;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
};

type ButtonProps =
  | LinkButtonProps
  | NativeButtonProps;

export default function Button({
  children,
  showArrow = true,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const baseClassName =
    variant === "secondary"
      ? `
          group
          relative
          inline-flex
          items-center
          justify-center
          gap-2.5
          overflow-hidden
          rounded-full
          border
          border-white/90
          bg-white/55
          px-5
          py-2
          text-sm
          font-medium
          text-[#29232d]
          shadow-[0_8px_24px_rgba(93,68,84,0.07)]
          backdrop-blur-xl
          transition-all
          duration-300
          ease-out
          hover:-translate-y-0.5
          hover:border-[#b9a7ee]/50
          hover:bg-white/75
          hover:shadow-[0_12px_30px_rgba(185,167,238,0.18)]
          active:translate-y-0
          disabled:cursor-not-allowed
          disabled:opacity-60
          disabled:hover:translate-y-0
          ${className}
        `
      : `
          group
          relative
          inline-flex
          items-center
          justify-center
          gap-2
          overflow-hidden
          rounded-full
          border
          border-[#d96c9b]
          bg-white/40
          px-4
          py-2
          text-sm
          font-medium
          backdrop-blur-md
          transition-all
          duration-300
          ease-out
          hover:-translate-y-0.5
          hover:shadow-[0_10px_24px_rgba(217,108,155,0.20)]
          active:translate-y-0
          disabled:cursor-not-allowed
          disabled:opacity-60
          disabled:hover:translate-y-0
          ${className}
        `;

  const content =
    variant === "secondary" ? (
      <>
        <span
          aria-hidden="true"
          className="
            absolute
            -left-8
            top-1/2
            h-16
            w-16
            -translate-y-1/2
            rounded-full
            bg-[#efa6c1]/0
            blur-2xl
            transition-all
            duration-500
            group-hover:bg-[#efa6c1]/35
          "
        />

        <Sparkle
          size={14}
          className="
            relative
            z-10
            text-[#d96c9b]
            transition-transform
            duration-300
            ease-out
            group-hover:rotate-12
            group-hover:scale-110
          "
        />

        <span className="relative z-10">
          {children}
        </span>

        {showArrow && (
          <ArrowUpRight
            size={15}
            className="
              relative
              z-10
              text-[#7d707a]
              transition-all
              duration-300
              ease-out
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
              group-hover:text-[#d96c9b]
            "
          />
        )}
      </>
    ) : (
      <>
        <span
          aria-hidden="true"
          className="
            absolute
            inset-y-0
            left-0
            w-0
            bg-[#d96c9b]
            transition-[width]
            duration-500
            ease-out
            group-hover:w-full
          "
        />

        <span
          className="
            relative
            z-10
            text-[#d96c9b]
            transition-colors
            duration-300
            group-hover:text-white
          "
        >
          {children}
        </span>

        {showArrow && (
          <ArrowUpRight
            size={15}
            className="
              relative
              z-10
              text-[#d96c9b]
              transition-all
              duration-300
              ease-out
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
              group-hover:text-white
            "
          />
        )}
      </>
    );

  if ("href" in props && props.href) {
    return (
      <a
        href={props.href}
        className={baseClassName}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      disabled={props.disabled}
      className={baseClassName}
    >
      {content}
    </button>
  );
}