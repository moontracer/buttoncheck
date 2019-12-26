import React from 'react';
import './App.css';
import MobileNav from './Views/Mobile/MobileNav.js';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import MobileRegistration from './Views/Mobile/MobileRegistration.js';
import MobileSignIn from './Views/Mobile/MobileSignIn';
import MobileVODList from './Views/Mobile/MobileVODList';
import MobileRulesModal from './Views/Mobile/MobileRulesModal';

function App() {
  return (
    <Router>
    <div className="App">
      <MobileNav />
      {/* What route do I even want for the list?
          Okay so List should show up for the following routes.
          Homepage and any filter routes. First, let's add it to just the homepage.
      */}
      <Switch>
      <Route exact path="/" component={MobileVODList} />
      <Route exact path="/sign_up" component={MobileRegistration} />
      <Route exact path="/sign_in" component={MobileSignIn} />
      {/* Does it make sense to have the rules and contact page have /About as a route? I think so. */}
      <Route exact path="/about" component={MobileRulesModal} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;