import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Balance = () => {
    const user = useContext(UserContext);
  return (
    <div> 
        <h3>Balance</h3>
        {JSON.stringify(user)}
    </div>
  )
}

export default Balance