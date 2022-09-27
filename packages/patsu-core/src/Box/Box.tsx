import cn from 'classnames'
import React, { HTMLAttributes } from 'react'
import styles from './styles.module.css'

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  /** Box children */
  children: React.ReactNode

  /** Root element. Can be div, span, a, etc. */
  Component?: React.ElementType

  /** Add styles to root element */
  css: { [key: string]: string }
}

/** Div component */
export const Box = ({ children, Component = 'div', css, ...props }: BoxProps) => {
  let classBox = cn(styles.box)

  return (
    <Component className={classBox} {...props} css={css}>
      {children}
    </Component>
  )
}
