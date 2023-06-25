import classNames from 'classnames'
import { useThemeMode } from '@/components/theme-mode'
import styles from './theme-mode-button.module.css'

const ThemeModeButton: React.FC = () => {
  const { themeMode, toggleThemeMode } = useThemeMode()
  const ariaLabel = `Mudar para o modo ${
    themeMode === 'dark' ? 'claro' : 'escuro'
  }`
  return (
    <button
      title={ariaLabel}
      className={classNames(
        styles['theme-mode-button'],
        styles[`${themeMode}-mode`],
      )}
      onClick={toggleThemeMode}
      aria-label={ariaLabel}
    />
  )
}

export default ThemeModeButton
