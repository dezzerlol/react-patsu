import React, { HTMLAttributes } from 'react'
import styles from './styles.module.css'
import cn from 'classnames'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** Provide a text for button */
  children: React.ReactNode

  /** Chose button variant */
  variant?: 'primary' | 'secondary' | 'link'

  /** Show loading spinner */
  loading?: boolean

  /** Icon inside button */
  icon?: React.ReactNode

  /** Disabled button */
  disabled?: boolean
}

/** Clickable button component */
export const Button = ({ children, variant = 'primary', loading = false, disabled = false, icon, ...props }: ButtonProps) => {
  let classButton = cn(styles.button, styles[variant], {
    [styles.loading]: loading,
    [styles.disabled]: disabled,
  })

  return (
    <button {...props} className={classButton} disabled={disabled}>
      {icon && <span className={styles.button_icon}>{icon}</span>}
      <span className={styles.button_text}>{children}</span>
    </button>
  )
}
