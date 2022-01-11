import React from "react";

import QuotifyCard from "../qt-card/qt-card.component";

import './qt-main-library.styles.scss';

const QuotifyMainLibrary = ({ searchByName }) => ( 
    <div>
        {searchByName.length > 0 
        ?
            <div class="row">
                {searchByName.map(cardItem => 
                    <QuotifyCard cardItem = {cardItem}/>
                )}
            </div>
        :
            <div class="fs-4 text-danger p-4">
                Result Not Found
            </div>
        }
    </div>   
)

export default QuotifyMainLibrary;