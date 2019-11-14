import React from 'react';
import './App.css';
import MobileNav from './Views/Mobile/MobileNav.js';
import MobileCharHeader from './Views/Mobile/MobileCharHeader.js';
import MobileCharInfo from './Views/Mobile/MobileCharInfo.js';

function App() {
  return (
    <div className="App">
      <MobileNav />
      <MobileCharHeader />
      <MobileCharInfo />
    </div>
  );
}

export default App;
