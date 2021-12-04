import React from 'react';

import RandomQuote from './qt-random';

const RandomQuoteBox = ({ handleClick, searchByName, randomQuoteId, randomColor }) => (
    <div>
        <RandomQuote
            randomAuthors={searchByName.map(i => i.author)} 
            randomQuotes={searchByName.map(i => i.quote)} 
            handleClick={handleClick}
            randomQuoteId={randomQuoteId}
            randomColor={randomColor}
        />         
    </div>
)

export default RandomQuoteBox;