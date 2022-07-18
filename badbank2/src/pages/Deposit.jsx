import React, {useContext} from 'react'
import {Container} from 'react-bootstrap'
import { UserContext } from '../context/BankContext'
import { Card } from '../context/CardContext'


const Deposit = () => {
  // const ctx = useContext(UserContext);

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