import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  withWordmark = true,
  href = "/",
}: {
  className?: string;
  withWordmark?: boolean;
  href?: string | null;
}) {
  const content = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/odin-mark-light.png"
        alt="Odin"
        width={40}
        height={40}
        className="h-9 w-9 object-contain"
        priority
      />
      {withWordmark ? (
        <span className="flex flex-col leading-none">
          <span className="font-display text-xl font-bold tracking-[0.14em] text-foreground">
            ODIN
          </span>
          <span className="mt-0.5 text-[0.6rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            AI Agents for Business
          </span>
        </span>
      ) : null}
    </span>
  );

  if (href === null) return content;

  return (
    <Link href={href} aria-label="Odin — accueil" className="inline-flex">
      {content}
    </Link>
  );
}
