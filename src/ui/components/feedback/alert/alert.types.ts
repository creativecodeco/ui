import type { ColorType } from '@/types';
import type { IconType } from 'react-icons';

export interface AlertType {
  children: React.ReactNode;
  status?: Extract<ColorType, 'info' | 'success' | 'warning' | 'error'>;
  title?: React.ReactNode;
  icon?: IconType;
  onClose?: () => void;
}
