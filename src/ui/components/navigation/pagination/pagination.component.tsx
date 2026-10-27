import cls from 'classnames';

import type { PaginationType } from '@/types';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  size = 'md',
  className
}: PaginationType) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label='Pagination' className={cls('join flex-wrap', className)}>
      <button
        type='button'
        className={cls('join-item btn', {
          [`btn-${size}`]: Boolean(size)
        })}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label='Previous page'
      >
        «
      </button>

      {pages.map((page) => (
        <button
          type='button'
          key={page}
          aria-label={`Page ${page}`}
          aria-current={page === currentPage ? 'page' : undefined}
          className={cls('join-item btn', {
            'btn-active': page === currentPage,
            [`btn-${size}`]: Boolean(size)
          })}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        type='button'
        className={cls('join-item btn', {
          [`btn-${size}`]: Boolean(size)
        })}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label='Next page'
      >
        »
      </button>
    </nav>
  );
};

export default Pagination;
