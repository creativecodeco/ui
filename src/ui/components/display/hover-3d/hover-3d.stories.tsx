import type { Meta, StoryObj } from '@storybook/react';
import Hover3D from './hover-3d.component';

const meta: Meta<typeof Hover3D> = {
  title: '@creativecodeco-ui/Display/Hover3D',
  component: Hover3D,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Hover3D>;

export const Default: Story = {
  render: () => (
    <Hover3D>
      <div className='card w-72 bg-neutral text-neutral-content rounded-box p-6 shadow-xl'>
        <h3 className='text-lg font-bold'>Interactive 3D Card</h3>
        <p className='text-sm opacity-80 mt-2'>
          Move your cursor across the card to inspect the 3D tilt and shine
          effect.
        </p>
      </div>
    </Hover3D>
  )
};
