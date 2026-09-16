/** The Alastack mark: a chevron A over a baseline. Inherits currentColor. */
export function Mark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 96 104" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M8 84 L48 12 L88 84 H70 L48 44 L26 84 Z" />
      <rect x="8" y="94" width="80" height="8" rx="2" opacity="0.35" />
    </svg>
  );
}
