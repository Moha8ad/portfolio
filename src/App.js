import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import HomePage from './pages/homepage/homepage.component';
import Rolodex from './pages/rolodex/rolodex.component';

import QuotifyPageHome from './pages/quotify/qt-page-home/qt-page-home.component'
import QuotifyPageSearch from './pages/quotify/qt-page-search/qt-page-search.component';
import QuotifyPageLibrary from './pages/quotify/qt-page-library/qt-page-library.component';
import QuotifyPageLiked from './pages/quotify/qt-page-liked/qt-page-liked.component';
import QuotifyPageAccount from './pages/quotify/qt-page-account/qt-page-account.component';

import SnakesAndLadders from './pages/snakes-and-ladders/snakes-and-ladders.component';
import Presentational from './pages/redux-page';
import Move from './pages/move.component';

import './App.css';

const App = () => (
  <div>      
    <Switch>  
      <Route exact path='/profile/' component={HomePage} />
      <Route path='/profile/rolodex' component={Rolodex} />
      
      <Route path='/profile/qt/home' component={QuotifyPageHome} />
      <Route path='/profile/qt/search' component={QuotifyPageSearch} />
      <Route path='/profile/qt/library' component={QuotifyPageLibrary} />
      <Route path='/profile/qt/liked' component={QuotifyPageLiked} />
      <Route path='/profile/qt/account' component={QuotifyPageAccount} />

      <Route path='/profile/snakes-and-ladders' component={SnakesAndLadders} />
      <Route path='/profile/app4' component={Presentational} />
      <Route path='/profile/app5' component={Move} />

    </Switch>
  </div>
)

export default App;