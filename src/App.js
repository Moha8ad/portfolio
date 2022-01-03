import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import HomePage from './pages/homepage/homepage.component';
import Rolodex from './pages/rolodex/rolodex.component';
import Quotify from './pages/quotify/quotify.component';
import SnakesAndLadders from './pages/snakes-and-ladders/snakes-and-ladders.component';
import Presentational from './pages/redux-page';
import Move from './pages/move.component';

import SignInAndSignUp from './components/quotify-components/qt-sign-in-sign-up/qt-sign-in-sign-up.component'

import './App.css';

const App = () => (
  <div>      
    <Switch>  
      <Route exact path='/profile/' component={HomePage} />
      <Route path='/profile/rolodex' component={Rolodex} />
      <Route path='/profile/quotify' component={Quotify} />
      <Route path='/profile/quotify/account' component={SignInAndSignUp} />
      <Route path='/profile/snakes-and-ladders' component={SnakesAndLadders} />
      <Route path='/profile/app4' component={Presentational} />
      <Route path='/profile/app5' component={Move} />

    </Switch>
  </div>
)

export default App;