import React from 'react';

import ResultQuote from './qt-search';

const SearchQuoteBox = ({ searchField, searchByName, randomQuoteId, randomColor }) => (
    <div>
        {searchField === '' ?
            <div class="col-12 col-sm-10 col-md-8 col-lg-6 p-4 text-secondary">
                <h1><i class="bi bi-person-bounding-box text-success"></i> Search For Authors!</h1>
            </div>
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

            <div class="col-12 col-sm-10 col-md-8 col-lg-6 p-4 text-danger">
                    <h1>Result Not Found</h1>
            </div>
        }
    </div>
)

export default SearchQuoteBox;