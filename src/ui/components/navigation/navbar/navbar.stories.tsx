import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './navbar.component';

const meta: Meta<typeof Navbar> = {
  title: '@creativecodeco-ui/Navigation/Navbar',
  component: Navbar,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    brand: 'CreativeCode UI',
    centerContent: (
      <ul className='menu menu-horizontal px-1 gap-2'>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#components'>Components</a>
        </li>
        <li>
          <a href='#documentation'>Documentation</a>
        </li>
      </ul>
    ),
    endContent: <button className='btn btn-primary btn-sm'>Get Started</button>
  }
};
