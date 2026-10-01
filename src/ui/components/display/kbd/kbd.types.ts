import type { SizeType } from '@/types';

export interface KbdType {
  /** Keyboard key label or icon content */
  children?: React.ReactNode;
  /** Size variant */
  size?: SizeType;
  /** Custom CSS classes */
  className?: string;
}
