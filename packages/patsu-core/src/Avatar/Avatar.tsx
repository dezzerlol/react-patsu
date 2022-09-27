import React, { HTMLAttributes } from 'react'
import styles from './styles.module.css'
import cn from 'classnames'

export interface AvatarProps extends HTMLAttributes<HTMLImageElement> {
  /** Avatar source */
  src?: string

  /** Avatar alt */
  alt?: string

  /** Avatar radius */
  radius?: 'circle' | 'rounded' | 'square'

  /** Avatar size */
  size?: 'sm' | 'md' | 'lg'
}

/** Avatar component */
export const Avatar = ({
  src = '../defaultavatar.jpg',
  alt = 'Avatar',
  radius = 'circle',
  size = 'md',
  ...props
}: AvatarProps) => {
  let classAvatar = cn(styles.avatar, styles[radius])

  let classAvatarRoot = cn(styles.avatar_root, styles[size])

  return (
    <div className={classAvatarRoot}>
      <img src={src} className={classAvatar} alt={alt} {...props} />
    </div>
  )
}
