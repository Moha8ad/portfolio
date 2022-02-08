import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import QuotifyNavbar from '../../../components/quotify-components/qt-navbar/qt-navbar.component';
import QuotifyTopbar from '../../../components/quotify-components/qt-topbar/qt-topbar.component';
import QuotifyFooter from '../../../components/quotify-components/qt-footer/qt-footer.component';
import QuotifyMainLiked from '../../../components/quotify-components/qt-main-liked/qt-main-liked.component';

import './qt-page-liked.styles.css';

const LikedPageQuotify = ({ history, likedQuotesDB }) => {

    const [searchField, setSearchField] = useState('')
        
    const searchByName = likedQuotesDB.filter(name => (
        name.author.toLowerCase().includes(searchField.toLowerCase())
    ))

    return (
        <div className="container-fluid">
            <div class='row'>
                <QuotifyNavbar />
                <div className="qt-page-liked qt-main col-12 col-sm-10 overflow-scroll">
                    <div class="row">
                        <QuotifyTopbar 
                            midPart={likedQuotesDB.length > 0 ? "searchBox" : "" }
                            back={() => history.goBack()}
                            forward={() => history.goForward()}
                            handleChange={(e) => setSearchField(e.target.value)}
                        />
                        <QuotifyMainLiked 
                            searchByName={searchByName} 
                        />
                    </div>
                </div>
                <QuotifyFooter />
            </div>
        </div>
    )
}

const mapStateToProps = ({ quote: { likedQuotesDB }}) => ({
    likedQuotesDB
})

export default connect(mapStateToProps)(withRouter(LikedPageQuotify));