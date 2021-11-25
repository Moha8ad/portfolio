import React from 'react';

import QuotifyTopbar from '../qt-topbar/qt-topbar.component';
import QuoteBox from '../qt-box/qt-box.component'

const SearchPage = ({  randomColor, handleChange, handleClick, searchField, searchByName, randomQuoteId}) => (
    <div>
        <QuotifyTopbar 
            handleChange={handleChange} 
        />
        <QuoteBox
            randomColor = {randomColor}
            handleClick={handleClick}
            searchField={searchField}
            searchByName={searchByName} 
            randomQuoteId={randomQuoteId}
        />
    </div>
)

export default SearchPage;