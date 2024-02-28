import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import type { AccordionOption } from '@/types';

import Accordion from './accordion.component';

const meta: Meta<typeof Accordion> = {
  title: '@creativecodeco-ui/Components/Accordion',
  component: Accordion,
  argTypes: {
    name: {
      description: 'Name',
      type: 'string'
    },
    options: {
      description: 'Items',
      table: {
        type: {
          summary: 'AccordionOption'
        }
      }
    },
    iconType: {
      description: 'Icon Type',
      type: 'string',
      options: ['arrow', 'plus'],
      control: { type: 'select' },
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'arrow' }
      }
    },
    join: {
      description: 'Join',
      type: 'boolean',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    multiple: {
      description: 'Multiple',
      type: 'boolean',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    }
  },
  args: {
    name: 'accordion-storybook',
    iconType: 'arrow',
    options: Array.from({ length: 3 }).map<AccordionOption>((_, index) => ({
      header: <>Header {index}</>,
      body: <p>Body</p>
    }))
  }
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
  args: {}
};

export const Join: Story = {
  args: {
    join: true
  }
};

export const Plus: Story = {
  args: {
    iconType: 'plus'
  }
};

export const Multiple: Story = {
  args: {
    multiple: true
  }
};
