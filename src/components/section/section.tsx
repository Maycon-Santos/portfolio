import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import { breakpointMatches, useBreakpoints } from '../breakpoints'
import styles from './section.module.css'

interface SectionProps extends PropsWithChildren {
  Component?: React.FC<any> | string
  className?: string
  lateralPadding?: 'none' | 'medium'
  verticalPadding?: 'none' | 'medium'
}

const Section: React.FC<SectionProps> = (props) => {
  const {
    children,
    className,
    Component = 'section',
    lateralPadding = 'medium',
    verticalPadding = 'medium',
  } = props
  const breakpoints = useBreakpoints()

  return (
    <Component
      className={classNames(
        styles.section,
        styles[`lateral-padding-${lateralPadding}`],
        styles[`vertical-padding-${verticalPadding}`],
        {
          [styles.large]: breakpointMatches(breakpoints, {
            min: false,
            large: true,
          }),
        },
        className,
      )}
    >
      {children}
    </Component>
  )
}

export default Section
