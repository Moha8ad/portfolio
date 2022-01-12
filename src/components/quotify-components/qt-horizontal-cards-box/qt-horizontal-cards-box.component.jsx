import React from "react";
import { Link } from "react-router-dom";

import QuotifyCard from '../qt-card/qt-card.component';

import './qt-horizontal-cards-box.styles.scss';

const QuotifyHorizontalCardsBox = ({ header, list, searchList }) => (
    <div>
        <div class="fs-4 pt-4 text-secondary">
            {header}
        </div>
        <div class="container d-flex text-secondary overflow-scroll">
                {list.length < 1 
                ?
                    <div class="p-4">
                        <div class="pb-4 text-secondary">
                            <span class="fs-6">Quotes you add to {header} will appear here.</span>
                            <br />
                        </div>
                        <Link to='library'>
                            <button class="btn btn-primary fs-6" type="button">
                                Find Quotes
                            </button>
                        </Link>
                    </div>
                :
                    searchList.length > 0 
                    ?
                        searchList.map(cardItem => 
                                <QuotifyCard cardItem = {cardItem}/>
                            )
                    :
                        <div class="fs-4 text-danger p-4">
                            Result Not Found
                        </div>        
                }
            <hr class="text-secondary" />
        </div>
    </div>  
)

export default QuotifyHorizontalCardsBox;