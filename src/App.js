import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import HomePage from './pages/homepage/homepage.component';
import Rolodex from './pages/rolodex/rolodex.component';
import Quotify from './pages/quotify/quotify.component';
import QuotifyHome from './pages/qt-home/qt-home.component';
import QuotifySearch from './pages/qt-search/qt-search.component';
import QuotifyLibrary from './pages/qt-library/qt-library.component';
import QuotifyTest from './pages/qt-test/qt-test.component';
import Presentational from './redux/presentational';

import './App.css';

function App() {
  return(
    <div>      
      <Switch>  
        <Route exact path='/profile/' component={HomePage} />
        <Route path= '/profile/rolodex' component={Rolodex} />
        <Route path='/profile/quotify' component={Quotify} />
        <Route path='/profile/home' component={QuotifyHome} />
        <Route path='/profile/search' component={QuotifySearch} />
        <Route path='/profile/library' component={QuotifyLibrary} />
        <Route path='/profile/app3' component={QuotifyTest} />
        <Route path='/profile/app4' component={Presentational} />
      </Switch>
    </div>
  )
}

export default App;