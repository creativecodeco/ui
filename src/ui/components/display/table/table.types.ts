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
  zebra?: boolean;
  compact?: boolean;
  hover?: boolean;
  className?: string;
}
