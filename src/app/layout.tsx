import './globals.css'
import { Montserrat } from 'next/font/google'
import classNames from 'classnames'
import { Metadata } from 'next'
import React, { PropsWithChildren } from 'react'
import { BreakpointsProvider } from '@/components/breakpoints/breakpoints'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

const RootLayout: React.FC<PropsWithChildren> = props => {
  const { children } = props

  return (
    <BreakpointsProvider>
      <html lang="pt">
        <body className={classNames(montserrat.className, 'dark-mode')}>{children}</body>
      </html>
    </BreakpointsProvider>
  )
}

export default RootLayout
