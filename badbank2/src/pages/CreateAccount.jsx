import React, { useContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useBankContext } from '../context/BankContext'
import { Card } from '../context/CardContext'
import { useNavigate } from 'react-router-dom'

const CreateAccount = ({updateUser}) => {
  const [show, setShow]         = useState(true);
  const [status, setStatus]     = useState('');
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const { bank, addUser } = useBankContext();

//Event: validate, handleCreate, clearForm, navigate
  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    } 
    return true;
  }

  function handleCreate(userInfo){
    console.log(name,email,password);
    if (!validate(name,'Please enter your name'))return;
    if (!validate(email,'Please enter your email address'))return;
    if (!validate(password,'Please enter your password'))return;
    const user = {name, email, password, balance: 100}
    updateUser(user)
    setShow(false);
  }

  //reset the values of name, email, and password
  function clearForm(){
    // const user = {name:'', email: '', password: '', balance: 0}
    // updateUser(user)
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);//show for the first form. 
  }

  //after creaating account, navigate to the Home page.
  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate('/login');
  }

  return (
    <Container>
      <Card
        txtcolor="black"
        // label="Create Account"
        // handleCreate={handleCreate}
        header="I'M NEW HERE"
        status={status}
        body={show ? (
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-dark" onClick={handleCreate}>Submit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-dark" onClick={clearForm}>Add another account</button>
              <br/>
              <br/>
              <button type="submit" className="btn btn-dark" onClick={gotoLogin}>Go to Login</button>
              </>
            )}
      />
    </Container>
  )
}

export default CreateAccount