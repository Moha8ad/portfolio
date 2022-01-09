import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { setLikedQuote } from "../../../redux/quote/quote.actions";

import QuotifyMainListBox from "../qt-main-list-box/qt-main-list-box.component"

import './qt-main-list.styles.scss';

class QuotifyMainList extends React.Component {

    render() {
        const { randomColor, setLikedQuote, likedQuotesDB } = this.props;
        
        return (
            <div>

                {/* Inspirational Quotes List */}
                <div class="fs-4 pt-4 text-secondary">
                    Inspirational Quotes
                </div>
                <QuotifyMainListBox 
                    randomColor = { randomColor }
                    setLikedQuote = { setLikedQuote}
                    likedQuotesDB = { likedQuotesDB }
                />
                <hr class="text-secondary" />

                {/* Insightful Quotes List */}
                <div class="fs-4 pt-4 text-secondary">
                    Inspirational Quotes
                </div>
                <QuotifyMainListBox 
                    randomColor = { randomColor }
                    setLikedQuote = { setLikedQuote}
                    likedQuotesDB = { likedQuotesDB }
                />
                <hr class="text-secondary" />


            </div>
        )
    }   
}

const mapStateToProps = ({ quote: { randomColor, likedQuotesDB }}) => ({
    randomColor, likedQuotesDB
})

const mapDispatchToProps = dispatch => ({
    setLikedQuote: likedQuote => dispatch(setLikedQuote(likedQuote))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuotifyMainList);