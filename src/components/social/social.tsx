import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import Text from '@/components/text'
import SocialIcon from '@/components/social-icon'
import { useBreakpoints } from '@/components/breakpoints'
import { socialData } from '@/data/profile'
import styles from './social.module.css'

const Social: React.FC = () => {
  const breakpoints = useBreakpoints()
  const breakpointMediumClassName = breakpoints.medium
    ? 'breakpoint-medium'
    : ''

  return (
    <div className={styles.wrapper}>
      <div
        className={classNames(
          styles['social-list'],
          styles[breakpointMediumClassName],
        )}
      >
        {socialData.map(({ name, icon, link, label }) => (
          <React.Fragment key={name}>
            <div className={styles['social-item']}>
              <div>
                <SocialIcon
                  name={name}
                  link={link}
                  icon={icon}
                  size={breakpoints.medium ? 'medium' : 'small'}
                />
              </div>
              <div className={styles['social-item-content']}>
                <Text>{name}</Text>
                <Text
                  Component={Link}
                  href={link}
                  size={breakpoints.medium ? 'medium' : 'small'}
                >
                  {label || link}
                </Text>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Social
