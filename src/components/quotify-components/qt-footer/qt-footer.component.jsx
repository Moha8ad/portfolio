import React from 'react';

import AsArLogoSmWt from '../../all-reusable-components/asar-logo-sm-wt/asar-logo-sm-wt.component'

import './qt-footer.styles.scss';

const QuotifyFooter = () => (
    <div>        
        <div className="qt-footer col-12 fixed-bottom p-2 d-flex align-items-center">        
            <div className="container-fluid">
                <div className="row justify-content-between align-items-center">
                    <div className="col-auto d-none d-sm-block">
                        © 2021-22 AsAr Web Development
                    </div>
                    <div className="col-auto">
                        <AsArLogoSmWt />
                    </div>
                </div>
            </div>    
        </div>
    </div>
)

export default QuotifyFooter;