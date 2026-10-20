import type { ColorType, SizeType } from '@/types';

export type StatusAnimationType = 'none' | 'ping' | 'bounce';

export interface StatusType {
  /** Color variant of the status indicator */
  color?: ColorType | 'neutral';
  /** Size variant of the status indicator */
  size?: SizeType;
  /** Animation style for the status dot */
  animate?: StatusAnimationType;
  /** Accessible label for the status indicator */
  ariaLabel?: string;
  /** Optional text displayed next to the status indicator */
  label?: React.ReactNode;
  /** Custom CSS classes */
  className?: string;
}
