import React from "react";
import { connect } from "react-redux";

import QuotifyMainListBox from "../qt-main-list-box/qt-main-list-box.component";

import './qt-main-list.styles.scss';

class QuotifyMainList extends React.Component {

    render() {
        const { inspirationalList, insightfulList, searchByNameinspirationalList, searchByNameinsightfulList } = this.props;
        
        return (
            <div>
                {/* Inspirational Quotes List */}
                <QuotifyMainListBox 
                    header = "Inspirational Quotes"
                    list= { inspirationalList }
                    searchList = { searchByNameinspirationalList }
                />

                {/* Insightful Quotes List */}
                <QuotifyMainListBox 
                    header = "Insightful Quotes"
                    list= { insightfulList }
                    searchList = { searchByNameinsightfulList }
                />

            </div>
        )
    }   
}

const mapStateToProps = ({ quote: { inspirationalList, insightfulList }}) => ({
    inspirationalList, insightfulList
})

export default connect(mapStateToProps, null)(QuotifyMainList);