import type { ColorType } from '@/types';

export interface LinkType {
  /** Link text or children */
  children?: React.ReactNode;
  /** Target URL */
  href?: string;
  /** Link target attribute (e.g., '_blank') */
  target?: string;
  /** Link rel attribute */
  rel?: string;
  /** Color variant */
  color?: ColorType | 'neutral';
  /** Show underline only on hover */
  hover?: boolean;
  /** Click callback */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  /** Custom CSS classes */
  className?: string;
}
