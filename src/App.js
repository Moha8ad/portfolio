import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import HomePage from './pages/homepage/homepage.component';
import Rolodex from './pages/rolodex/rolodex.component';
import Quotify from './pages/quotify/quotify.component';
import QuotifyHome from './pages/qt-home/qt-home.component';
import QuotifySearch from './pages/qt-search/qt-search.component';
import QuotifyLibrary from './pages/qt-library/qt-library.component';
import SnakesAndLadders from './pages/snakes-and-ladders/snakes-and-ladders.component';
import Presentational from './pages/redux-page';
import Move from './pages/move.component';

import './App.css';

function App() {
  return(
    <div>      
      <Switch>  
        <Route exact path='/profile/' component={HomePage} />
        <Route exact path='/profile/rolodex' component={Rolodex} />
        <Route exact path='/profile/quotify' component={Quotify} />
        <Route exact path='/profile/home' component={QuotifyHome} />
        <Route exact path='/profile/search' component={QuotifySearch} />
        <Route exact path='/profile/library' component={QuotifyLibrary} />
        <Route exact path='/profile/snakes-and-ladders' component={SnakesAndLadders} />
        <Route exact path='/profile/app4' component={Presentational} />
        <Route exact path='/profile/app5' component={Move} />
      </Switch>
    </div>
  )
}

export default App;