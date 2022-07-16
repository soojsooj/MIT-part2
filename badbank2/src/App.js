import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react'
import './App.css'
import MyNavbar from './components/MyNavbar';
//pages
import AllData from './pages/AllData';
import CreateAccount from './pages/CreateAccount';
import Home from './pages/Home';
import Login from './pages/Login';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';
import { UserContext } from './context/UserContext';
//react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [authenticate, setAuthenticate] = useState(false)//if true, logged in.you wanna use setAuthenticate fn in Login page. so use it as props.
  useEffect(()=>{
    console.log('logged in?', authenticate);
  }, [authenticate])
  return (
    <div>
      <MyNavbar />
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/deposit' element={<Deposit />} />
          <Route path='/withdraw' element={<Withdraw />} />
          <Route path='/alldata' element={<AllData />} />
          <Route path='/createaccount' element={<CreateAccount />} />
          <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
