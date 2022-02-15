import React from 'react';
import { withRouter } from 'react-router-dom';

import QuotifyTopbar from '../../../components/quotify-components/qt-topbar/qt-topbar.component';
import QuotifyNavbar from '../../../components/quotify-components/qt-navbar/qt-navbar.component';
import QuotifyFooter from '../../../components/quotify-components/qt-footer/qt-footer.component';
import QuotifyMainHome from '../../../components/quotify-components/qt-main-home/qt-main-home.component'

import COLOR_PALETTE from '../../../components/all-reusable-components/random-color/random-color-component';

import '../quotify.styles.scss';
import './qt-page-home.styles.scss';

const HomePageQuotify = ({history}) => (
    <div className="container-fluid">
        <div class='row'>
            <QuotifyNavbar/>
            <div className="qt-page-home qt-main col-12 col-sm-10 overflow-scroll"
                style={{backgroundColor: COLOR_PALETTE[Math.floor(Math.random() * 25)]}}
            > 
                <div class="row">
                    <QuotifyTopbar 
                        forward={() => history.goForward()}
                    />
                    <QuotifyMainHome />
                </div>
            </div>
            <QuotifyFooter />
        </div>
    </div>
)

export default (withRouter(HomePageQuotify));