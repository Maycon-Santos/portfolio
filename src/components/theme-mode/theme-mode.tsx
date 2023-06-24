'use client'

import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useState,
} from 'react'

export type themeMode = 'dark' | 'light'
type themeModeContextValue = {
  themeMode: themeMode
  toggleThemeMode: () => void
}

const ThemeModeContext = createContext<themeModeContextValue>({
  themeMode: 'dark',
  toggleThemeMode: () => void 0,
})

const ThemeModeProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props
  const [themeMode, setThemeMode] = useState<themeMode>('dark')

  const toggleThemeMode = useCallback(() => {
    if (themeMode === 'dark') setThemeMode('light')
    if (themeMode === 'light') setThemeMode('dark')
  }, [themeMode])

  useLayoutEffect(() => {
    const [currentMode] = document.body.className.match(/\w+(-mode)/) || ['']

    document.body.className = document.body.className.replace(
      currentMode,
      `${themeMode}-mode`,
    )
  }, [themeMode])

  return (
    <ThemeModeContext.Provider value={{ themeMode, toggleThemeMode }}>
      {children}
    </ThemeModeContext.Provider>
  )
}

export const useThemeMode = () => useContext(ThemeModeContext)

export default ThemeModeProvider
