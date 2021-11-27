import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import HomePage from './pages/homepage/homepage.component';
import Rolodex from './pages/rolodex/rolodex.component';
import Quotify from './pages/quotify/quotify.component';
import Library from './pages/qt-library/qt-library.component'

import './App.css';

function App() {
  return(
    <div>      
      <Switch>  
        <Route exact path='/profile/' component={HomePage}/>
        <Route path= '/profile/rolodex' component={Rolodex}/>
        <Route path='/profile/quotify' component={Quotify}/>
        <Route path='/profile/app3' component={Library} />
      </Switch>
    </div>
  )
}

export default App;