import React from "react";

import QuotifyCard from "../qt-card/qt-card.component";

import './qt-main-home.styles.scss'

const QuotifyMainHome = ({ randomQuote }) => ( 
    <div>
        <div class="row">
            {randomQuote.map(cardItem => 
                <QuotifyCard cardItem = {cardItem} repeat={true}/>
            )}
        </div>
    </div>
)

export default QuotifyMainHome;