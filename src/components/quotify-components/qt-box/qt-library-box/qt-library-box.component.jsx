import React from 'react';
import { withRouter } from 'react-router-dom';

import QuotifyTopbar from "../../qt-topbar/qt-topbar.component";

import LibraryQuote from './qt-library';

const LibraryQuoteBox = ({ history, searchAtLibrary, randomColor, handleClick, handleChangeLibrary}) => (
    <div class="row">
        <div className="qt-topbar col-12 sticky-top me-auto py-2">
            <QuotifyTopbar 
                midPart={"searchBox"}
                back={() => history.goBack()}
                forward={() => history.goForward()}
                handleChange={handleChangeLibrary}
            />
        </div>
        <div class="col-12">
            {(searchAtLibrary.length > 0) 
            ?
                <div>
                {searchAtLibrary.map((result, id) => 
                    <LibraryQuote 
                        id={id} 
                        result= {result}
                        randomColor= {randomColor}
                    /> 
                )}
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

export default withRouter(LibraryQuoteBox);