import React from 'react';

import QuotifyTopbar from '../qt-topbar/qt-topbar.component';
import QuoteBox from '../../qt-components/qt-box/qt-box.component';

import './qt-main.styles.scss';

const QuotifyMain = ({ changeHandle, searchField, searchByName, randomQuoteId}) => ( 
  <div className="qt-main col-12 col-sm-10 offset-sm-2 p-0 text-light">
    <QuotifyTopbar changeHandle={changeHandle}/>
    <QuoteBox 
      searchField={searchField}
      searchByName={searchByName} 
      randomQuoteId={randomQuoteId}
    />     
  </div>
)

export default QuotifyMain;