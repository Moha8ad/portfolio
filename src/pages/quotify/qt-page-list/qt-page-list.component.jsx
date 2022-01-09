import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import QuotifyNavbar from '../../../components/quotify-components/qt-navbar/qt-navbar.component';
import QuotifyTopbar from '../../../components/quotify-components/qt-topbar/qt-topbar.component';
import QuotifyFooter from '../../../components/quotify-components/qt-footer/qt-footer.component';
import QuotifyMainList from '../../../components/quotify-components/qt-main-list/qt-main-list.component';


const ListPageQuotify = ({history, }) => (
    <div className="container-fluid">
        <div class='row'>
            <QuotifyNavbar />
            <div className="qt-main col-12 col-sm-10 overflow-scroll">
                <div class="row">
                    <div className="qt-topbar col-12 sticky-top me-auto py-2">
                        <QuotifyTopbar 
                            midPart={"searchBox"}
                            back={() => history.goBack()}
                            forward={() => history.goForward()}
                        />
                    </div>
                    <QuotifyMainList />
                    <QuotifyFooter />
                </div>
            </div>
        </div>
    </div>

)

const mapStateToProps = ({ quote: { likedQuotesDB }}) => ({
    likedQuotesDB
})

export default connect(mapStateToProps)(withRouter(ListPageQuotify));