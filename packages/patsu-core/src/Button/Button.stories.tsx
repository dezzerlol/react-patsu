import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button, ButtonProps } from '@patsu/core/src'
/* import { FiAlertCircle } from 'react-icons/fi' */

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'Button',
    },

    variant: {
      options: ['primary', 'secondary', 'link'],
      control: { type: 'radio' },
    },
  },
}

export default meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})

export const Secondary = Template.bind({})

export const Link = Template.bind({})

Primary.args = {
  variant: 'primary',
}

Secondary.args = {
  variant: 'secondary',
}

Link.args = {
  variant: 'link',
}
