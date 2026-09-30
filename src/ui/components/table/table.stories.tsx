import type { Meta, StoryObj } from '@storybook/react';
import Table from './table.component';

const meta: Meta<typeof Table> = {
  title: '@creativecodeco-ui/Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    zebra: { control: 'boolean' },
    compact: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    zebra: true,
    columns: [
      { key: 'id', header: 'ID' },
      { key: 'name', header: 'Name' },
      { key: 'job', header: 'Job Title' },
      { key: 'company', header: 'Company' }
    ],
    data: [
      {
        id: 1,
        name: 'Cy Ganderton',
        job: 'Quality Control Specialist',
        company: 'Littel, Littel and Ziemann'
      },
      {
        id: 2,
        name: 'Hart Hagerty',
        job: 'Desktop Support Technician',
        company: 'Zemlak, Ziemann and Zamfir'
      },
      {
        id: 3,
        name: 'Brice Swyre',
        job: 'Tax Accountant',
        company: 'Carroll - Littel'
      }
    ]
  }
};
