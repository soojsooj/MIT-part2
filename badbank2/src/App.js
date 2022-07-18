import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import MyNavbar from './components/MyNavbar';
import AllData from './pages/AllData';
import CreateAccount from './pages/CreateAccount';
import Home from './pages/Home';
import Login from './pages/Login';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';
import { BankProvider } from './context/BankContext';

function App() {
  //login wo backend
  const [authenticate, setAuthenticate] = useState(false)//if true, logged in.you wanna use setAuthenticate fn in Login page. so use it as props.
  useEffect(()=>{
    console.log('logged in?', authenticate);
  }, [authenticate])

  // const [userInfo, setUserInfo] = useState({
  //       name: '', email: '', password: '', balance: 0, transactions: []
  //     })
        
  // const updateUser = (user) => {
  //   setUserInfo(user);
  // }

  // const updateBalance = (balance, transaction, amount) => {
  //   const transaction = 
  // }


  return (
      <BankProvider>
        <MyNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/deposit' element={<Deposit />} />
          <Route path='/withdraw' element={<Withdraw />} />
          <Route path='/alldata' element={<AllData />} />
          <Route path='/createaccount' element={<CreateAccount/>} />
          <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />} />
        </Routes>
      </BankProvider>
  );
}

export default App;
