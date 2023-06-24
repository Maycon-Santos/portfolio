'use client'

import { useState } from 'react'
import { breakpointMatches, useBreakpoints } from '@/components/breakpoints'
import MobileHeader from '@/components/mobile-header'
import SidebarProfile from '@/components/sidebar-profile'
import Banner from '@/components/banner'
import Section from '@/components/section'
import Navbar from '@/components/navbar'
import SkillCards from '@/components/skill-cards/skill-cards'
import Projects from '@/components/projects/projects'
import styles from './page.module.css'

export default function Home() {
  const breakpoints = useBreakpoints()
  const [sideBarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <MobileHeader
        sideBarOpen={sideBarOpen}
        onClickSidebarButton={() => setSidebarOpen(!sideBarOpen)}
      />
      <main className={styles.main}>
        <SidebarProfile open={sideBarOpen} />
        <article className={styles.article}>
          <Section
            contentLateralPadding={breakpointMatches(breakpoints, {
              min: 'none',
              large: 'medium',
            })}
            contentVerticalPadding="none"
          >
            <Banner />
          </Section>
          <Section
            title="Minhas skills"
            subtitle="Aqui eu listo algumas tecnologias na qual tive contato ao longo da
              minha carreira."
            contentLateralPadding={breakpointMatches(breakpoints, {
              min: 'none',
              medium: 'medium',
            })}
          >
            <SkillCards />
          </Section>
          <Section
            title="Projetos"
            subtitle="Abaixo estão alguns dos projetos que considero interessantes e desafiadores."
          >
            <Projects />
          </Section>
        </article>
        <Navbar />
      </main>
    </>
  )
}
