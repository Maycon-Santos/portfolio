import React, { PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './text.module.css'

interface TextProps extends PropsWithChildren {
  Component?: React.FC<any> | string
  className?: string
  size?:
    | 'tiny'
    | 'small'
    | 'medium'
    | 'large'
    | 'extra-large'
    | 'giant'
    | 'extra-giant'
  weight?:
    | 'thin'
    | 'extra'
    | 'light'
    | 'regular'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extra-bold'
    | 'black'
  style?: 'oblique' | 'italic' | 'normal'
  lineDistance?: 'close' | 'near' | 'normal' | 'far'
  color?: 'normal' | 'inverse' | ''
  [k: string]: any
}

const Text: React.FC<TextProps> = (props) => {
  const {
    Component = 'span',
    weight = 'regular',
    style = 'normal',
    size = 'medium',
    lineDistance = 'normal',
    color,
    className,
    children,
    ...rest
  } = props

  return (
    <Component
      className={classNames(
        styles.text,
        styles[`size-${size}`],
        styles[`weight-${weight}`],
        styles[`style-${style}`],
        styles[`color-${color}`],
        styles[`line-distance-${lineDistance}`],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Text
