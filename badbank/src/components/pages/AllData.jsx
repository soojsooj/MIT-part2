import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

const AllData = () => {
    const user = useContext(UserContext);
  return (
    <div>
    <h3>AllData</h3>
    {JSON.stringify(user)}
    </div>
  )
}

export default AllData