import React from 'react';

import QuotifyTopbar from '../qt-topbar/qt-topbar.component';

import RandomQuote from './qt-random';

const RandomQuoteBox = ({ handleClick, searchByName, randomQuoteId, randomColor }) => (
    <div class="row">
        <div className="qt-topbar col-12 sticky-top me-auto py-2">
            <QuotifyTopbar />
        </div>
        <div className="col-12">
            <RandomQuote
                randomAuthors={searchByName.map(i => i.author)} 
                randomQuotes={searchByName.map(i => i.quote)} 
                handleClick={handleClick}
                randomQuoteId={randomQuoteId}
                randomColor={randomColor}
            />         
        </div>
    </div>
)

export default RandomQuoteBox;