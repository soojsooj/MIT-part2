import './App.css';
import Page from './components/Page';
import { useState } from 'react';
import { ThemeContext } from './context/ThemeContext'

function App() {
  const [isDark, setIsDark]= useState(false);
  return (
    //전달하고 싶은 데(<Page>)를 이렇게 Provider로  싸서, 전달하고 싶은 것을 value값에 써준다. 
    <ThemeContext.Provider value={{isDark, setIsDark}}>
     <Page />
    </ThemeContext.Provider>
  );
}

export default App;
