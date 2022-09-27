import React, { HTMLAttributes } from 'react'

export interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  /** Loader size */
  size?: 'sm' | 'md' | 'lg'

  /** Loader color */
  color?: 'black' | 'red' | 'gray' | 'blue' | 'green' | 'yellow' | 'white'

  /** Loader variant */
  variant: 'spinner' | 'dots'
}

/** Loader component */
export const Loader = ({ color = 'gray', size = 'md', variant = 'spinner', ...props }: LoaderProps) => {
  const sizes = {
    sm: 20,
    md: 38,
    lg: 56
  }

  if (variant === 'dots') {
    return (
      <svg
        width={sizes[size]}
        height={sizes[size]}
        viewBox='0 0 120 30'
        xmlns='http://www.w3.org/2000/svg'
        fill={color}>
        <circle cx='15' cy='15' r='15'>
          <animate
            attributeName='r'
            from='15'
            to='15'
            begin='0s'
            dur='0.8s'
            values='15;9;15'
            calcMode='linear'
            repeatCount='indefinite'
          />
          <animate
            attributeName='fill-opacity'
            from='1'
            to='1'
            begin='0s'
            dur='0.8s'
            values='1;.5;1'
            calcMode='linear'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='60' cy='15' r='9' fill-opacity='0.3'>
          <animate
            attributeName='r'
            from='9'
            to='9'
            begin='0s'
            dur='0.8s'
            values='9;15;9'
            calcMode='linear'
            repeatCount='indefinite'
          />
          <animate
            attributeName='fill-opacity'
            from='0.5'
            to='0.5'
            begin='0s'
            dur='0.8s'
            values='.5;1;.5'
            calcMode='linear'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='105' cy='15' r='15'>
          <animate
            attributeName='r'
            from='15'
            to='15'
            begin='0s'
            dur='0.8s'
            values='15;9;15'
            calcMode='linear'
            repeatCount='indefinite'
          />
          <animate
            attributeName='fill-opacity'
            from='1'
            to='1'
            begin='0s'
            dur='0.8s'
            values='1;.5;1'
            calcMode='linear'
            repeatCount='indefinite'
          />
        </circle>
      </svg>
    )
  }

  return (
    <div {...props}>
      <svg
        width={sizes[size]}
        height={sizes[size]}
        viewBox='0 0 38 38'
        xmlns='http://www.w3.org/2000/svg'
        stroke={color}>
        <g fill='none' fill-rule='evenodd'>
          <g transform='translate(1 1)' stroke-width='2'>
            <circle stroke-opacity='.5' cx='18' cy='18' r='18' />
            <path d='M36 18c0-9.94-8.06-18-18-18'>
              <animateTransform
                attributeName='transform'
                type='rotate'
                from='0 18 18'
                to='360 18 18'
                dur='1s'
                repeatCount='indefinite'
              />
            </path>
          </g>
        </g>
      </svg>
    </div>
  )
}
