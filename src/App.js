import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import HomePage from './pages/homepage/homepage.component';
import Rolodex from './pages/rolodex/rolodex.component';
import QuotifyMain from './components/quotify-components/qt-main/qt-main.component'

import SnakesAndLadders from './pages/snakes-and-ladders/snakes-and-ladders.component';
import Presentational from './pages/redux-page';
import Move from './pages/move.component';
import SignInAndSignUp from './pages/qt-account/qt-account.component';

import './App.css';

function App() {
  return(
    <div>      
      <Switch>  
        <Route exact path='/profile/' component={HomePage} />
        <Route path='/profile/rolodex' component={Rolodex} />
        <Route path='/profile/quotify' component={QuotifyMain} />
        <Route path='/profile/search' component={QuotifyMain} />
        <Route path='/profile/library' component={QuotifyMain} />
        <Route path='/profile/snakes-and-ladders' component={SnakesAndLadders} />
        <Route path='/profile/app4' component={Presentational} />
        <Route path='/profile/app5' component={Move} />
        <Route path='/profile/account' component={SignInAndSignUp} />
      </Switch>
    </div>
  )
}

export default App;