import React from "react";
import { connect } from "react-redux";

import { setInspirationalQuote, setInsightfulQuote } from "../../../redux/quote/quote.actions";

import QuotifyMainListBox from "../qt-main-list-box/qt-main-list-box.component"

import './qt-main-list.styles.scss';

class QuotifyMainList extends React.Component {

    render() {
        const { setInspirationalQuote, inspirationalList, setInsightfulQuote, insightfulList } = this.props;
        
        return (
            <div>

                {/* Inspirational Quotes List */}
                <QuotifyMainListBox 
                    header = "Inspirational Quotes" 

                    menuItem1 = "Inspirational List" 
                    menuItem2 = "Insightful List"

                    setListQuote= { setInspirationalQuote }
                    setListQuote2= { setInsightfulQuote }

                    list = { inspirationalList }
                    list2 = { insightfulList }
                />

                {/* Insightful Quotes List */}
                <QuotifyMainListBox
                    header = "Insightful Quotes"

                    menuItem1 = "Insightful List"
                    menuItem2 = "Inspirational List" 

                    setListQuote= { setInsightfulQuote }
                    setListQuote2= { setInspirationalQuote }

                    list = { insightfulList }
                    list2 = { inspirationalList }
                />

            </div>
        )
    }   
}

const mapStateToProps = ({ quote: {inspirationalList, insightfulList }}) => ({
    inspirationalList, insightfulList
})

const mapDispatchToProps = dispatch => ({
    setInspirationalQuote: inspirationalQuote => dispatch(setInspirationalQuote(inspirationalQuote)),
    setInsightfulQuote: insightfulQuote => dispatch(setInsightfulQuote(insightfulQuote))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuotifyMainList);