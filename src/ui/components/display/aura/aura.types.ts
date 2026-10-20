import type { SizeType } from '@/types';

export type AuraVariantType = 'rainbow' | 'holo' | 'dual' | 'silver' | 'gold';

export interface AuraType {
  /** Wrapped element (e.g., Card, Button, Badge, Alert) */
  children: React.ReactNode;
  /** Aura visual preset variant */
  variant?: AuraVariantType;
  /** Size of the aura border padding */
  size?: SizeType;
  /** Whether to enable the outer aura glow effect */
  glow?: boolean;
  /** Custom CSS classes */
  className?: string;
}
