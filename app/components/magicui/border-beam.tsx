// components/magicui/border-beam.tsx

import { cn } from "@/app/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export const BorderBeam = ({
  className,
  size = 200,
  duration = 15,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0,
}: BorderBeamProps) => {
  return (
    <div
      style={
        {
          // 👇 1. AÑADIMOS LAS UNIDADES 👇
          "--size": `${size}px`,             // Añadimos 'px'
          "--duration": `${duration}s`,      // Añadimos 's'
          "--anchor": `${anchor}%`,          // Añadimos '%'
          "--border-width": `${borderWidth}px`, // Añadimos 'px'
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
        } as React.CSSProperties
      }
      className={cn(
        // 👇 2. SIMPLIFICAMOS LAS CLASES (eliminamos calc()) 👇
        "absolute inset-[0] rounded-[inherit] [border:var(--border-width)_solid_transparent]",

        // mask styles (se mantienen igual)
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",

        // pseudo styles (simplificados)
        "after:absolute after:aspect-square after:w-[var(--size)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[animation-duration:var(--duration)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:var(--anchor)_50%] after:[offset-path:rect(0_auto_auto_0_round_var(--size))]",
        className,
      )}
    />
  );
};