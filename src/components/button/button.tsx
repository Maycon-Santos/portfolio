import React, { PropsWithChildren } from 'react'
import classNames from 'classnames'
import Text from '@/components/text'
import styles from './button.module.css'

interface ButtonProps extends PropsWithChildren {
    Component?: React.FC<any> | string
    className?: string
    color?: 'foreground' | 'cyan'
    size?: 'small' | 'medium' | 'large'
    [k: string]: any
}

const Button: React.FC<ButtonProps> = props => {
    const {
        Component = 'button',
        children,
        className,
        color = 'foreground',
        size = 'medium',
        ...rest
    } = props

    return (
        <Component
            className={classNames(
                styles.button,
                styles[`color-${color}`],
                styles[`size-${size}`],
                className
            )}
            {...rest}
        >
            <Text weight="bold" color="inverse" lineDistance="close">{children}</Text>
        </Component>
    )
}

export default Button
