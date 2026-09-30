import cls from 'classnames';

import type { PaginationType } from '@/types';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  size = 'md'
}: PaginationType) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className='join'>
      <button
        type='button'
        className={cls('join-item btn', {
          'btn-xs': size === 'xs',
          'btn-sm': size === 'sm',
          'btn-md': size === 'md',
          'btn-lg': size === 'lg'
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
          className={cls('join-item btn', {
            'btn-active': page === currentPage,
            'btn-xs': size === 'xs',
            'btn-sm': size === 'sm',
            'btn-md': size === 'md',
            'btn-lg': size === 'lg'
          })}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        type='button'
        className={cls('join-item btn', {
          'btn-xs': size === 'xs',
          'btn-sm': size === 'sm',
          'btn-md': size === 'md',
          'btn-lg': size === 'lg'
        })}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label='Next page'
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
