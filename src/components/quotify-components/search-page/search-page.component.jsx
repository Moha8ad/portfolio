import React from 'react';

import QuotifyTopbar from '../qt-topbar/qt-topbar.component';
import QuoteBox from '../qt-box/qt-box.component'

const SearchPage = ({ changeHandle, searchField, searchByName, randomQuoteId}) => (
    <div>
        <QuotifyTopbar 
            changeHandle={changeHandle} 
        />
        <QuoteBox
            searchField={searchField}
            searchByName={searchByName} 
            randomQuoteId={randomQuoteId}
        />
    </div>
)

export default SearchPage;