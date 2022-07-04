import React from 'react'
//isDark가 props.

const Header = ({isDark}) => {
  return (
    <header 
        className="header"
        style={{
            backgroundColor: isDark ? 'black' : 'lightgray',
            color: isDark ? 'white' : 'black',
        }}>
        <h1>Welcome 허수진!</h1>
    </header>
  )
}

export default Header