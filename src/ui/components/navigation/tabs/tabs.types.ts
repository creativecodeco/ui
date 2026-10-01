import type { SizeType } from '@/types';
import type { IconType } from 'react-icons';

export interface TabItem {
  id: string;
  label: React.ReactNode;
  content?: React.ReactNode;
  disabled?: boolean;
  icon?: IconType;
}

export interface TabsType {
  items: TabItem[];
  activeId?: string;
  onChange?: (id: string) => void;
  variant?: 'bordered' | 'lifted' | 'boxed';
  size?: SizeType;
}
