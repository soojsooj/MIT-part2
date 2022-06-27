import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const CreateAccount = () => {
    const user = useContext(UserContext);
    return (
      <div>
          <h3>Create Account</h3>
          {JSON.stringify(user)}
      </div>
    )
}

export default CreateAccount