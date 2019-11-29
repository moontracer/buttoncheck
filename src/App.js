import React from 'react';
import './App.css';
import MobileNav from './Views/Mobile/MobileNav.js';
// import MobileCharHeader from './Views/Mobile/MobileCharHeader.js';
// import MobileCharInfo from './Views/Mobile/MobileCharInfo.js';
// import MobileQuestions from './Views/Mobile/MobileQuestions.js';
// import MobileRegistration from './Views/Mobile/MobileRegistration.js';
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
      {/* Mobile character forum basically finished, working on registration now */}
      <MobileCharForum />
    </div>
  );
}

export default App;

/*
  Ideas:
  Move comments down the page.
  
  I think what's more important than letting users know when the last comment was is actually displaying to them how many comments there are.
  So, let's try doing just that.

  REFACTOR HTML AND CSS FOR NAV AND FORUM, changing IDs to classes

  FIX BORDER SO IT DOESN'T RUN ACROSS ENTIRE PAGE
  I believe this has to do with the relative positioning of the element. Is it possible for me to use a different webpage?
*/
