import React from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react';
//context를 쓸거기 때문에 props는 필요없음. 
const Header = () => {
    const {isDark} = useContext(ThemeContext);
  return (
    <header 
        className='header'
        style={{
            backgroundColor: isDark? 'black' : 'lavender',
            color: isDark? 'lavender' : 'black',
        }}>
        <h1>Welcome Soojin!</h1>
    </header>
  )
}

export default Header