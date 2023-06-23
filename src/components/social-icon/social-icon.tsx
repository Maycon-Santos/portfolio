import React from 'react'
import Link from 'next/link'
import { UrlObject } from 'url'
import Image, { ImageProps } from 'next/image'
import styles from './social-icon.module.css'
import classNames from 'classnames'

type SocialIconProps = {
    name: string
    icon: ImageProps['src']
    link: string | UrlObject
    size?: 'small' | 'medium'
    className?: string
}

const SocialIcon: React.FC<SocialIconProps> = props => {
    const { name, icon, link, size = 'medium', className } = props

    return (
        <Link
            href={link}
            target="_blank"
            title={name}
            className={classNames(styles.wrapper, styles[size], className)}
        >
            <Image className={styles[`icon-${size}`]} src={icon} alt={name} />
        </Link>
    )
}

export default SocialIcon
