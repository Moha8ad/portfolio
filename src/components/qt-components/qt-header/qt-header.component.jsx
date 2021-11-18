import React from 'react';

import AsArLogoLgWt from '../../all-reusable-components/asar-logo-lg-wt/asar-logo-lg-wt.component'

import './qt-header.styles.scss'

const QuoteHeader = () => (
    <div class="qt-header-row qt-menu">
        <div class="qt-header-column side">
            <div className='qt-homepage-logo'>
                <AsArLogoLgWt />
            </div>
        </div>
        <div class="qt-header-column middle">
            <p className="qt-header-title">Quote Application</p>
            <p className="qt-header-subtitle">Enjoy Reading Some Random Quote!</p>
        </div>
    </div>
)

export default QuoteHeader;  