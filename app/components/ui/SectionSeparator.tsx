// components/ui/SectionSeparator.tsx

import { DotPattern } from "@/app/components/magicui/dot-pattern";
import { cn } from "@/app/lib/utils";

export default function SectionSeparator() {
  return (
    <div className="relative flex h-32 w-full items-center justify-center my-8 lg:my-16">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "fill-neutral-400/20", // Neutral dots for universal compatibility
          "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        )}
        // Use transparent background to blend with any page theme
        backgroundColor="transparent"
      />
    </div>
  );
}
