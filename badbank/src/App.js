import './index.js'
import './App.css';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavBar from './components/nav/MyNavBar';
import { Routes, Route } from "react-router-dom"
//pages
import Home from './components/pages/Home';
import CreateAccount from './components/pages/CreateAccount';
import Login from './components/pages/Login';
import Deposit from './components/pages/Deposit';
import Withdraw from './components/pages/Withdraw';
import Balance from './components/pages/Balance';
import AllData from './components/pages/AllData';
//context
import { UserContext } from './context/UserContext';


function App() {
  
  return (
    <div>
      <MyNavBar/>
        <UserContext.Provider value={
            {users:[
              { name:'soojin',
                email:'huh.soojin@gmail.com',
                password:'secret',
                balance:100}
                ]
            }
          }>
          <div className="container" style={{padding: "20px"}}>
            <Routes>
              <Route path="/"  element={<Home />} />
              <Route path="/CreateAccount/" element={<CreateAccount />} />
              <Route path="/login/" element={<Login />} />
              <Route path="/deposit/" element={<Deposit />} />
              <Route path="/withdraw/" element={<Withdraw />} />
              <Route path="/balance/" element={<Balance />} />
              <Route path="/alldata/" element={<AllData />} />
            </Routes>
          </div>
        </UserContext.Provider>
    </div>
  );
}

export default App;
