export type StackPositionType = 'top' | 'bottom' | 'start' | 'end';

export interface StackType {
  /** Elements to stack along the Z-axis */
  children: React.ReactNode;
  /** Direction of the stacked offset */
  position?: StackPositionType;
  /** Custom CSS classes */
  className?: string;
}
