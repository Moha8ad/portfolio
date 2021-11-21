import React from "react";

import QuotifyNavbar from "../../components/quotify-components/qt-navbar/qt-navbar.component";
import QuotifyMain from "../../components/quotify-components/qt-main/qt-main.component";
import QuotifyFooter from "../../components/quotify-components/qt-footer/qt-footer.component";

import './quotify.styles.scss'

const Quotify = () => (
  <div class="quotify text-light">
    <QuotifyNavbar />
    <QuotifyMain/>
    <QuotifyFooter />
  </div>
)

export default Quotify;