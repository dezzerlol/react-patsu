import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Box, BoxProps } from '@patsu/core/src'

const meta: Meta = {
  title: 'Box',
  component: Box,
  argTypes: {
    children: {
      defaultValue: 'Box',
    },
  },
}

export default meta

const Template: Story<BoxProps> = (args) => <Box {...args} />

export const Default = Template.bind({})

Default.args = {
  Component: 'div',
  css: {
    color: 'red',
    backgroundColor: 'lightgray',
  },
}
