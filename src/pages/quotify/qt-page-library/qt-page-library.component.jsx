import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import QuotifyNavbar from '../../../components/quotify-components/qt-navbar/qt-navbar.component'
import QuotifyTopbar from '../../../components/quotify-components/qt-topbar/qt-topbar.component';
import QuotifyFooter from '../../../components/quotify-components/qt-footer/qt-footer.component';
import QuotifyMainLibrary from '../../../components/quotify-components/qt-main-library/qt-main-library.component';

import './qt-page-library.styles.scss';

const LibraryPageQuotify = ({ history, quotesDB }) => {

    const [searchField, setSearchField] = useState('');

    const searchByName = quotesDB.filter(name => (
        name.author.toLowerCase().includes(searchField.toLowerCase())
    ))
    
    const searchByQuote = quotesDB.filter(name => (
        name.quote.toLowerCase().includes(searchField.toLowerCase())
    ))

    return (
        <div className="container-fluid">
            <div class='row'>
                <QuotifyNavbar />
                <div className="qt-page-library qt-main col-12 col-sm-10 overflow-scroll">
                    <div class="row">
                        <QuotifyTopbar 
                            midPart={"searchBox"}
                            back={() => history.goBack()}
                            forward={() => history.goForward()}
                            handleChange={(e)=>setSearchField(e.target.value)}
                        />
                        <QuotifyMainLibrary 
                            searchByName={searchByName}
                            searchByQuote={searchByQuote} 
                        />
                    </div>
                </div>
                <QuotifyFooter />
            </div>
        </div>
    )
    
}  

const mapStateToProps = ({ quote: { quotesDB }}) => ({
    quotesDB
})

export default connect(mapStateToProps)(withRouter(LibraryPageQuotify));