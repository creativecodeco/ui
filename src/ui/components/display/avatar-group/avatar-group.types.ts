import type { SizeType } from '@/types';

export interface AvatarGroupItemType {
  id?: string | number;
  src?: string;
  alt?: string;
  initials?: string;
}

export interface AvatarGroupType {
  /** Array of avatar item objects */
  avatars?: AvatarGroupItemType[];
  /** Maximum number of visible avatars before showing +N counter badge */
  max?: number;
  /** Size variant for avatars */
  size?: SizeType;
  /** Custom CSS classes */
  className?: string;
}
