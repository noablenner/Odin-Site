import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

const wrap = (path: React.ReactNode) =>
  function IconComponent({ className }: IconProps) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("h-6 w-6", className)}
        aria-hidden="true"
      >
        {path}
      </svg>
    );
  };

export const icons = {
  sparkles: wrap(
    <>
      <path d="M12 3l1.8 4.6L18 9.4l-4.2 1.8L12 16l-1.8-4.8L6 9.4l4.2-1.8L12 3z" />
      <path d="M19 14l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2z" />
    </>,
  ),
  book: wrap(
    <>
      <path d="M4 5a2 2 0 012-2h12v16H6a2 2 0 00-2 2V5z" />
      <path d="M18 17H6a2 2 0 00-2 2" />
    </>,
  ),
  plug: wrap(
    <>
      <path d="M9 2v6M15 2v6" />
      <path d="M7 8h10v3a5 5 0 01-5 5 5 5 0 01-5-5V8z" />
      <path d="M12 16v6" />
    </>,
  ),
  chat: wrap(
    <>
      <path d="M21 12a8 8 0 01-11.5 7.2L4 21l1.8-5.5A8 8 0 1121 12z" />
      <path d="M8.5 11h.01M12 11h.01M15.5 11h.01" />
    </>,
  ),
  cpu: wrap(
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 9h6v6H9z" />
      <path d="M10 2v2M14 2v2M10 20v2M14 20v2M2 10h2M2 14h2M20 10h2M20 14h2" />
    </>,
  ),
  shield: wrap(
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8.3-7 9.5C8 19.3 5 15.5 5 11V6l7-3z" />
      <path d="M9.5 12l1.8 1.8L15 10" />
    </>,
  ),
  check: wrap(<path d="M5 12.5l4.5 4.5L19 7" />),
  arrow: wrap(<path d="M5 12h14M13 5l7 7-7 7" />),
  bolt: wrap(<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />),
  lock: wrap(
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 018 0v3" />
    </>,
  ),
  globe: wrap(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
    </>,
  ),
  mail: wrap(
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </>,
  ),
} as const;

export type IconName = keyof typeof icons;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Cmp = icons[name];
  return <Cmp className={className} />;
}
