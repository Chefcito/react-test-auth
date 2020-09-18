import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './containers/Home/Home';
import { SignInForm } from './components/SignInForm/SignInForm';
import { Profile } from './containers/Profile/Profile';
import { ErrorNotFound } from './components/ErrorNotFound/ErrorNotFound';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={SignInForm} />
          <Route path='/profile' component={Profile} />
          <Route component={ErrorNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
