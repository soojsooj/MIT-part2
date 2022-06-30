import React, { useContext } from 'react'
import CardElement, { UserContext } from '../context/UserContext'
import NavbarElements from './navbar/NavbarElements';


const Deposit = () => {
    const user = useContext(UserContext);
  return (
    <div>
        <h3>Deposit</h3>
        {JSON.stringify(user)}
    </div>
  )
}

export default Deposit