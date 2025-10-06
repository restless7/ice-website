// components/magicui/background-cells.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/app/lib/utils";

// --- Subcomponente Pattern ---
// Este es un componente interno, así que lo mantenemos en el mismo archivo.
interface PatternProps {
  className?: string;
  cellClassName?: string;
}

// Cell component to avoid hooks in callbacks
interface CellProps {
  rowIdx: number;
  colIdx: number;
  clickedCell: [number, number] | null;
  cellClassName?: string;
  onClick: (row: number, col: number) => void;
}

const Cell = ({ rowIdx, colIdx, clickedCell, cellClassName, onClick }: CellProps) => {
  const controls = useAnimation();

  useEffect(() => {
    if (clickedCell) {
      const distance = Math.sqrt(
        Math.pow(clickedCell[0] - rowIdx, 2) +
          Math.pow(clickedCell[1] - colIdx, 2)
      );
      controls.start({
        opacity: [0, 1 - distance * 0.1, 0],
        transition: { duration: distance * 0.2 },
      });
    }
  }, [clickedCell, colIdx, rowIdx, controls]);

  return (
    <div
      key={`matrix-col-${colIdx}`}
      className={cn(
        "bg-transparent border-l border-b border-neutral-600",
        cellClassName
      )}
      onClick={() => onClick(rowIdx, colIdx)}
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileHover={{
          opacity: [0, 1, 0.5],
        }}
        transition={{
          duration: 0.5,
          ease: "backOut",
        }}
        animate={controls}
        className="bg-sky-500/30 h-12 w-12"
      />
    </div>
  );
};

const Pattern = ({ className, cellClassName }: PatternProps) => {
  // Ajustamos el número de celdas para que cubra la pantalla de forma más flexible
  const x = new Array(47).fill(0);
  const y = new Array(30).fill(0);
  const matrix = x.map((_, i) => y.map((_, j) => [i, j]));
  const [clickedCell, setClickedCell] = useState<[number, number] | null>(null);

  const handleCellClick = (row: number, col: number) => {
    setClickedCell([row, col]);
  };

  return (
    <div className={cn("flex flex-row relative z-30", className)}>
      {matrix.map((row, rowIdx) => (
        <div
          key={`matrix-row-${rowIdx}`}
          className="flex flex-col relative z-20 border-b"
        >
          {row.map((column, colIdx) => (
            <Cell
              key={`matrix-col-${colIdx}`}
              rowIdx={rowIdx}
              colIdx={colIdx}
              clickedCell={clickedCell}
              cellClassName={cellClassName}
              onClick={handleCellClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
};


// --- Subcomponente BackgroundCellCore ---
const BackgroundCellCore = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const ref = useRef<HTMLDivElement>(null);
  
    const handleMouseMove = (event: React.MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };
  
    const size = 300;
    return (
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className="h-full absolute inset-0"
      >
        <div className="absolute h-full inset-y-0 overflow-hidden">
          <div className="absolute h-full w-full pointer-events-none -bottom-2 z-40 bg-background [mask-image:linear-gradient(to_bottom,transparent,black)]" />
          <div
            className="absolute inset-0 z-20 bg-transparent"
            style={{
              maskImage: `radial-gradient(${size / 4}px circle at center, white, transparent)`,
              WebkitMaskImage: `radial-gradient(${size / 4}px circle at center, white, transparent)`,
              WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
                mousePosition.y - size / 2
              }px`,
              WebkitMaskSize: `${size}px`,
              maskSize: `${size}px`,
              pointerEvents: "none",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
            }}
          >
            <Pattern cellClassName="border-blue-600 relative z-[100]" />
          </div>
          <Pattern className="opacity-[0.5]" cellClassName="border-neutral-700" />
        </div>
      </div>
    );
};

// --- Componente Principal Exportado (MODIFICADO) ---
interface BackgroundCellsProps {
    // Ya no necesitamos 'children'
    className?: string;
}
  
export const BackgroundCells = ({ className }: BackgroundCellsProps) => {
    // El componente ahora es mucho más simple.
    // Es solo un div que contiene el efecto visual.
    // Ya no se preocupa por los hijos ni por el overflow.
    return (
      <div className={cn("h-full w-full", className)}>
        <BackgroundCellCore />
      </div>
    );
};