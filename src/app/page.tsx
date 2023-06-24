'use client'

import { useState } from 'react'
import { breakpointMatches, useBreakpoints } from '@/components/breakpoints'
import Header from '@/components/header'
import SidebarProfile from '@/components/sidebar-profile'
import Banner from '@/components/banner'
import Section from '@/components/section'
import Navbar from '@/components/navbar'
import SkillCards from '@/components/skill-cards/skill-cards'
import Projects from '@/components/projects/projects'
import Experiences from '@/components/experiences/experiences'
import Social from '@/components/social/social'
import Footer from '@/components/footer/footer'
import styles from './page.module.css'

export default function Home() {
  const breakpoints = useBreakpoints()
  const [sideBarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <Header
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
          <Section
            title="Minhas experiências"
            subtitle="Aqui eu listo as empresas que trabalhei em tempo integral e descrevo minha experiência em cada uma delas."
          >
            <Experiences />
          </Section>
          <Section title="Onde me encontrar">
            <Social />
          </Section>
        </article>
        <Navbar />
      </main>
      <Footer />
    </>
  )
}
