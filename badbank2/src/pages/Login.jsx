import React,{ useState } from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useBankContext } from '../context/BankContext';


const Login = () => {
  const { bank, setLoggedInUser } = useBankContext();

  const [errorMessage, setErrorMessage]= useState('');
  const [successMessage, setSuccessMessage]= useState('');
  const [username, setUsername]= useState('');//capture what's typed in input. 
  const [password, setPassword]= useState('');

  //whenever input changes, handleChange is called.
  const handleChange = (event) => {
    const {name, value} = event.target;
    if (name === 'username'){
      setUsername(value)
    } else{
      setPassword(value)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrorMessage('');//clear out original error msg.

    //하늘색 username is from local state.type한 username과 bank state안의 users에 username중에 같은게 있는 지 찾는 과정. user가 일치.
    const user = bank.users.find(user => user.username === username);
    if(!user) {
      setErrorMessage('Could not find user!')
      return;
    }
    if (user.password !== password) {
      setErrorMessage('Bad password!')
      return;
    }
    //global state: setLoggedInUser
    setLoggedInUser(username);//updating global state.
    setSuccessMessage('You successfully logged in')
  }

  return (
    <div className='mylogin'>
      <Container>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputUsername" className="form-label">Username</label>
            <input 
              type="text" 
              className="form-control" 
              id="exampleInputUsername" 
              name='username'
              placeholder="Enter email"
              value={username}
              onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="exampleInputPassword"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          {errorMessage && <div className='mt-2 alert alert-danger' role='alert'>{errorMessage}</div> }
          {successMessage && <div className='mt-2 alert alert-success' role='alert'>{successMessage}</div>}
        </form>
      </Container>
    </div>
  )
}

// const Login = ({setAuthenticate}) => {
//   const navigate = useNavigate()

//   const loginUser = (event) => {
//     event.preventDefault();
//     setAuthenticate(true);
//     navigate('/')
//     alert('You are succesfully logged in.')
//   }
  // return (
  //   <div className='mylogin'>
  //   <Container>
  //     <Form onSubmit={(event)=>loginUser(event)}>
  //       <Form.Group className="mb-3" controlId="formBasicEmail">
  //         <Form.Label>Email address</Form.Label>
  //         <Form.Control type="email" placeholder="Enter email" />
  //       </Form.Group>

  //       <Form.Group className="mb-3" controlId="formBasicPassword">
  //         <Form.Label>Password</Form.Label>
  //         <Form.Control type="password" placeholder="Password" />
  //       </Form.Group>
  //       <Form.Group className="mb-3" controlId="formBasicCheckbox">
  //         <Form.Check type="checkbox" label="Keep me logged in." />
  //       </Form.Group>
  //       <Button variant="dark" type="submit">
  //         Login
  //       </Button>
  //     </Form>
  //   </Container>
  //   </div>
  // )
// }

export default Login