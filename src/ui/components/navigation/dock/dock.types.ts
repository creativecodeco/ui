import type { ColorType, SizeType } from '@/types';

export interface DockItemType {
  id?: string | number;
  label?: React.ReactNode;
  icon?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  color?: ColorType;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface DockType {
  /** Dock items list */
  items: DockItemType[];
  /** Size variant */
  size?: SizeType;
  /** Custom CSS classes */
  className?: string;
}
