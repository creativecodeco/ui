import type { ColorType } from '@/types';
import type { IconType } from 'react-icons';

export type AlertVariantType = 'soft' | 'outline' | 'dash';

export interface AlertType {
  children: React.ReactNode;
  status?: Extract<ColorType, 'info' | 'success' | 'warning' | 'error'>;
  variant?: AlertVariantType;
  vertical?: boolean;
  title?: React.ReactNode;
  icon?: IconType;
  onClose?: () => void;
  className?: string;
}
