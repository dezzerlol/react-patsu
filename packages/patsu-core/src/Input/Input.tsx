import React, { HTMLAttributes } from 'react'
import styles from './styles.module.css'
import cn from 'classnames'

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  /** Chose input variant */
  variant?: 'default' | 'filled' | 'unstyled'

  /** Icon inside input */
  icon?: React.ReactNode

  /** read only input */
  readOnly?: boolean

  /** Placeholder */
  placeholder?: string

  /** Disabled input */
  disabled?: boolean
}

/** Input component */
export const Input = ({
  variant = 'default',
  icon,
  readOnly = false,
  placeholder,
  disabled = false,
  ...props
}: InputProps) => {
  let classInput = cn(styles.input, styles[variant], {
    [styles.disabled]: disabled
  })
  return (
    <span className={styles.input_wrapper}>
      {icon && <span className={styles.input_icon}>{icon}</span>}
      <input {...props} placeholder={placeholder} className={classInput} readOnly={readOnly} disabled={disabled} />
    </span>
  )
}
