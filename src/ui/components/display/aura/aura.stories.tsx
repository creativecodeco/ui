import type { Meta, StoryObj } from '@storybook/react';
import Aura from './aura.component';

const meta: Meta<typeof Aura> = {
  title: '@creativecodeco-ui/Display/Aura',
  component: Aura,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['rainbow', 'holo', 'dual', 'silver', 'gold']
    },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    glow: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Aura>;

export const Default: Story = {
  args: {
    variant: 'rainbow',
    size: 'md',
    glow: true,
    children: <button className='btn'>Aura Button</button>
  }
};

export const Variants: Story = {
  render: () => (
    <div className='flex flex-wrap gap-6 p-4'>
      <Aura variant='rainbow' glow>
        <button className='btn'>Rainbow</button>
      </Aura>
      <Aura variant='holo' glow>
        <button className='btn'>Holo</button>
      </Aura>
      <Aura variant='dual' glow>
        <button className='btn'>Dual</button>
      </Aura>
      <Aura variant='silver' glow>
        <button className='btn'>Silver</button>
      </Aura>
      <Aura variant='gold' glow>
        <button className='btn'>Gold</button>
      </Aura>
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className='flex flex-wrap items-center gap-6 p-4'>
      <Aura size='xs' glow>
        <button className='btn btn-xs'>XS</button>
      </Aura>
      <Aura size='sm' glow>
        <button className='btn btn-sm'>SM</button>
      </Aura>
      <Aura size='md' glow>
        <button className='btn btn-md'>MD</button>
      </Aura>
      <Aura size='lg' glow>
        <button className='btn btn-lg'>LG</button>
      </Aura>
      <Aura size='xl' glow>
        <button className='btn btn-xl'>XL</button>
      </Aura>
    </div>
  )
};
