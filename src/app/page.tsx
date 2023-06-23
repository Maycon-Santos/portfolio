'use client'

import { useState } from 'react'
import { breakpointMatches, useBreakpoints } from '@/components/breakpoints'
import MobileHeader from '@/components/mobile-header'
import SidebarProfile from '@/components/sidebar-profile'
import Banner from '@/components/banner'
import Text from '@/components/text'
import Section from '@/components/section'
import Navbar from '@/components/navbar'
import styles from './page.module.css'

export default function Home() {
  const breakpoints = useBreakpoints()
  const [sideBarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <MobileHeader sideBarOpen={sideBarOpen} onClickSidebarButton={() => setSidebarOpen(!sideBarOpen)} />
      <main className={styles.main}>
        <SidebarProfile open={sideBarOpen} />
        <article className={styles.article}>
          <Section
            lateralPadding={breakpointMatches(breakpoints, {
              min: 'none',
              large: 'medium'
            })}
            verticalPadding="none"
          >
            <Banner />
          </Section>
          <Section>
            <Text Component="h1" size="extra-large" weight="medium">Minhas skills</Text>
            <Text>
              Aqui eu listo algumas tecnologias na qual tive contato ao longo da minha carreira.
            </Text>
          </Section>
        </article>
        <Navbar />
      </main>
    </>
  )
}
