import cls from 'classnames';

import type { TableType } from '@/types';

const Table = <T extends Record<string, unknown>>({
  columns,
  data,
  zebra = true,
  compact,
  hover = true,
  className
}: TableType<T>) => {
  return (
    <div className='overflow-x-auto'>
      <table
        className={cls('table w-full', className, {
          'table-zebra': zebra,
          'table-compact': compact,
          'table-hover': hover
        })}
      >
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => {
            const rowKey =
              (row.id as string | number) ??
              (row.key as string | number) ??
              `row-${rowIndex}`;
            return (
              <tr key={rowKey}>
                {columns.map((col) => {
                  const cellValue = row[col.key];
                  return (
                    <td key={col.key}>
                      {col.render
                        ? col.render(row, rowIndex)
                        : (cellValue as React.ReactNode)}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
