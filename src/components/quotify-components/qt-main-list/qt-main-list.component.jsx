import React from "react";
import { connect } from "react-redux";

import { setInspirationalQuote } from "../../../redux/quote/quote.actions";

import QuotifyMainListBox from "../qt-main-list-box/qt-main-list-box.component"

import './qt-main-list.styles.scss';

class QuotifyMainList extends React.Component {

    render() {
        const { inspirationalList, setInspirationalQuote } = this.props;
        
        return (
            <div>

                {/* Inspirational Quotes List */}
                <QuotifyMainListBox 
                    header = { "Inspirational Quotes"} 
                    setListQuote= { setInspirationalQuote }
                    list = { inspirationalList }
                />

                {/* Insightful Quotes List */}
                <QuotifyMainListBox
                    header = { "Insightful Quotes"}
                    setListQuote= { setInspirationalQuote }
                    list = { inspirationalList }
                />

            </div>
        )
    }   
}

const mapStateToProps = ({ quote: {inspirationalList }}) => ({
    inspirationalList
})

const mapDispatchToProps = dispatch => ({
    setInspirationalQuote: inspirationalQuote => dispatch(setInspirationalQuote(inspirationalQuote))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuotifyMainList);