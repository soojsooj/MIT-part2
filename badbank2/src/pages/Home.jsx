import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
// import { UserContext } from '../context/UserContext'
import { Card } from '../context/CardContext'


const Home = () => {
  // const data = useContext(UserContext)

  return (
    <Container>
       <Card 
       //add attributes which will be passed in as props.
          txtcolor= "black"
          header="Bad Bank"
          body={(
            <>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBjhAZoYVkEoISbQkuTeN8Q_JjSpM5AkuZpg&usqp=CAU" alt="Bank Cartoon Image" />
              <p>Welcome to the Bad Bank</p>
            </>
          )} 
       />
    </Container>
  )
}

export default Home