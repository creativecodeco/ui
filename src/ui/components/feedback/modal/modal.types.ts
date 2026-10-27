import type { SizeType } from '@/types';

export type ModalPositionType = 'top' | 'middle' | 'bottom' | 'start' | 'end';

export interface ModalType {
  isOpen: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
  actions?: React.ReactNode;
  size?: SizeType;
  position?: ModalPositionType;
  closeOnBackdropClick?: boolean;
  className?: string;
}
