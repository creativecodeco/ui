export interface ListItemType {
  /** Unique identifier for the list row */
  id?: React.Key;
  /** Leading element (e.g., number, avatar, icon) */
  leading?: React.ReactNode;
  /** Primary title or content of the row */
  title: React.ReactNode;
  /** Secondary subtitle of the row */
  subtitle?: React.ReactNode;
  /** Wrapped description shown on the second row */
  description?: React.ReactNode;
  /** Trailing action elements (buttons, icons, badges) */
  actions?: React.ReactNode;
}

export interface ListType {
  /** Optional header text or node displayed at the top of the list */
  header?: React.ReactNode;
  /** Array of list row items */
  items?: ListItemType[];
  /** Custom children when composing rows manually */
  children?: React.ReactNode;
  /** Custom CSS classes */
  className?: string;
}
