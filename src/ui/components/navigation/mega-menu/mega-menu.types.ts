import type { SizeType } from '@/types';

export interface MegaMenuLinkType {
  /** Unique identifier for the link */
  id?: React.Key;
  /** Link label */
  label: React.ReactNode;
  /** Optional description below the link */
  description?: React.ReactNode;
  /** Target URL */
  href?: string;
  /** Click callback */
  onClick?: () => void;
}

export interface MegaMenuColumnType {
  /** Unique identifier for the column */
  id?: React.Key;
  /** Column heading */
  title?: React.ReactNode;
  /** Links in the column */
  links: MegaMenuLinkType[];
}

export interface MegaMenuItemType {
  /** Unique identifier for the top-level menu item */
  id?: React.Key;
  /** Top-level trigger label */
  label: React.ReactNode;
  /** Multi-column sections displayed in the mega-menu panel */
  columns: MegaMenuColumnType[];
  /** Whether the item is marked active */
  active?: boolean;
}

export interface MegaMenuType {
  /** Top-level mega-menu items */
  items: MegaMenuItemType[];
  /** Size variant */
  size?: SizeType;
  /** Width variant of the mega-menu */
  variant?: 'default' | 'wide' | 'full';
  /** Render vertically */
  vertical?: boolean;
  /** Custom CSS classes */
  className?: string;
}
