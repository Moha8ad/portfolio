import React from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import QuotifyTopbar from '../../qt-topbar/qt-topbar.component';

import RandomQuote from './qt-random';

const RandomQuoteBox = ({ history, handleClick, quotesDB }) => (
    <div class="row">
        <div className="qt-topbar col-12 sticky-top me-auto py-2">
            <QuotifyTopbar 
            forward={() => history.goForward()}
            />
        </div>
        <div className="col-12">
            <RandomQuote
                randomAuthors={quotesDB.map(i => i.author)} 
                randomQuotes={quotesDB.map(i => i.quote)} 
                randomIds={quotesDB.map(i => i.id)}
                handleClick={handleClick}
            />         
        </div>
    </div>
)

const mapStateToProps = ({quote: { quotesDB }}) => ({
    quotesDB
})


export default connect(mapStateToProps)(withRouter(RandomQuoteBox));