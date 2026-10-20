import type { Meta, StoryObj } from '@storybook/react';
import Footer from './footer.component';

const meta: Meta<typeof Footer> = {
  title: '@creativecodeco-ui/Layout/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {
    center: { control: 'boolean' },
    horizontal: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    aside: (
      <div>
        <p className='font-bold'>CreativeCode.com.co</p>
        <p>Providing reliable design systems since 2024</p>
      </div>
    ),
    sections: [
      {
        id: 'services',
        title: 'Services',
        links: [
          { id: 1, label: 'Branding', href: '#' },
          { id: 2, label: 'Design System', href: '#' },
          { id: 3, label: 'Engineering', href: '#' }
        ]
      },
      {
        id: 'company',
        title: 'Company',
        links: [
          { id: 1, label: 'About us', href: '#' },
          { id: 2, label: 'Contact', href: '#' }
        ]
      }
    ]
  }
};

export const Centered: Story = {
  args: {
    center: true,
    aside: <p>Copyright © 2026 - All rights reserved by CreativeCode.com.co</p>
  }
};
