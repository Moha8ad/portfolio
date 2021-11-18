import React from 'react';

import QuoteHeader from "../../components/qt-components/qt-header/qt-header.component"
import QuoteBody from "../../components/qt-components/qt-body/qt-body.component";

import './quote-app.styles.scss';

const QuoteApp = () => (
  <div class='qt-container'>
    <div class='qt-container bgcolor'>
      <QuoteHeader />
      <QuoteBody />
    </div>
  </div>
)
        
export default QuoteApp;