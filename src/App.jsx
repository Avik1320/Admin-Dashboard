import { useState } from 'react';
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import './Style/css/main.css';
import { ThemeContext } from './Theme';
import Main from './Components/Main/Main';

function App() {

  const [DarkTheme, setDarkTheme] = useState (true);  

  return (
    <ThemeContext.Provider value={{DarkTheme, setDarkTheme}}>
      <div className='App'>
        <Navigation />
        <Main/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
