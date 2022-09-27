import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Loader, LoaderProps } from '@patsu/core/src'
/* import { FiAlertCircle } from 'react-icons/fi' */

const meta: Meta = {
  title: 'Loader',
  component: Loader,

  argTypes: {
    variant: {
      options: ['spinner', 'dots'],
      control: { type: 'radio' },
    },
  },
}

export default meta

const Template: Story<LoaderProps> = (args) => <Loader {...args} />

export const Spinner = Template.bind({})

export const Dots = Template.bind({})

Spinner.args = {
  variant: 'spinner'
}

Dots.args = {
  variant: 'dots'
}
