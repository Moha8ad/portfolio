import React from 'react';

import SearchBox from '../../all-reusable-components/search-box/search-box.component';

import './qt-topbar.styles.scss'

const QuotifyTopbar = ({ handleChange }) => (
    <div class="qt-topbar container-fluid sticky-top me-auto pt-2 pb-2">
        <div class="row d-flex flex-wrap-reverse align-items-center fs-5 fw-bold">
            <div class="col-auto">
                <span><i class="bi bi-arrow-left-circle fs-2"></i></span>
                <span><i class="bi bi-arrow-right-circle fs-2 ps-3"></i></span>
            </div>
            <div class="col-auto me-auto">
                <SearchBox placeholder={"Search for Authors or Words"} handleChange={handleChange}/>
            </div>
            <div class="col-auto">
                <i class="bi bi-person-circle fs-4"></i>
                <span class="d-inline ms-2 fw-bold">User</span>
            </div>  
        </div>
    </div>
)

export default QuotifyTopbar;