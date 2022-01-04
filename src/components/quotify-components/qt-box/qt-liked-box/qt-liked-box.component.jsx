import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import QuotifyTopbar from '../../qt-topbar/qt-topbar.component'

const LikedQuoteBox = ({ history, likedQuote }) => (
        <div class="row">
            <div className="qt-topbar col-12 sticky-top me-auto py-2">
                <QuotifyTopbar 
                    midPart={"searchBox"}
                    back={() => history.goBack()}
                    forward={() => history.goForward()}
                />
            </div>
            <div class="col-12 text-light">
            
                <h1>Liked Quotes</h1>
                {likedQuote.map(liked => 
                <h2>
                    <span class="text-primary">{liked.author} </span>
                    says 
                    <span class="text-warning"> {liked.quote}</span>
                </h2>
                )}
            </div>
        </div>
)

const mapStateToProps = ({ quote: { likedQuote }}) => ({
    likedQuote
})

export default connect(mapStateToProps)(withRouter(LikedQuoteBox));