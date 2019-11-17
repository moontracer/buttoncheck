import React from 'react';
import './App.css';
import MobileNav from './Views/Mobile/MobileNav.js';
import MobileCharHeader from './Views/Mobile/MobileCharHeader.js';
import MobileCharInfo from './Views/Mobile/MobileCharInfo.js';
import MobileQuestions from './Views/Mobile/MobileQuestions.js';
import MobileRegistration from './Views/Mobile/MobileRegistration.js';
import MobileCharForum from './Views/Mobile/MobileCharForum';

function App() {
  return (
    <div className="App">
      <MobileNav />
      {/* The character overview page content here, working on Q&A page atm */}
      {/* <MobileQuestions /> */}
      {/* <MobileCharHeader /> */}
      {/* <MobileCharInfo /> */}
      {/* <MobileRegistration /> */}
      <MobileCharForum />
    </div>
  );
}

export default App;
