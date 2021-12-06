import React from "react";

import SearchQuotifyMain from '../../components/quotify-components/qt-main/qt-search-main.component';
import QuotifyNavbar from '../../components/quotify-components/qt-navbar/qt-navbar.component';
import QuotifyFooter from '../../components/quotify-components/qt-footer/qt-footer.component';


const QuotifySearch = () => (
  <div class="quotify text-light">
    <QuotifyNavbar />
    <SearchQuotifyMain />
    <QuotifyFooter />
  </div>
)

export default QuotifySearch;