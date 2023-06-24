import { breakpointMatches, useBreakpoints } from '@/components/breakpoints'
import ThemeModeButton from '@/components/theme-mode-button'
import styles from './navbar.module.css'

const Navbar: React.FC = () => {
  const breakpoints = useBreakpoints()

  return (
    breakpointMatches(breakpoints, { min: false, large: true }) && (
      <nav className={styles.wrapper}>
        <ThemeModeButton />
      </nav>
    )
  )
}

export default Navbar
