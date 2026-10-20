export interface FieldsetType {
  /** Legend heading of the fieldset */
  legend?: React.ReactNode;
  /** Helper or description label at the bottom of the fieldset */
  label?: React.ReactNode;
  /** Form controls inside the fieldset */
  children: React.ReactNode;
  /** Disabled state for all controls inside the fieldset */
  disabled?: boolean;
  /** Custom CSS classes */
  className?: string;
}
