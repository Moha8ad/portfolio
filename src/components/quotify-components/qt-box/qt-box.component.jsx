import React from 'react';

import RandomQuote from './qt-random';
import ResultQuote from './qt-result';

const QuoteBox = ({ 
        searchField,
        searchByName, 
        randomQuoteId
        }) => (
            <div>
                {searchField === '' ?
                    <RandomQuote 
                        authorsText={searchByName.map(i => i.author)} 
                        quotesText={searchByName.map(i => i.quote)} 
                        randomQuoteId={randomQuoteId}
                    />
                    :
                    searchByName.length > 0 ?
                    <div>
                        {searchByName.map(result => 
                            <ResultQuote key={result.id} result={result} /> 
                        )}
                    </div>
                    :
                    <div>
                        <h2>Result Not Found</h2>
                    </div>
                }
            </div>
)

export default QuoteBox;