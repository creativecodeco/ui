import type { IconType } from 'react-icons';

export interface BreadcrumbItem {
  label: React.ReactNode;
  href?: string;
  icon?: IconType;
}

export interface BreadcrumbType {
  items: BreadcrumbItem[];
}
