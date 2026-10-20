export interface TextRotateItemType {
  /** Unique identifier for the rotating item */
  id?: React.Key;
  /** Content to display */
  content: React.ReactNode;
  /** Optional custom class for the individual item */
  className?: string;
}

export interface TextRotateType {
  /** Array of rotating text items or strings */
  items: (string | TextRotateItemType)[];
  /** Optional animation duration CSS class (e.g. 'duration-6000') */
  durationClassName?: string;
  /** Custom CSS classes */
  className?: string;
}
