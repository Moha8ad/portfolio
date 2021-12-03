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
            (searchByName.length > 0) 
            ?
            <div>
                {searchByName.map(result => 
                    <ResultQuote key={result.id} 
                        result={result}
                        randomColor = {randomColor}
                        randomQuoteId={randomQuoteId}
                        /> 
                )}
            </div>

            :

            <div class="col-12 col-sm-10 col-md-8 col-lg-6 p-4 text-light">
                    <h1>Result Not Found</h1>
            </div>
        }
    </div>
)

export default QuoteBox;