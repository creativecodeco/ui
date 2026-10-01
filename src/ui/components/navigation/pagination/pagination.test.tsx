import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Pagination from './pagination.component';

describe('<Pagination />', () => {
  it('renders all page numbers and controls', () => {
    const handlePageChange = jest.fn();
    render(
      <Pagination
        currentPage={2}
        totalPages={4}
        onPageChange={handlePageChange}
      />
    );
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('handles page navigation click', () => {
    const handlePageChange = jest.fn();
    render(
      <Pagination
        currentPage={1}
        totalPages={3}
        onPageChange={handlePageChange}
      />
    );
    fireEvent.click(screen.getByText('2'));
    expect(handlePageChange).toHaveBeenCalledWith(2);
  });

  it('disables previous button on first page', () => {
    const handlePageChange = jest.fn();
    render(
      <Pagination
        currentPage={1}
        totalPages={3}
        onPageChange={handlePageChange}
      />
    );
    expect(screen.getByLabelText('Previous page')).toBeDisabled();
  });
});
