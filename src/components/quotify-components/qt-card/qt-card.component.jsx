import React from "react";

import { connect } from "react-redux";

import COLOR_PALETTE from '../../all-reusable-components/random-color/random-color-component';

import QuotifyButtonPanel from '../qt-button-panel/qt-button-panel.component';

import { generateRandomQuoteId } from '../../../redux/quote/quote.actions';

import './qt-card.styles.scss';

class QuotifyCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        randomColor: COLOR_PALETTE[Math.floor(Math.random()*25)],
        }
    }

    handleClick = () => {
        this.props.generateRandomQuoteId((Math.floor(Math.random()*this.props.quotesDB.length)))
        this.setState({
            randomColor: COLOR_PALETTE[Math.floor(Math.random()*25)],
        })
    }

render() {
    const { randomColor } = this.state;
    const { cardItem, trash, repeat} = this.props;

    return (

    <div class="col-12 col-sm-10 col-md-6 col-lg-4 px-4 py-3">
        <div  class="hover-scale row d-flex justify-content-center border border-secondary bg-dark border-2 rounded-3">
            <div class="col-12 col-lg-6 px-2 auth-img-library-animation">
                <img
                    alt='img'
                    src={`https://robohash.org/${[cardItem.authorId]}?&&size=180x180`}
                />
            </div>
            <div class="col-auto col-sm-6 d-flex align-self-end fs-4 py-2 d-none d-lg-block auth-name-library-animation">
                <div class="px-2 border-2 rounded-1 fs-6" style={{color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.400)"}}>
                    {cardItem.author}
                </div>
            </div>
                                    
            <div class="row p-1 border-2 rounded-1 overflow-scroll" style={{backgroundColor: randomColor, height: "150px"}}>
                <div class="col-12 p-0 border-2 rounded-1" style={{color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.400)"}}>
                    <div class="fs-6 px-2" style={{color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.400)"}}>
                        <div className="row">
                            <div className="col d-lg-none"> 
                                {cardItem.author}
                            </div>
                            <QuotifyButtonPanel 
                                item={cardItem}
                                trash={trash}
                                repeat={repeat}
                                handleClick={this.handleClick}
                            />
                        </div>
                    </div>
                    <div class="text-light p-2 fs-5">
                        {cardItem.quote}     
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
}

const mapDispatchToProps = dispatch => ({
    generateRandomQuoteId: randomQuoteId => dispatch(generateRandomQuoteId(randomQuoteId))
})

const mapStateToProps = ({ quote: { quotesDB }}) => ({
    quotesDB
})

export default connect(mapStateToProps, mapDispatchToProps)(QuotifyCard);