import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Filter from './filter.component';

const meta: Meta<typeof Filter> = {
  title: '@creativecodeco-ui/Form/Filter',
  component: Filter,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] }
  }
};

export default meta;
type Story = StoryObj<typeof Filter>;

const InteractiveFilter = () => {
  const [selected, setSelected] = useState('');
  return (
    <Filter
      name='frameworks'
      value={selected}
      onChange={setSelected}
      options={[
        { value: 'react', label: 'React' },
        { value: 'tailwind', label: 'Tailwind CSS' },
        { value: 'daisyui', label: 'DaisyUI' }
      ]}
    />
  );
};

export const Default: Story = {
  render: () => <InteractiveFilter />
};
