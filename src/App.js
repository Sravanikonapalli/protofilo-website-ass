import './App.css';
import React, { useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import SocialIcons from './components/SocialIcons';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleToggle = () => setDarkMode((prev) => !prev);

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Navbar darkMode={darkMode} handleToggle={handleToggle} />
      <Hero darkMode={darkMode} handleToggle={handleToggle} />
      <About  darkMode={darkMode} handleToggle={handleToggle}  />
    </div>
  );
}

export default App;
