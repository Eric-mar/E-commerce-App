import {useTheme } from "./themeContext"


function ThemeProvider() {
    const {theme,setTheme} = useTheme()

  return (
   <>
   <h1>Theme: {theme} </h1>
   <button onClick={()=>setTheme(theme==='light' ? 'dark' : 'light')}>theme</button>
   </>
  )
}

export default ThemeProvider