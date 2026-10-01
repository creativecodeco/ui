import type { SizeType } from '@/types';

export interface MenuItemType {
  id?: string | number;
  label: React.ReactNode;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children?: MenuItemType[];
  isTitle?: boolean;
}

export interface MenuType {
  /** Menu items hierarchy */
  items: MenuItemType[];
  /** Horizontal layout orientation */
  horizontal?: boolean;
  /** Size variant */
  size?: SizeType;
  /** Custom CSS classes */
  className?: string;
}
