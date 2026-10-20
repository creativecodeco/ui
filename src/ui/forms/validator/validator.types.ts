export interface ValidatorType {
  /** Input or form control to validate */
  children: React.ReactNode;
  /** Validation hint or error message shown when invalid */
  hint?: React.ReactNode;
  /** Explicitly mark the validator container as invalid */
  invalid?: boolean;
  /** Custom CSS classes */
  className?: string;
}
