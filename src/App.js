import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import HomePage from './pages/homepage/homepage.component';

import Test from './pages/test.component';

import Rolodex from './pages/rolodex/rolodex.component';

import QuotifyPageHome from './pages/quotify/qt-page-home/qt-page-home.component';
import QuotifyMainCreate from './pages/quotify/qt-page-create/qt-page-create.component';
import QuotifyPageLibrary from './pages/quotify/qt-page-library/qt-page-library.component';
import LikedPageQuotify from './pages/quotify/qt-page-liked/qt-page-liked.component';
import ListPageQuotify from './pages/quotify/qt-page-list/qt-page-list.component';
import QuotifyPageAccount from './pages/quotify/qt-page-account/qt-page-account.component';

import SnakesAndLadders from './pages/snakes-and-ladders/snakes-and-ladders.component';

import G5Homepage from './pages/g5/g5-homepage/g5-homepage';
import BoxOne from './pages/g5/g5-box-one/g5-box-one';
import BoxTwo from './pages/g5/g5-box-two/g5-box-two.jsx';
import BoxThree from './pages/g5/g5-box-three/g5-box-three.jsx';
import BoxFour from './pages/g5/g5-box-four/g5-box-four.jsx';
import BoxFive from './pages/g5/g5-box-five/g5-box-five.jsx';
import Archive from './pages/g5/g5-archive/g5-archive.jsx';

import Timed from './pages/timed/timed';

import './App.css';

const App = () => (
  <div>      
    <Switch>  
      <Route exact path='/' component={HomePage} />
      
      <Route path='/rolodex' component={Rolodex} />

      <Route path='/test' component={Test} />

      <Route path='/qt/home' component={QuotifyPageHome} />
      <Route path='/qt/create' component={QuotifyMainCreate} />
      <Route path='/qt/library' component={QuotifyPageLibrary} />
      <Route path='/qt/liked' component={LikedPageQuotify} />
      <Route path='/qt/list' component={ListPageQuotify} />
      <Route path='/qt/account' component={QuotifyPageAccount} />

      <Route path='/snakes-and-ladders' component={SnakesAndLadders} />

      <Route path='/g5/home' component={G5Homepage} />
      <Route path='/g5/box-one' component={BoxOne} />
      <Route path='/g5/box-two' component={BoxTwo} />
      <Route path='/g5/box-three' component={BoxThree} />
      <Route path='/g5/box-four' component={BoxFour} />
      <Route path='/g5/box-five' component={BoxFive} />
      <Route path='/g5/archive' component={Archive} />

      <Route path='/timed/home' component={Timed} />

    </Switch>
  </div>
)

export default App;