import React, {useContext} from 'react'
import {Container} from 'react-bootstrap'
import { UserContext } from '../context/UserContext'
import { Card } from '../context/CardContext'


const Deposit = () => {
  const data = useContext(UserContext);

  return (
    <Container>
      <Card 
        txtcolor='black'
        header="Deposit"
      />
    </Container>
  )
}

export default Deposit