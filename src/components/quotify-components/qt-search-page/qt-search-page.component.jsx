import React from 'react';

import QuotifyNavbar from '../qt-navbar/qt-navbar.component';
import QuotifyMain from '../qt-main/qt-main.component';
import QuotifyFooter from '../qt-footer/qt-footer.component'

const QuotifySearchPage = ({ changeHandle, searchField, searchByName, randomQuoteId}) => (
    <div class='container-fluid p-0'>
        <QuotifyNavbar />
        <QuotifyMain 
            changeHandle={changeHandle}
            searchField={searchField}
            searchByName={searchByName} 
            randomQuoteId={randomQuoteId}
        />
        <QuotifyFooter />
    </div>
)

export default QuotifySearchPage;