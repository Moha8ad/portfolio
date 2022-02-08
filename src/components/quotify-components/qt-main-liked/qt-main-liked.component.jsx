import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import QuotifyCard from "../qt-card/qt-card.component";

import './qt-main-liked.styles.scss';

class QuotifyMainLiked extends React.Component {

    render() {
        const { likedQuotesDB, searchByName } = this.props;
        
        return ( 
            <div>
                {likedQuotesDB.length < 1 ?
                    <div class="p-4 text-center">
                        <div class="pb-4" style={{color: "#474D5E"}}>
                            <span class="fs-3">Quotes you like will appear hear</span>
                            <br />
                            <span class="fs-5">Save quotes by tapping the heart icon.</span>
                            <br />
                        </div>
                        <button class="btn btn-primary fs-6" type="button">
                            <Link to='library' class="link-light">Find Quotes</Link>
                        </button>
                    </div>
                    :
                    <div>
                        {searchByName.length > 0 
                        ?
                            <div class="row">
                                {searchByName.map(cardItem => 
                                    <QuotifyCard cardItem = {cardItem}/>
                                )}
                            </div>
                        :
                            <div class="fs-4 text-danger p-4">
                                Result Not Found
                            </div>
                        }
                    </div>
                }
            </div>
            
        )
    }   
}

const mapStateToProps = ({ quote: { likedQuotesDB }}) => ({
    likedQuotesDB
})

export default connect(mapStateToProps, null)(QuotifyMainLiked);