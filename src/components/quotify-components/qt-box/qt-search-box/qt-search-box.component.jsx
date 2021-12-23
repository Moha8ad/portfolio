import React from 'react';
import { withRouter } from 'react-router-dom';

import QuotifyTopbar from '../../qt-topbar/qt-topbar.component';

import ResultQuote from './qt-search';

const SearchQuoteBox = ({ history, searchField, handleChange, searchByName, randomQuoteId, randomColor }) => (
    <div class="row">
        <div className="qt-topbar col-12 sticky-top me-auto py-2">
            <QuotifyTopbar 
                midPart={"searchBox"}
                back={() => history.goBack()}
                forward={() => history.goForward()}
                handleChange={handleChange}
            />
        </div>
        <div class="col-12">
            {searchField === '' ?
                <div class="col-12 col-sm-10 col-md-8 col-lg-6 p-4 text-secondary">
                    <div class="fs-3"><i class="bi bi-person-bounding-box text-success"></i> Search For Authors!</div>
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
    </div>
)

export default withRouter(SearchQuoteBox);