import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './components/Home/Home';
import { SignUpForm } from './components/SignUpForm/SignUpForm';
import { Profile } from './components/Profile/Profile';
import { InvalidUrl } from './components/errors/InvalidUrl/InvalidUrl';

/* const handleLogIn = (event) => {
  fb.logIn('joan@gmail.com', '123456');  
} */

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={SignUpForm} />
          <Route path='/profile' component={Profile} />
          <Route component={InvalidUrl} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
