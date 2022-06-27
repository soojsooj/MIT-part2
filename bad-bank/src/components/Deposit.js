import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

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