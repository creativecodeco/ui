import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Calendar from './calendar.component';

const meta: Meta<typeof Calendar> = {
  title: '@creativecodeco-ui/Form/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'accent',
        'info',
        'success',
        'warning',
        'error'
      ]
    }
  }
};

export default meta;
type Story = StoryObj<typeof Calendar>;

const InteractiveCalendar = () => {
  const [date, setDate] = useState('2026-10-19');
  return <Calendar value={date} onChange={setDate} color='primary' />;
};

export const Default: Story = {
  render: () => <InteractiveCalendar />
};
