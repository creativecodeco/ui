export interface CollapseType {
  /** Title header element or text */
  title: React.ReactNode;
  /** Collapsible content children */
  children: React.ReactNode;
  /** Open / expanded boolean state */
  open?: boolean;
  /** Callback fired on toggle change */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Indicator icon style (arrow or plus) */
  icon?: 'arrow' | 'plus';
  /** Custom CSS classes */
  className?: string;
}
