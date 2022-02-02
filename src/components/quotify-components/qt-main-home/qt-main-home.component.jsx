import React from "react";
import { connect } from "react-redux";

import QuotifyCard from "../qt-card/qt-card.component";

import QuotifyButtonPanel from '../qt-button-panel/qt-button-panel.component';

import { generateRandomQuoteId } from '../../../redux/quote/quote.actions';

import COLOR_PALETTE from '../../all-reusable-components/random-color/random-color-component';

import './qt-main-home.styles.scss'

const QuotifyMainHome = ({ randomQuote}) => ( 
    <div class="p-5 d-flex justify-content-center align-items-start">
        <div class="d-block d-md-none d-flex justify-content-center align-items-start">
        {randomQuote.map(cardItem => 
            <QuotifyCard cardItem = {cardItem} repeat={true}/>
        )}
        </div>
        <div class="d-none d-md-block col-md-8">
            <div class="mb-5">
                {randomQuote.map(cardItem => 
                    <QuotifyButtonPanel 
                        item={cardItem}
                        repeat={true}
                    />
                )}
            </div>
            <div class="move-to-right-1 row border border-1 border-light rounded-3" style={{backgroundColor: COLOR_PALETTE[Math.floor(Math.random() * 25)]}}>
                <div class="move-to-left-1 card-grad col rounded-3 py-4">
                    <div className="move-to-right-1 row">
                        <div class="col-8 d-flex align-items-center px-4">
                        {randomQuote.map(cardItem => 
                                <div class="move-to-right-2 fs-5">{cardItem.quote}</div>
                            )}  
                        </div>
                        
                        {randomQuote.map(cardItem => 
                        <div class="move-to-left-2 col-4">
                            <div className="row">
                                <div className="move-to-left-2 col-12 d-flex justify-content-center auth-img-library-animation">
                                    <img
                                        alt='img'
                                        src={`https://robohash.org/${[cardItem.authorId]}?&&size=180x180`}
                                    />
                                </div>
                                <div className="move-to-left-2 col-12 pt-1">
                                    <div class="move-to-left-2 fs-6 text-center">{cardItem.author}</div>
                                </div>
                            </div>
                        </div>
                        )} 
                    </div>
                </div>
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