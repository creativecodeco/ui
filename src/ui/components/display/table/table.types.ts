import type { SizeType } from '@/types';

export interface TableColumn<T> {
  key: string;
  header: React.ReactNode;
  render?: (row: T, index: number) => React.ReactNode;
}

export interface TableType<
  T extends Record<string, unknown> = Record<string, unknown>
> {
  columns: TableColumn<T>[];
  data: T[];
  size?: SizeType;
  zebra?: boolean;
  compact?: boolean;
  hover?: boolean;
  pinRows?: boolean;
  pinCols?: boolean;
  className?: string;
}
