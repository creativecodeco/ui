import type { SizeType } from '@/types';

export interface ModalType {
  isOpen: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
  actions?: React.ReactNode;
  size?: SizeType;
  closeOnBackdropClick?: boolean;
}
