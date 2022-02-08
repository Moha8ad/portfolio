import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './test.styles.scss';

const Test = ({randomQuoteId, quotesDB}) => {

    const randomQuote = 
        quotesDB.length - 5 >= randomQuoteId 
        ? 
        quotesDB.filter(card => card.quoteId <= randomQuoteId && card.quoteId > (randomQuoteId - 5)) 
        :
        quotesDB.filter(card => card.quoteId >= randomQuoteId && card.quoteId < (randomQuoteId + 5)) 


    return(
    <div className="wrapper">
    <div className="box-container">
    {randomQuote.map(cardItem =>
            <div className="box grid-column-span-2">
                <div className="card-info">
                    <div>
                        <img src={`https://robohash.org/${[cardItem.authorId]}?&&size=180x180`} alt="author" />
                    </div>
                    <div>
                        {cardItem.author}
                    </div>
                </div>
                <p>
                    {cardItem.quote}
                </p>
            </div>
            )}
        </div>
    </div>
)
}

const mapStateToProps = ({ quote: { quotesDB, randomQuoteId } }) => ({
    quotesDB, randomQuoteId
})

export default connect(mapStateToProps)(withRouter(Test));