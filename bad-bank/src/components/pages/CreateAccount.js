import React, { useContext, useState } from 'react'

import { Form, Button, Container } from 'react-bootstrap'

const CreateAccount = ({setAuthenticate}) => {
    
    
    const createUsersAccount = (event) => {
      event.preventDefault();
      setAuthenticate(true);
      alert('Successfully created account')
    }
    return (
      <div className='myform'>
        <Container>
          <h3>CREATE ACCOUNT</h3>
          <Form className='submitform' onSubmit={(event)=> createUsersAccount(event)}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Creat Account
              </Button>
          </Form>
        </Container>
        </div>
    )
}

export default CreateAccount 