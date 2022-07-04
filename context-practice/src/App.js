import './App.css';
import Page from './components/Page';
import { useState } from 'react';
import { ThemeContext } from './context/ThemeContext'
import { UserContext } from './context/UserContext'

function App() {
  const [isDark, setIsDark]= useState(false);
  return (
    //전달하고 싶은 데(<Page>)를 이렇게 Provider로  싸서, 전달하고 싶은 것을 value값에 써준다. 
    //필요한 사람~~~?! 하고 방송 해준거.
    <UserContext.Provider value={'Stranger'}>
      <ThemeContext.Provider value={{isDark, setIsDark}}>
      <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
