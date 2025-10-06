// components/magicui/dot-pattern.tsx (VERSIÓN MEJORADA)

import { cn } from "@/app/lib/utils";
import { useId } from "react";

interface DotPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
  // 👇 1. AÑADIMOS UNA NUEVA PROP PARA EL COLOR DE FONDO
  backgroundColor?: string;
  [key: string]: any;
}

export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  backgroundColor, // <-- 2. Recibimos la nueva prop
  ...props
}: DotPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-neutral-700/50", // El color de los puntos
        className,
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
          <circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      
      {/* 
        👇 3. RECTÁNGULO DE FONDO
        Añadimos un nuevo rectángulo que actúa como fondo sólido.
        Solo se renderiza si se proporciona la prop `backgroundColor`.
      */}
      {backgroundColor && (
        <rect width="100%" height="100%" fill={backgroundColor} />
      )}

      {/* Este es el rectángulo que dibuja el patrón de puntos encima del fondo */}
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}

export default DotPattern;