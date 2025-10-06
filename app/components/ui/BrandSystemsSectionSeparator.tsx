// components/ui/BrandSystemsSectionSeparator.tsx
// Page-specific section separator for Future-Proof Brand Systems with neon fuchsia celebration gradients! 🎉

import { cn } from "@/app/lib/utils";
import { useId } from "react";

interface BrandSystemsSectionSeparatorProps {
  className?: string;
}

export default function BrandSystemsSectionSeparator({ 
  className 
}: BrandSystemsSectionSeparatorProps = {}) {
  const id = useId();
  const gradientId = `brand-separator-gradient-${id}`;
  const accentGradientId = `brand-separator-accent-${id}`;

  return (
    <div className={cn("relative flex h-32 w-full items-center justify-center my-8 lg:my-16", className)}>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
      >
        <defs>
          <pattern
            id={id}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
            x={0}
            y={0}
          >
            {/* Main celebration dots with neon fuchsia gradient - BIG DOTS ONLY! */}
            <circle
              cx={1}
              cy={1}
              r={1}
              fill={`url(#${gradientId})`}
            />
          </pattern>
          
          {/* BRIGHT CELEBRATION gradients - neon fuchsia party! 🎊 */}
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff0080" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#e91e63" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#d946ef" stopOpacity="0.4" />
          </linearGradient>
          
          {/* Electric pink accent gradient - pure celebration energy! ⚡ */}
          <linearGradient id={accentGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff1493" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ff0080" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        
        {/* Render the celebration pattern! */}
        <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      </svg>
    </div>
  );
}
