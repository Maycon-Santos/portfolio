import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
import { profileName, profileOffice, socialData } from '@/data/profile'
import profilePicture from '@/assets/profile.jpg'
import SocialIcon from '@/components/social-icon'
import Text from '@/components/text'
import { breakpointMatches, useBreakpoints } from '@/components/breakpoints'
import Divider from '@/components/divider'
import Button from '@/components/button'
import ProfilePersonalData from '@/components/profile-personal-data'
import ProfileSkills from '@/components/profile-skills'
import styles from './sidebar-profile.module.css'

type SidebarProfileProps = {
  open: boolean
}

const SidebarProfile: React.FC<SidebarProfileProps> = (props) => {
  const { open } = props
  const breakpoints = useBreakpoints()

  return (
    breakpointMatches(breakpoints, { medium: false, large: true }) && (
      <aside
        className={classNames(styles.wrapper, {
          [styles.open]: open,
          [styles.large]: breakpointMatches(breakpoints, {
            min: false,
            large: true,
          }),
        })}
      >
        <div className={styles['profile-wrapper']}>
          <Image
            className={styles['profile-picture']}
            src={profilePicture}
            alt=""
          />
          <div className={styles['name-wrapper']}>
            <Text size="extra-large" weight="medium" lineDistance="near">
              {profileName}
            </Text>
            <Text style="italic" size="small">
              {profileOffice}
            </Text>
          </div>
        </div>
        <div className={styles['social-links']}>
          {socialData.map(({ icon, link, name }) => (
            <SocialIcon
              key={name}
              name={name}
              icon={icon}
              link={link}
              size="small"
              className={styles['social-icon']}
            />
          ))}
        </div>
        <Divider />
        <ProfilePersonalData />
        <Divider />
        {breakpointMatches(breakpoints, { min: false, large: true }) && (
          <>
            <ProfileSkills />
            <Divider />
          </>
        )}
        <Button
          className={styles['download-cv-button']}
          Component={Link}
          href="http://google.com"
          target="_blank"
        >
          DOWNLOAD CV
        </Button>
      </aside>
    )
  )
}

export default SidebarProfile
