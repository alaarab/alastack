import type { CSSProperties } from "react";

/** Sets the per-product accent as a CSS variable the card and detail styles read. */
export function accentStyle(accent?: string): CSSProperties | undefined {
  return accent ? ({ "--card-accent": accent } as CSSProperties) : undefined;
}
