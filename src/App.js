import React from 'react';
import './App.css';
import MobileNav from './Views/Mobile/MobileNav.js';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
// import MobileRegistration from './Views/Mobile/MobileRegistration.js';
// import MobileSignIn from './Views/Mobile/MobileSignIn';
import MobileVODList from './Views/Mobile/MobileVODList';
// import MobileVODFilter from './Views/Mobile/MobileVODFilter';

function App() {
  return (
    <div className="App">
      {/* Nav will be on every page for now. */}
      <MobileNav />
      {/* <MobileVODFilter /> */}
      <MobileVODList />
      {/* <MobileSignIn /> */}
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
