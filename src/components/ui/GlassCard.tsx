import { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
        rounded-[28px]
        border
        border-white/70
        bg-white/45
        shadow-[0_20px_60px_rgba(66,115,150,0.12)]
        backdrop-blur-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}