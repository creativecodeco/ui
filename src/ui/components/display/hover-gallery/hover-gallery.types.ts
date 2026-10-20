export interface HoverGalleryImageType {
  /** Unique identifier for the image */
  id?: React.Key;
  /** Image source URL */
  src: string;
  /** Accessible alt text */
  alt: string;
}

export interface HoverGalleryType {
  /** Array of images to display in the hover gallery (up to 10) */
  images: HoverGalleryImageType[];
  /** Custom CSS classes */
  className?: string;
}
