import type { SizeType } from '@/types';

export interface PaginationType {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  size?: SizeType;
}
