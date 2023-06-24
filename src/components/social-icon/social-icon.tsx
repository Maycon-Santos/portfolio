import React from 'react'
import Link from 'next/link'
import { UrlObject } from 'url'
import classNames from 'classnames'
import Image, { ImageProps } from 'next/image'
import { useThemeMode } from '@/components/theme-mode'
import styles from './social-icon.module.css'

type SocialIconProps = {
  name: string
  icon: {
    dark: ImageProps['src']
    light: ImageProps['src']
  }
  link: string | UrlObject
  size?: 'small' | 'medium'
  className?: string
}

const SocialIcon: React.FC<SocialIconProps> = (props) => {
  const { name, icon, link, size = 'medium', className } = props
  const { themeMode } = useThemeMode()

  return (
    <Link
      href={link}
      target="_blank"
      title={name}
      className={classNames(styles.wrapper, styles[size], className)}
    >
      <Image
        className={styles[`icon-${size}`]}
        src={icon[themeMode]}
        alt={name}
      />
    </Link>
  )
}

export default SocialIcon
