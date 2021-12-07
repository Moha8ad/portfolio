import React from "react";

import QuotifyNavbar from '../../components/quotify-components/qt-navbar/qt-navbar.component';
import QuotifyFooter from '../../components/quotify-components/qt-footer/qt-footer.component';
import LibraryQuotifyMain from "../../components/quotify-components/qt-main/qt-library-main.component";


const QuotifyLibrary = () => (
  <div class=" text-light container-fluid">
    <div class="row">
      <QuotifyNavbar />
      <LibraryQuotifyMain />
      <QuotifyFooter />
    </div>
  </div>
)

export default QuotifyLibrary;