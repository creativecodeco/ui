import type { SizeType } from '@/types';

export interface CardType {
  children?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  actions?: React.ReactNode;
  size?: SizeType;
  compact?: boolean;
  bordered?: boolean;
  dash?: boolean;
  side?: boolean;
  imageFull?: boolean;
  glass?: boolean;
  className?: string;
}
