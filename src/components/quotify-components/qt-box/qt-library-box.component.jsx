import React from 'react';

import QuotifyTopbar from "../qt-topbar/qt-topbar.component";

import LibraryQuote from './qt-library';

const LibraryQuoteBox = ({ searchByName, randomQuoteId, randomColor, handleClick, handleChange}) => (
    <div class="row">
        <div className="qt-topbar col-12 sticky-top me-auto py-2">
            <QuotifyTopbar 
                midPart={"searchBox"}
                handleChange={handleChange}
            />
        </div>
        <div class="col-12">
            {(searchByName.length > 0) 
            ?
                <div>
                    <LibraryQuote 
                        randomColor = {randomColor}
                        randomQuoteId={randomQuoteId}
                        handleClick={handleClick}
                        searchByName={searchByName}
                    /> 
                    <div class="mb-5 pb-5"/>
                </div>
            :
                <div class="col-12 col-sm-10 col-md-8 col-lg-6 p-4 text-danger">
                        <h1>Result Not Found</h1>
                </div>
            }
        </div>
    </div>
)

export default LibraryQuoteBox;