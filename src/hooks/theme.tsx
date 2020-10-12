import React, { createContext, useContext, useCallback, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import IThemeProps from '../interfaces/IThemeProps'

import light from '../styles/themes/light'

interface IThemeContextData {
  defaultTheme: IThemeProps
  setTheme(theme: IThemeProps): void
}

const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData)

const AppThemeProvider: React.FC = ({ children }) => {

  const [defaultTheme, setDefaultTheme] = useState<IThemeProps>(light)

  const setTheme = useCallback((theme: IThemeProps) => {
    setDefaultTheme(theme)
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        defaultTheme,
        setTheme
      }}
    >
      <ThemeProvider theme={defaultTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

function useTheme(): IThemeContextData {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within an AuthProvider')
  return context
}

export { useTheme, AppThemeProvider }