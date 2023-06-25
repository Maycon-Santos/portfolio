import './globals.css'
import { Montserrat } from 'next/font/google'
import classNames from 'classnames'
import { Metadata } from 'next'
import React, { PropsWithChildren } from 'react'
import { BreakpointsProvider } from '@/components/breakpoints/breakpoints'
import ThemeModeProvider from '@/components/theme-mode/theme-mode'
import { profileName } from '@/data/profile'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maycon - Desenvolvedor web full-stack',
  description:
    'Olá, eu sou o Maycon, um desenvolvedor web full-stack apaixonado por criar sites e aplicativos incríveis com as melhores tecnologias. Neste site você pode ver meu portfólio e meu contato.',
  keywords:
    'desenvolvedor web full-stack no Brasil, criação de sites e aplicativos, portfólio profissional, dicas de programação, HTML, CSS, JavaScript, React, Next.js, Node.js, MongoDB, Firebase, WordPress, SEO, marketing digital, e-commerce',
  robots: 'index, follow',
  authors: {
    name: 'Maycon Santos',
    url: 'https://www.linkedin.com/in/maycon-link/',
  },
  openGraph: {
    title: 'Maycon - Desenvolvedor web full-stack',
    description:
      'Olá, eu sou o Maycon, um desenvolvedor web full-stack apaixonado por criar sites e aplicativos incríveis com as melhores tecnologias. Neste site você pode ver meu portfólio e meu contato.',
    images: 'og-image.png',
    type: 'profile',
  },
}

const RootLayout: React.FC<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <BreakpointsProvider>
      <ThemeModeProvider>
        <html lang="pt">
          <body className={classNames(montserrat.className, 'dark-mode')}>
            {children}
          </body>
        </html>
      </ThemeModeProvider>
    </BreakpointsProvider>
  )
}

export default RootLayout
