import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.js'
import Navbar from './components/Navbar';
import AllData from './components/AllData';
import Balance from './components/Balance'
import CreateAccount from './components/CreateAccount'
import Deposit from './components/Deposit'
import Home from './components/Home'
import Withdraw from './components/Withdraw'
import Login from './components/Login'
import { UserContext } from './context/UserContext'


function App() {
  
    return (
      <div>
          <Navbar />
          <UserContext.Provider value={{users: [{name: 'soojin', email: 'huh.soojin@gmail.com', password: 'asdfasdf', balance: 100}]}}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/createaccount/" element={<CreateAccount/>} />
              <Route path="/login/" element={<Login/>} />
              <Route path="/deposit/" element={<Deposit/>} />
              <Route path= "/withdraw/" element={<Withdraw/>} />
              <Route path="/balance/" element={<Balance/>} />
              <Route path="/alldata/" element={<AllData/>} />
            </Routes>
           </UserContext.Provider>
      </div>
  );
}

export default App;