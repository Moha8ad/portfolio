import React from 'react';

import AsArLogoSmWt from '../../all-reusable-components/asar-logo-sm-wt/asar-logo-sm-wt.component'

import './qt-footer.styles.scss';

const QuotifyFooter = () => (
    <div class="qt-footer col-12 fixed-bottom p-2 d-flex align-items-center">        
        <div class="container-fluid">
            <div class="row justify-content-between align-items-center">
                <div class="col-auto">
                    © 2021 AsAr Web Development
                </div>
                <div class="col-auto d-none d-md-block">
                    <AsArLogoSmWt />
                </div>
            </div>
        </div>    
    </div>
)

export default QuotifyFooter;