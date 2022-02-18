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
                    <div className="p-4 text-center">
                        <div className="pb-4" style={{color: "#474D5E"}}>
                            <span className="fs-3">Quotes you like will appear hear</span>
                            <br />
                            <span className="fs-5">Save quotes by tapping the heart icon.</span>
                            <br />
                        </div>
                        <button className="btn btn-primary fs-6" type="button">
                            <Link to='library' className="link-light">Find Quotes</Link>
                        </button>
                    </div>
                    :
                    <div>
                        {searchByName.length > 0 
                        ?
                            <div className="row">
                                {searchByName.map(cardItem => 
                                    <QuotifyCard cardItem = {cardItem}/>
                                )}
                            </div>
                        :
                            <div className="fs-4 text-danger p-4">
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