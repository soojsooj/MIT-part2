import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Content = () => {
    const {isDark} = useContext(ThemeContext)
  return (
    <div 
        className='content'
        style={{
            backgroundColor: isDark? 'black': 'white',
            color: isDark? 'lavender': 'black'
        }}>
        <p>Soojin, Have a nice day!</p>
    </div>
  )
}

export default Content