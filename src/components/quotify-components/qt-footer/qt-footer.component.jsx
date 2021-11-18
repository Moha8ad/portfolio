import React from 'react';

import AsArLogoSmWt from '../../all-reusable-components/asar-logo-sm-wt/asar-logo-sm-wt.component'

import './qt-footer.styles.scss';


const QuotifyFooter = () => (
    <div class="qt-footer fixed-bottom p-2">        
        <div class="container-fluid">
            <div class="row justify-content-between align-items-center">
                <div class="col-auto">
                    © 2021 AsAr Web Development Studio
                </div>
                <div class="col-auto d-none d-md-block">
                    <AsArLogoSmWt />
                </div>
            </div>
        </div>    
    </div>
)

export default QuotifyFooter;