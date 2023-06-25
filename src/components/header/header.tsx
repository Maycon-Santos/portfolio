'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import classNames from 'classnames'
import { useBreakpoints, breakpointMatches } from '@/components/breakpoints'
import profilePicture from '@/assets/profile.jpg'
import Text from '@/components/text'
import SocialIcon from '@/components/social-icon'
import Button from '@/components/button'
import ThemeModeButton from '@/components/theme-mode-button'
import { profileName, profileOffice, socialData } from '@/data/profile'
import styles from './header.module.css'

type HeaderProps = {
  onClickSidebarButton: () => void
  sideBarOpen: boolean
}

const Header: React.FC<HeaderProps> = (props) => {
  const { onClickSidebarButton, sideBarOpen } = props
  const breakpoints = useBreakpoints()

  return (
    breakpointMatches(breakpoints, { large: false }) && (
      <>
        <header className={styles.wrapper}>
          <div className={styles.profile}>
            <Image
              className={styles['profile-picture']}
              src={profilePicture}
              alt=""
            />
            <div className={styles['name-wrapper']}>
              <Text size="large" weight="medium" lineDistance="near">
                {profileName}
              </Text>
              <Text size="small" style="italic">
                {profileOffice}
              </Text>
            </div>
          </div>
          {breakpointMatches(breakpoints, { medium: false }) && (
            <>
              <ThemeModeButton />
              <button
                className={classNames(styles['sidebar-toggle-button'], {
                  [styles.open]: sideBarOpen,
                })}
                onClick={onClickSidebarButton}
                aria-label="Ver perfil"
              />
            </>
          )}
          {breakpointMatches(breakpoints, { min: false, medium: true }) && (
            <>
              <Socials />
              <Button
                prefetch={false}
                className={styles['download-cv-button']}
                Component="a"
                href="/curriculo.pdf"
                target="_blank"
              >
                DOWNLOAD CV
              </Button>
              <ThemeModeButton />
            </>
          )}
        </header>
      </>
    )
  )
}

const Socials: React.FC = () => {
  return (
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
  )
}

export default Header
