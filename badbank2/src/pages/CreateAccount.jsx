import React, { useContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import { UserContext } from '../context/UserContext'
import { Card } from '../context/CardContext'

const CreateAccount = () => {
  const data = useContext(UserContext);
  const [show, setShow]         = useState(true);
  const [status, setStatus]     = useState('');
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
}

function handleCreate(){
  console.log(name,email,password);
  if (!validate(name,     'name'))     return;
  if (!validate(email,    'email'))    return;
  if (!validate(password, 'password')) return;
  data.users.push({name,email,password,balance:100});
  setShow(false);
}

function clearForm(){
  setName('');
  setEmail('');
  setPassword('');
  setShow(true);
}

  return (
    <Container>
      <Card
      txtcolor="black"
      header="Create Account"
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
              </>
            )}
    />
    </Container>
  )
}

export default CreateAccount