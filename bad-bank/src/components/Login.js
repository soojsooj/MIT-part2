import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap'

const Login = ({setAuthenticate}) => {
    const user = useContext(UserContext);
    const loginUser = (event) => {
      event.preventDefault();
      setAuthenticate(true);
      alert('You are succesfully logged in!')
    }
  return (
      <Container className='mylogin'>
        <h3>Login</h3>
        <Form className='submitlogin' onSubmit={(event)=> loginUser(event)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        {JSON.stringify(user)}
      </Container>
  )
}

export default Login