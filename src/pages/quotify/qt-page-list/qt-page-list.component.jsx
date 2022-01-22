import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import QuotifyNavbar from '../../../components/quotify-components/qt-navbar/qt-navbar.component';
import QuotifyTopbar from '../../../components/quotify-components/qt-topbar/qt-topbar.component';
import QuotifyFooter from '../../../components/quotify-components/qt-footer/qt-footer.component';
import QuotifyMainList from '../../../components/quotify-components/qt-main-list/qt-main-list.component';

const ListPageQuotify = ({ history, inspirationalList, insightfulList } ) => {

    const [ searchField, setSearchField ] = useState('')

    const searchByNameinspirationalList = inspirationalList.filter(name => (
        name.author.toLowerCase().includes(searchField.toLowerCase())
    ))
        
    const searchByNameinsightfulList = insightfulList.filter(name => (
        name.author.toLowerCase().includes(searchField.toLowerCase())
    ))

    return (
        <div className="container-fluid">
            <div class='row'>
                <QuotifyNavbar />
                <div className="qt-main col-12 col-sm-10 overflow-scroll">
                    <div class="row">
                        <QuotifyTopbar 
                            midPart={inspirationalList.length || insightfulList.length > 0 ? "searchBox" : null}
                            back={() => history.goBack()}
                            forward={() => history.goForward()}
                            handleChange={(e) => setSearchField(e.target.value)}
                        />
                        <QuotifyMainList
                        searchByNameinspirationalList={searchByNameinspirationalList}
                        searchByNameinsightfulList={searchByNameinsightfulList}
                        />
                    </div>
                </div>
                <QuotifyFooter />
            </div>
        </div>
    )
    
}

const mapStateToProps = ({ quote: { inspirationalList, insightfulList }}) => ({
    inspirationalList, insightfulList
})

export default connect(mapStateToProps)(withRouter(ListPageQuotify));