import type { Meta, StoryObj } from '@storybook/react';
import MegaMenu from './mega-menu.component';

const meta: Meta<typeof MegaMenu> = {
  title: '@creativecodeco-ui/Navigation/MegaMenu',
  component: MegaMenu,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'wide', 'full'] },
    vertical: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof MegaMenu>;

export const Default: Story = {
  args: {
    items: [
      {
        id: 'products',
        label: 'Products',
        columns: [
          {
            id: 'design',
            title: 'Design',
            links: [
              {
                id: 1,
                label: 'UI Components',
                description: 'Reusable React 19 building blocks'
              },
              {
                id: 2,
                label: 'Themes',
                description: 'DaisyUI v5 & Tailwind v4 tokens'
              }
            ]
          },
          {
            id: 'dev',
            title: 'Engineering',
            links: [
              {
                id: 3,
                label: 'Documentation',
                description: 'Interactive Storybook guides'
              },
              {
                id: 4,
                label: 'Visual QA',
                description: 'Automated Chromatic regression checks'
              }
            ]
          }
        ]
      }
    ]
  }
};
