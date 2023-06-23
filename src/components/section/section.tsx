import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import { breakpointMatches, useBreakpoints } from '@/components/breakpoints'
import Text from '@/components/text'
import styles from './section.module.css'

interface SectionProps extends PropsWithChildren {
  Component?: React.FC<any> | string
  className?: string
  contentLateralPadding?: 'none' | 'medium'
  contentVerticalPadding?: 'none' | 'medium'
  title?: string
  subtitle?: string
  headingLateralPadding?: string
  headingVerticalPadding?: string
}

const Section: React.FC<SectionProps> = (props) => {
  const {
    title,
    subtitle,
    children,
    className,
    Component = 'section',
    contentLateralPadding = 'medium',
    contentVerticalPadding = 'medium',
    headingLateralPadding = 'medium',
    headingVerticalPadding = 'medium',
  } = props
  const breakpoints = useBreakpoints()

  const breakpointLargeClassName = {
    [styles['breakpoint-large']]: breakpointMatches(breakpoints, {
      min: false,
      large: true,
    }),
  }

  return (
    <Component
      className={classNames(
        styles.section,
        breakpointLargeClassName,
        className,
      )}
    >
      {(title || subtitle) && (
        <div
          className={classNames(
            styles.heading,
            breakpointLargeClassName,
            styles[`lateral-padding-${headingLateralPadding}`],
            styles[`vertical-padding-${headingVerticalPadding}`],
          )}
        >
          {title && (
            <Text Component="h2" size="extra-large" weight="medium">
              {title}
            </Text>
          )}
          {subtitle && <Text Component="h3">{subtitle}</Text>}
        </div>
      )}
      <div
        className={classNames(
          styles.content,
          breakpointLargeClassName,
          styles[`lateral-padding-${contentLateralPadding}`],
          styles[`vertical-padding-${contentVerticalPadding}`],
        )}
      >
        {children}
      </div>
    </Component>
  )
}

export default Section
