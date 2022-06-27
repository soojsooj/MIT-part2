import React, {useContext} from 'react'
import { UserContext } from '../context/UserContext'

const Withdraw = () => {
    const user = useContext(UserContext);
  return (
    <div>
        <h3>Withdraw</h3>
        {JSON.stringify(user)}
    </div>
  )
}

export default Withdraw