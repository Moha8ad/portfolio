import React from 'react';
import { withRouter } from 'react-router-dom';


import SearchBox from '../../all-reusable-components/search-box/search-box.component';

import './qt-topbar.styles.scss'

const QuotifyTopbar = ({ handleChange, midPart, history, back, forward }) => (
        <div class="row d-flex flex-wrap align-items-center fs-5 fw-bold">
            <div class="col-auto">
                <i class="bi bi-arrow-left-circle fs-2" 
                   onClick={back}
                />
                <i class="bi bi-arrow-right-circle fs-2 ps-3"
                   onClick={forward}
                />
            </div>
            <div class="col-8 col-sm-auto me-auto">
                { midPart === "searchBox" ?
                    <SearchBox placeholder={"Search for Authors or Words"} handleChange={handleChange}/>
                : 
                    <div></div>
                }
            </div>
            <div class="col-auto d-none d-sm-block">
                <i class="bi bi-person-circle fs-4"></i>
                <span class="d-none d-lg-inline ms-2 fw-bold">User</span>
            </div>  
        </div>
)

export default withRouter(QuotifyTopbar);