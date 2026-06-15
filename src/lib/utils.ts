/**
 * Minimal className combiner (no external deps).
 * Filters falsy values and joins with spaces.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Prefix a public asset path with the deploy base path.
 * Needed for unoptimized <Image> on GitHub Pages (served from /<repo>/),
 * since next/image does not apply basePath to unoptimized images.
 */
export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
