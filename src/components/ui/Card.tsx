import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  hover = true,
  gradient = false,
}: {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  gradient?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-border bg-card/70 p-6 shadow-card backdrop-blur-sm",
        gradient && "border-gradient",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow",
        className,
      )}
    >
      {children}
    </div>
  );
}
