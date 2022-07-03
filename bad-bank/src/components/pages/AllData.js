import React from 'react'
import { useBankContext } from '../../context/BankContext'

const AllData = () => {
  //I want to pull only 'bank' property from the global state(from the Provider(bank, addUser,setLoggedInUser))
  const bank = useBankContext();

  return (
    <div>
    <h3>AllData</h3>
    {/* JSON.stringify(value, replacer, space) */}
    {JSON.stringify(bank, null, 2)}
    </div>
  )
}

export default AllData


