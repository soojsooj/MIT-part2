import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { Form, Button, Container } from 'react-bootstrap'

const CreateAccount = () => {
    const user = useContext(UserContext);
    return (
        <Container className='myform'>
          <h3>CREATE ACCOUNT</h3>
          <Form className='submitform'>
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
                Add Another Account
              </Button>
          </Form>
        </Container>
    )
}

export default CreateAccount 