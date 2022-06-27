import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'


const Home = () => {
    const user = useContext(UserContext);
  return (
    <div>
        <h3>Home</h3>
        {JSON.stringify(user)}
    </div>
  )
}

export default Home