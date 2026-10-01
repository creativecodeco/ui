export interface SwapType {
  /** Content shown when swap state is ON (checked) */
  onContent: React.ReactNode;
  /** Content shown when swap state is OFF (unchecked) */
  offContent: React.ReactNode;
  /** Active / checked boolean state */
  active?: boolean;
  /** Callback fired when toggle changes */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Transition animation effect (rotate or flip) */
  effect?: 'rotate' | 'flip';
  /** Disabled state */
  disabled?: boolean;
  /** Custom CSS classes */
  className?: string;
}
