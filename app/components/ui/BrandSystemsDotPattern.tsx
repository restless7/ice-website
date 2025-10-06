import { cn } from "@/app/lib/utils";

interface BrandSystemsDotPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
  backgroundColor?: string;
}

export function BrandSystemsDotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 0.5,
  cy = 0.5,
  cr = 0.5,
  className,
  backgroundColor = "transparent", // Fully transparent to blend seamlessly
  ...props
}: BrandSystemsDotPatternProps) {
  const id = `brand-dot-pattern-${Math.random().toString(36).substring(2, 9)}`;
  const gradientId = `brand-gradient-${id}`;
  const accentGradientId = `brand-accent-gradient-${id}`;

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          {/* Main dots with purple gradient */}
          <circle
            cx={cx}
            cy={cy}
            r={cr}
            fill={`url(#${gradientId})`}
          />
          {/* Subtle accent dots */}
          <circle
            cx={cx + width / 2}
            cy={cy + height / 2}
            r={cr * 0.3}
            fill={`url(#${accentGradientId})`}
            opacity="0.4"
          />
        </pattern>
        
        {/* NEON FUCHSIA gradient for main dots - celebrating our victory! 🎉 */}
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff0080" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#e91e63" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#d946ef" stopOpacity="0.3" />
        </linearGradient>
        
        {/* Electric pink accent gradient - pure celebration energy! ⚡ */}
        <linearGradient id={accentGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff1493" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ff0080" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      {/* Only render background rect if backgroundColor is not transparent */}
      {backgroundColor !== "transparent" && (
        <rect width="100%" height="100%" strokeWidth={0} fill={backgroundColor} />
      )}
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}
