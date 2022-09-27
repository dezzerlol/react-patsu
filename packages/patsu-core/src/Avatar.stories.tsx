import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Avatar, AvatarProps } from "@patsu/core/src";

/* import { FiAlertCircle } from 'react-icons/fi' */

const meta: Meta = {
  title: 'Avatar',
  component: Avatar
}

export default meta

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />

export const Circle = Template.bind({})

export const Rounded = Template.bind({})

export const Square = Template.bind({})

Circle.args = {
  alt: 'circle',
  radius: 'circle'
}

Rounded.args = {
  alt: 'rounded',
  radius: 'rounded'
}

Square.args = {
  alt: 'square',
  radius: 'square'
}
