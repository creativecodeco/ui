export type MaskShapeType =
  | 'squircle'
  | 'heart'
  | 'hexagon'
  | 'hexagon-2'
  | 'decagon'
  | 'pentagon'
  | 'diamond'
  | 'square'
  | 'circle'
  | 'star'
  | 'star-2'
  | 'triangle'
  | 'triangle-2'
  | 'triangle-3'
  | 'triangle-4';

export interface MaskType {
  /** Mask shape geometry */
  shape?: MaskShapeType;
  /** Image URL source */
  src?: string;
  /** Image alternative text */
  alt?: string;
  /** Custom children elements */
  children?: React.ReactNode;
  /** Custom CSS classes */
  className?: string;
}
