export interface JoinType {
  /** Elements to join together (buttons, inputs, select) */
  children: React.ReactNode;
  /** Vertical orientation layout */
  vertical?: boolean;
  /** Custom CSS classes */
  className?: string;
}
