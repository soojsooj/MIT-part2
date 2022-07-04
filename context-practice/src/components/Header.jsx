import React from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';


//context를 쓸거기 때문에 props는 필요없음. 
const Header = () => {
    //useContext를 이용해서 '저 그거 필요해요!'하고 반응해준거!
    const {isDark} = useContext(ThemeContext);
    const user = useContext(UserContext);
  return (
    <header 
        className='header'
        style={{
            backgroundColor: isDark? 'black' : 'lavender',
            color: isDark? 'lavender' : 'black',
        }}>
        <h1>Welcome {user}!</h1>
    </header>
  )
}

export default Header