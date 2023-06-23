import classNames from 'classnames'
import { breakpointMatches, useBreakpoints } from '../breakpoints'
import styles from './navbar.module.css'

const Navbar: React.FC = () => {
  const breakpoints = useBreakpoints()

  return (
    breakpointMatches(breakpoints, { min: false, large: true }) && (
      <nav className={styles.wrapper}>
        <button
          title="Mudar tema claro/escuro"
          className={classNames(
            styles['theme-mode-button'],
            styles['light-mode']
          )}
        />
      </nav>
    )
  )
}

export default Navbar
