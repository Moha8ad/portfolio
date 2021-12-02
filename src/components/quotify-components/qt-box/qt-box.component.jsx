import React from 'react';

import RandomQuote from './qt-random';
import ResultQuote from './qt-result';

const QuoteBox = ({ searchField, searchByName, randomQuoteId, handleClick, randomColor }) => (
    <div>
        {searchField === '' ?
            <RandomQuote
                randomColor = {randomColor}
                handleClick={handleClick}
                randomAuthors={searchByName.map(i => i.author)} 
                randomQuotes={searchByName.map(i => i.quote)} 
                randomQuoteId={randomQuoteId}
            />
            :
            <div>
                {searchByName.map(result => 
                    <ResultQuote key={result.id} 
                        resultQuote={result.quote} 
                        resultAuthor={result.author}
                        randomColor = {randomColor}/> 
                )}
            </div>
        }
    </div>
)

export default QuoteBox;