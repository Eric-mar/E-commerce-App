import { createContext, useContext, useState, type ReactNode } from "react"

type themeType = {
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>
    
}

export const ThemeContext = createContext <themeType | undefined>(undefined)

export function ThemesContext({children}: {children : ReactNode}) {
    const [theme , setTheme] = useState('light')
  return (
   <ThemeContext.Provider value={{theme, setTheme}}>
    {children}
   </ThemeContext.Provider>
  )
}
export default ThemesContext

export const useTheme = ()=>{
    const context = useContext(ThemeContext)
    if(!context){
        throw new Error("useTheme must be used inside ThemesContext Provider")
    }
    return context
}