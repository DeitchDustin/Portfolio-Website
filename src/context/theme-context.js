import { createContext, useContext, useReducer, useEffect } from 'react';
import themeReducer from './themeReducer';

export const ThemeContext = createContext();

const initialThemeState = JSON.parse(localStorage.getItem('themeSettings')) || {primary: 'color-1', background: 'bg-1'}

export const ThemeProvider = ({children}) => {
  const [themeState, dispatcheTheme] = useReducer(themeReducer, initialThemeState)

  const themeHandler = (buttonClassName) => {
    dispatcheTheme({type: buttonClassName})
  }

  // Save Theme Settings to local storage
  useEffect(() => {
    localStorage.setItem('themeSettings', JSON.stringify(themeState))
  }, [themeState.primary, themeState.background])

  return <ThemeContext.Provider value={{themeState, themeHandler}}>{children}</ThemeContext.Provider>
}

// custom hook to use our theme context whenever I want in our object

export const useThemeContext = () => {
  return useContext(ThemeContext)
}

