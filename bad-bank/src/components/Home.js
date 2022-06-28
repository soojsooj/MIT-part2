import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import CardElement from '../context/UserContext'

const Home = () => {
  return (
    <div>
        <CardElement />
        <h3>Welcome to Bad Bank</h3>  
    </div>
  )
}

export default Home