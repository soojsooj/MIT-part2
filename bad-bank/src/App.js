import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.js'

import Home from './components/pages/Home'
import Balance from './components/pages/Balance';
import Deposit from './components/pages/Deposit'
import Withdraw from './components/pages/Withdraw'
import AllData from './components/pages/AllData'
import Login from './components/pages/Login'
import CreateAccount from './components/pages/CreateAccount'
import NotFound from './components/pages/NotFound';

import { BankProvider } from './context/BankContext';
import NavbarElements from './components/navbar/NavbarElements';



function App() { 
  return(
      <div>
        <BrowserRouter>
          <NavbarElements />
          <BankProvider value={{users: [{name: 'soojin', email: 'huh.soojin@gmail.com', password: 'asdfasdf', balance: 100}]}}>
            <Routes> 
              <Route path='/' element={<Home />} />
              <Route path="/createaccount/" element={<CreateAccount/>} />
              <Route path="/login/" element={<Login />} />
              <Route path="/deposit/" element={<Deposit/>} />
              <Route path= "/withdraw/" element={<Withdraw/>} />
              <Route path="/balance/" element={<Balance/>} />
              <Route path="/alldata/" element={<AllData/>} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
           </BankProvider>
          </BrowserRouter>
      </div>
  );
}

export default App;
