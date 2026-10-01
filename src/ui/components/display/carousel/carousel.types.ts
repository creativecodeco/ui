export interface CarouselItemType {
  id?: string | number;
  content?: React.ReactNode;
  src?: string;
  alt?: string;
}

export interface CarouselType {
  /** Carousel items */
  items?: CarouselItemType[];
  /** Custom children elements */
  children?: React.ReactNode;
  /** Snap position mode (center or end) */
  snap?: 'center' | 'end';
  /** Vertical scroll orientation */
  vertical?: boolean;
  /** Full width items */
  fullWidth?: boolean;
  /** Custom CSS classes */
  className?: string;
}
