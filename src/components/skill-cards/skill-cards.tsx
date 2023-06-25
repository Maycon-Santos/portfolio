import { useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import Text from '@/components/text'
import { breakpointMatches, useBreakpoints } from '@/components/breakpoints'
import { useThemeMode } from '@/components/theme-mode'
import Button from '@/components/button'
import { skills } from '@/data/skills'
import styles from './skill-cards.module.css'

const SkillCards: React.FC = () => {
  const [showAll, setShowAll] = useState(false)
  const breakpoints = useBreakpoints()
  const { themeMode } = useThemeMode()
  const breakpointClassNames = breakpointMatches(breakpoints, {
    small: 'breakpoint-small',
    medium: 'breakpoint-medium',
    large: 'breakpoint-large',
  })

  const skillsToShow = !breakpoints.medium
    ? skills
    : skills.slice(0, showAll ? skills.length : 6)

  return (
    <div className={styles.wrapper}>
      <div
        className={classNames(
          styles['card-list'],
          styles[breakpointClassNames],
        )}
      >
        {skillsToShow.map(({ name, description, logoImage }) => (
          <div
            className={classNames(
              styles['card-item'],
              styles[breakpointClassNames],
            )}
            key={name}
          >
            <Image src={logoImage[themeMode]} className={styles.logo} alt="" />
            <Text Component="h4" weight="bold">
              {name}
            </Text>
            <Text size="small" className={styles.description}>
              {description}
            </Text>
          </div>
        ))}
      </div>
      {breakpointMatches(breakpoints, { min: false, medium: true }) &&
        !showAll && (
          <Button
            className={styles['see-more-button']}
            color="orange"
            size="large"
            onClick={() => setShowAll(true)}
          >
            VER MAIS
          </Button>
        )}
    </div>
  )
}

export default SkillCards
