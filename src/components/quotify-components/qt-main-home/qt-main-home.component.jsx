import React from "react";

import QuotifyCard from "../qt-card/qt-card.component";

import QuotifyButtonPanel from '../qt-button-panel/qt-button-panel.component';

import { generateRandomQuoteId } from '../../../redux/quote/quote.actions';
import COLOR_PALETTE from '../../all-reusable-components/random-color/random-color-component';


import './qt-main-home.styles.scss'
import { connect } from "react-redux";

const QuotifyMainHome = ({ randomQuote, generateRandomQuoteId, quotesDB }) => ( 
    <div>
        <div class="d-block d-md-none">
        {randomQuote.map(cardItem => 
            <QuotifyCard cardItem = {cardItem} repeat={true}/>
        )}
        </div>
        <div class="d-none d-md-block col-md-12 p-5 overflow-hidden" style={{maxHeight: "70vh"}}>
        {randomQuote.map(cardItem => 
            <QuotifyButtonPanel 
                item={cardItem}
                repeat={true}
                handleClick={() => generateRandomQuoteId((Math.floor(Math.random()*quotesDB.length)))
                }
            />
        )}    
        <div class="row overflow-hidden py-4" style={{maxHeight: "10vh"}}>
            {randomQuote.map(cardItem => 
                <div>
                    <div class="fs-4">{cardItem.quote}</div>
                </div>
            )}
            </div>
            <div class="row " style={{maxHeight: "40vh"}}>
                  
               <div class="col-7 p-4 overflow-scroll d-flex align-items-center" style={{maxHeight: "40vh"}}>
                {randomQuote.map(cardItem => 
                    <div class="col-12 p-4">
                        <div class="fs-4" style={{color:COLOR_PALETTE[Math.floor(Math.random()*25)]}}>{cardItem.quote}</div>
                    </div>
                    )}  
               </div>
               
               {randomQuote.map(cardItem => 
                <div class="col-4 auth-img-library-animation px-3">
                <img
                    alt='img'
                    src={`https://robohash.org/${[cardItem.authorId]}?&&size=180x180`}
                />
                    <div class="fs-3 text-secondary">{cardItem.author}</div>
                    <div class="fs-6">{cardItem.quote}</div>
                </div>
                )} 

            </div>
            <div class="row overflow-hidden" style={{maxHeight: "20vh"}}>
                {randomQuote.map(cardItem => 
                    <div>
                        <div class="fs-5">{cardItem.quote}</div>
                        <div class="fs-1">{cardItem.quote}</div>

                    </div>
                )}
            </div>
        </div>
    </div>
)



const mapDispatchToProps = dispatch => ({
    generateRandomQuoteId: randomQuoteId => dispatch(generateRandomQuoteId(randomQuoteId))
})

const mapStateToProps = ({ quote: { quotesDB }}) => ({
    quotesDB
})

export default connect(mapStateToProps, mapDispatchToProps)(QuotifyMainHome);