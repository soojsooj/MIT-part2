import React, { useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Footer = () => {
    //useContext를 이용해서 '저 그거 필요해요!'하고 반응해준거!
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