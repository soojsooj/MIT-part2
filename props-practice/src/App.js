import './App.css';
import './index.js'
import { useState } from 'react'
import Page from './components/Page'

function App() {
  const [isDark, setIsDark] =useState(false);
  
  return (
    <div>
     <Page isDark={isDark} setIsDark={setIsDark}/>
    </div>
  );
}

export default App;
