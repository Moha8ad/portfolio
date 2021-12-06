import React from 'react';
import { withRouter } from 'react-router-dom';

import AsArLogoLgWt from '../../all-reusable-components/asar-logo-lg-wt/asar-logo-lg-wt.component';
import AsArLogoMdWt from '../../all-reusable-components/asar-logo-md-wt/asar-logo-md-wt.component';

import './qt-navbar.styles.scss'

const QuotifyNavbar = ({ history, match }) => (
    <div class="qt-navbar col-12 col-sm-2 p-0">    
        <div class="d-flex flex-row flex-sm-column flex-wrap justify-content-between">  
            <div class="d-none d-lg-block pt-4 pb-3">
                <AsArLogoLgWt />
            </div>
            <div class="d-none d-sm-block d-lg-none p-3 pt-sm-2 pb-sm-4">
                <AsArLogoMdWt />
            </div>
            <ul class="nav 
                       flex-sm-column 
                       flex-row
                       d-flex 
                       flex-wrap 
                       align-items-center align-items-lg-start 
                       fw-bold py-2 p-sm-2">
                <li>
                <div class="nav-link pb-sm-0"
                    onClick={() => history.push('/profile/quotify')}
                >
                    <i class="bi bi-house-door fs-4 text-light"></i>
                    <span class="d-none d-lg-inline ms-3 text-secondary"> Home</span> 
                </div>
                </li>
                <li>
                    <div class="nav-link pb-sm-0"
                        onClick={() => history.push('/profile/search')}
                    >
                        <i class="bi bi-search fs-4 text-light"></i>
                        <span class="d-none d-lg-inline ms-3 text-secondary"> Search</span> 
                    </div>
                </li>
                <li>
                    <div class="nav-link"
                        onClick={() => history.push('/profile/library')}
                    >
                        <i class="bi bi-journal-bookmark fs-4 text-light"></i>
                        <span class="d-none d-lg-inline ms-3 text-secondary"> Library</span> 
                    </div>
                </li>
                
                <li>
                    <div class="nav-link pt-sm-4 pb-sm-0">
                        <i class="bi bi-bookmark-plus fs-4 text-light"></i>
                        <span class="d-none d-lg-inline ms-3 text-secondary"> Bookmark</span>   
                    </div>
                </li>
                <li>
                    <div class="nav-link">
                        <i class="bi bi-heart fs-4 text-light"></i>
                        <span class="d-none d-lg-inline ms-3 text-secondary"> Liked</span>  
                    </div>
                </li>
            </ul>
            <ul class="nav d-sm-none ms-auto  py-2">
                <li>
                    <div class="nav-link">
                        <i class="bi bi-person-circle fs-4 text-light"></i>
                        <span class="d-none d-lg-inline ms-3 text-secondary"> User</span>  
                    </div>
                </li> 
            </ul>
        </div>
    </div>
)
                
export default withRouter(QuotifyNavbar);