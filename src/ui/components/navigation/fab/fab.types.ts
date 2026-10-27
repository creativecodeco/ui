import type { ColorType } from '@/types';

export interface FabActionType {
  /** Unique identifier for the speed-dial action */
  id?: React.Key;
  /** Optional text label shown next to the action button */
  label?: React.ReactNode;
  /** Icon or button content */
  icon: React.ReactNode;
  /** Optional click handler */
  onClick?: () => void;
  /** Optional color variant for the action button */
  color?: ColorType;
}

export interface FabType {
  /** Primary icon shown on the FAB trigger button */
  icon?: React.ReactNode;
  /** Color variant of the main FAB button */
  color?: ColorType;
  /** Speed dial action items */
  actions?: FabActionType[];
  /** Optional main action shown when FAB opens */
  mainAction?: FabActionType;
  /** Enable flower (quarter-circle) radial layout */
  flower?: boolean;
  /** Optional close button label/icon when open */
  closeIcon?: React.ReactNode;
  /** Custom CSS classes */
  className?: string;
}
