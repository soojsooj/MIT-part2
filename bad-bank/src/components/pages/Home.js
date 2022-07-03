import React, { useContext } from 'react'
import { UserContext } from '../../context/BankContext'
import CardElement from '../cards/CardElement'


const Home = () => {
  return (
    <div>
        <CardElement />
        <h3>Welcome to Bad Bank</h3> 
    </div>
  )
}

export default Home