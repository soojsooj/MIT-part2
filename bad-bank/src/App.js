import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.js'
import AllData from './components/AllData';
import Balance from './components/Balance'
import CreateAccount from './components/CreateAccount'
import Deposit from './components/Deposit'
import Home from './components/Home'
import Withdraw from './components/Withdraw'
import Login from './components/Login'
import { UserContext } from './context/UserContext'
import NavbarElements from './components/navbar/NavbarElements';
import CardElement from './components/cards/CardElement';
import { Card } from 'react-bootstrap';


function App() { 
  const [authenticate, setAuthenticate]= useState(false);
  useEffect(() => {
    console.log("aaa", authenticate)
  }, [authenticate])
    return (
      <div>
        <BrowserRouter>
          <NavbarElements />
          <UserContext.Provider value={{users: [{name: 'soojin', email: 'huh.soojin@gmail.com', password: 'asdfasdf', balance: 100}]}}>
            <Routes> 
              <Route path='/' element={<Home />} />
              <Route path="/createaccount/" element={<CreateAccount/>} />
              <Route path="/login/" element={<Login setAuthenticate={setAuthenticate} />} />
              <Route path="/deposit/" element={<Deposit/>} />
              <Route path= "/withdraw/" element={<Withdraw/>} />
              <Route path="/balance/" element={<Balance/>} />
              <Route path="/alldata/" element={<AllData/>} />
            </Routes>
           </UserContext.Provider>
          </BrowserRouter>
      </div>
  );
}

export default App;
