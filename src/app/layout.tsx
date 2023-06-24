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
  title: profileName,
  description: '',
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
