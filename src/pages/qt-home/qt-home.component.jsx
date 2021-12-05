import React from "react";

import HomeQuotifyMain from '../../components/quotify-components/qt-main/qt-home-main.component';
import QuotifyNavbar from '../../components/quotify-components/qt-navbar/qt-navbar.component';
import QuotifyFooter from '../../components/quotify-components/qt-footer/qt-footer.component';


const QuotifyHome = () => (
  <div class="quotify">
    <QuotifyNavbar />
    <HomeQuotifyMain />
    <QuotifyFooter />
  </div>
)

export default QuotifyHome;