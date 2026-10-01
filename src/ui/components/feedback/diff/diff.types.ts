export interface DiffType {
  /** First element/image to compare (before) */
  item1: React.ReactNode;
  /** Second element/image to compare (after) */
  item2: React.ReactNode;
  /** Aspect ratio string (e.g., '16/9') */
  aspectRatio?: string;
  /** Custom CSS classes */
  className?: string;
}
