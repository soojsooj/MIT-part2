import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { UserContext } from '../context/UserContext'

const Content = () => {
    //useContext를 이용해서 '저 그거 필요해요!'하고 반응해준거!
    const {isDark} = useContext(ThemeContext)
    const user = useContext(UserContext);
  return ( 
    <div 
        className='content'
        style={{
            backgroundColor: isDark? 'black': 'white',
            color: isDark? 'lavender': 'black'
        }}>
        <p>{user}, Have a nice day!</p>
    </div>
  )
}

export default Content