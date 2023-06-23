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
import { profileName, profileOffice, socialData } from '@/data/profile'
import styles from './mobile-header.module.css'

type MobileHeaderProps = {
    onClickSidebarButton: () => void
    sideBarOpen: boolean
}

const MobileHeader: React.FC<MobileHeaderProps> = props => {
    const { onClickSidebarButton, sideBarOpen } = props
    const breakpoints = useBreakpoints()

    return breakpointMatches(breakpoints, { large: false }) && (
        <>
            <header className={styles.wrapper}>
                <Image
                    className={styles['profile-picture']}
                    src={profilePicture}
                    alt=""
                />
                <div className={styles['name-wrapper']}>
                    <Text size="large" weight="medium" lineDistance="near">{profileName}</Text>
                    <Text size="small" style="italic">{profileOffice}</Text>
                </div>
                {breakpointMatches(breakpoints, { medium: false }) && (
                    <button
                        className={classNames(styles['sidebar-toggle-button'], { [styles.open]: sideBarOpen })}
                        onClick={onClickSidebarButton}
                    />
                )}
                {breakpointMatches(breakpoints,{ min: false, medium: true }) && (
                    <>
                        <Socials />
                        <Button
                            className={styles['download-cv-button']}
                            Component={Link}
                            href="http://google.com"
                            target="_blank"
                        >
                            DOWNLOAD CV
                        </Button>
                    </>
                )}
            </header>
        </>
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

export default MobileHeader
