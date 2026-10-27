import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Table from './table.component';

describe('<Table />', () => {
  const columns = [
    { key: 'name', header: 'Name' },
    { key: 'role', header: 'Role' },
    {
      key: 'actions',
      header: 'Actions',
      render: (row: { name: string }) => <button>Edit {row.name}</button>
    }
  ];

  const data = [
    { name: 'Alice', role: 'Developer' },
    { name: 'Bob', role: 'Designer' }
  ];

  it('renders table headers and rows correctly', () => {
    const { container } = render(
      <Table columns={columns} data={data} compact />
    );
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Role')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Developer')).toBeInTheDocument();
    expect(screen.getByText('Edit Alice')).toBeInTheDocument();
    expect(container.querySelector('table')).toHaveClass(
      'table-zebra',
      'table-xs'
    );
    expect(container.querySelector('tbody tr')).toHaveClass('row-hover');
  });

  it('applies size, pinRows and pinCols classes', () => {
    const { container } = render(
      <Table
        columns={columns}
        data={data}
        size='lg'
        pinRows
        pinCols
        hover={false}
      />
    );
    expect(container.querySelector('table')).toHaveClass(
      'table-lg',
      'table-pin-rows',
      'table-pin-cols'
    );
    expect(container.querySelector('tbody tr')).not.toHaveClass('row-hover');
  });
});
