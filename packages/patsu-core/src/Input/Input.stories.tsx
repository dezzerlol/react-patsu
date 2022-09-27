import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Input, InputProps } from '@patsu/core/src'
/* import { FiAlertCircle } from 'react-icons/fi' */

const meta: Meta = {
  title: 'Input',
  component: Input,
  argTypes: {
    onChange: { action: 'changed' },
    variant: {
      options: ['default', 'filled', 'unstyled'],
      control: { type: 'radio' },
    },
  },
  
}

export default meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Default = Template.bind({})

Default.args = {
  placeholder: 'Default input',
  variant: 'default',
}

export const Filled = Template.bind({})

Filled.args = {
  placeholder: 'Filled input',
  variant: 'filled',
}

export const Unstyled = Template.bind({})

Unstyled.args = {
  placeholder: 'Unstyled input',
  variant: 'unstyled',
}
