import * as React from "react";
import { cn } from "@/lib/utils";

type CarouselDotsProps = {
  total: number;
  current: number;
  onDotClick?: (index: number) => void;
  className?: string;
};

const CarouselDots = React.forwardRef<HTMLDivElement, CarouselDotsProps>(
  ({ total, current, onDotClick, className }, ref) => {
    return (
      <div ref={ref} className={cn("flex items-center justify-center gap-2 mt-6", className)}>
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick?.(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              index === current 
                ? "w-8 bg-primary" 
                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === current ? "true" : "false"}
          />
        ))}
      </div>
    );
  }
);

CarouselDots.displayName = "CarouselDots";

export { CarouselDots };
