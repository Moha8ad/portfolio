import React from 'react';

import AsArLogoSmWt from '../../all-reusable-components/asar-logo-sm-wt/asar-logo-sm-wt.component'

import './qt-footer.styles.scss';

const QuotifyFooter = () => (
    <div>        
        <div class="qt-footer col-12 fixed-bottom p-2 d-flex align-items-center">        
            <div class="container-fluid">
                <div class="row justify-content-between align-items-center">
                    <div class="col-auto d-none d-sm-block">
                        © 2021-22 AsAr Web Development
                    </div>
                    <div class="col-auto">
                        <AsArLogoSmWt />
                    </div>
                </div>
            </div>    
        </div>
    </div>
)

export default QuotifyFooter;