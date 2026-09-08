type SkillBarProps = {
  name: string;
  level: number;
  description?: string;
};

export default function SkillBar({
  name,
  level,
  description,
}: SkillBarProps) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4">
        <p className="font-medium text-slate-800">
          {name}
        </p>

        <span className="text-sm text-slate-500">
          {level}%
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/70">
        <div
          className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-pink-400
            via-rose-300
            to-violet-300
          "
          style={{
            width: `${level}%`,
          }}
        />
      </div>

      {description && (
        <p className="mt-3 text-sm leading-6 text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
}