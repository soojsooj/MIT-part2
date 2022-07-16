import React, {useContext} from 'react'
import {Container} from 'react-bootstrap'
import { UserContext } from '../context/UserContext'
import { Card } from '../context/CardContext'

const Withdraw = () => {
  const data = useContext(UserContext);

  return (
    <Container>
      <Card 
        txtcolor='black'
        header="Withdraw"
      />
    </Container>
  )
}

export default Withdraw