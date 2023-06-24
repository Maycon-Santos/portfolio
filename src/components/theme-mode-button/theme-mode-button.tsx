import classNames from 'classnames'
import { useThemeMode } from '@/components/theme-mode'
import styles from './theme-mode-button.module.css'

const ThemeModeButton: React.FC = () => {
  const { themeMode, toggleThemeMode } = useThemeMode()

  return (
    <button
      title="Mudar tema claro/escuro"
      className={classNames(
        styles['theme-mode-button'],
        styles[`${themeMode}-mode`],
      )}
      onClick={toggleThemeMode}
    />
  )
}

export default ThemeModeButton
