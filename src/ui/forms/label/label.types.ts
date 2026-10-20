export interface LabelType {
  /** Label text */
  text: React.ReactNode;
  /** Associated input element or ID */
  htmlFor?: string;
  /** Enable floating label transition when wrapping an input */
  floating?: boolean;
  /** Child input or select element */
  children?: React.ReactNode;
  /** Custom CSS classes */
  className?: string;
}
