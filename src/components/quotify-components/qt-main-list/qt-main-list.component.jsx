import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { setLikedQuote, setInspirationalQuote } from "../../../redux/quote/quote.actions";

import QuotifyMainListBox from "../qt-main-list-box/qt-main-list-box.component"

import './qt-main-list.styles.scss';

class QuotifyMainList extends React.Component {

    render() {
        const { randomColor, setLikedQuote, likedQuotesDB, inspirationalList, setInspirationalQuote } = this.props;
        
        return (
            <div>

                {/* Inspirational Quotes List */}
                <QuotifyMainListBox 
                    header = { "Inspirational Quotes"} 
                    randomColor = { randomColor }
                    setQuote= { setInspirationalQuote }
                    list = { inspirationalList }
                />

                {/* Insightful Quotes List */}
                <QuotifyMainListBox
                    header = { "Insightful Quotes"} 
                    randomColor = { randomColor }
                    setQuote = { setLikedQuote}
                    list = { likedQuotesDB }
                />

            </div>
        )
    }   
}

const mapStateToProps = ({ quote: { randomColor, likedQuotesDB, inspirationalList }}) => ({
    randomColor, likedQuotesDB, inspirationalList
})

const mapDispatchToProps = dispatch => ({
    setLikedQuote: likedQuote => dispatch(setLikedQuote(likedQuote)),
    setInspirationalQuote: inspirationalQuote => dispatch(setInspirationalQuote(inspirationalQuote))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuotifyMainList);