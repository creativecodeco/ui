import type { ColorButtonType, SizeType } from '@/types';

export type ActionDropdownPositionType = 'top' | 'bottom' | 'left' | 'right';
export type ActionDropdownAlignType = 'start' | 'center' | 'end';

export interface ActionDropdownItemType {
  /** Unique identifier for the menu item */
  id?: React.Key;
  /** Item label */
  label: React.ReactNode;
  /** Optional leading icon */
  icon?: React.ReactNode;
  /** Optional click callback */
  onClick?: () => void;
  /** Disabled item state */
  disabled?: boolean;
}

export interface ActionDropdownType {
  /** Trigger button label or custom element */
  label: React.ReactNode;
  /** List of menu items */
  items?: ActionDropdownItemType[];
  /** Custom dropdown content instead of items list */
  children?: React.ReactNode;
  /** Direction in which the menu opens */
  position?: ActionDropdownPositionType;
  /** Alignment of the menu relative to trigger */
  align?: ActionDropdownAlignType;
  /** Open dropdown on hover */
  hover?: boolean;
  /** Force open state */
  open?: boolean;
  /** Trigger button color variant */
  color?: ColorButtonType;
  /** Trigger button size variant */
  size?: SizeType;
  /** Custom CSS classes */
  className?: string;
}
