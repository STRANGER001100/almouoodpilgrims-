import { IconStar, IconStarEmpty } from "./Icons";

export function Rating({ value, size = 16 }: { value: number; size?: number }) {
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);
  return (
    <div className="flex items-center gap-0.5 text-[#e5b968]">
      {Array.from({ length: full }).map((_, i) => (
        <IconStar key={"f-" + i} width={size} height={size} />
      ))}
      {hasHalf && (
        <div className="relative" style={{ width: size, height: size }}>
          <IconStarEmpty width={size} height={size} className="absolute inset-0 text-[#e5b968]" />
          <div style={{ width: size / 2, height: size, overflow: "hidden" }} className="absolute inset-0">
            <IconStar width={size} height={size} />
          </div>
        </div>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <IconStarEmpty key={"e-" + i} width={size} height={size} className="text-[#e5b968]/40" />
      ))}
    </div>
  );
}
