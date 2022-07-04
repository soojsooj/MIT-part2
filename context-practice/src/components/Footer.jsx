import React, { useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Footer = () => {
    const {isDark, setIsDark} = useContext(ThemeContext)
    const toggleTheme = () => {
        setIsDark(!isDark);
    }
  return (
    <footer 
        className='footer'
        style={{
            backgroundColor: isDark? 'black' : 'lavender',
            color: isDark? 'lavender' : 'black',
        }}>
        <button onClick={toggleTheme}>
            Dark Mode
        </button>
    </footer>
  )
}

export default Footer