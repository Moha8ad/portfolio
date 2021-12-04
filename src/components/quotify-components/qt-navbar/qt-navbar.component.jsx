import React from 'react';
import { Link } from 'react-router-dom';

import AsArLogoLgWt from '../../all-reusable-components/asar-logo-lg-wt/asar-logo-lg-wt.component';
import AsArLogoMdWt from '../../all-reusable-components/asar-logo-md-wt/asar-logo-md-wt.component';
import AsArLogoSmWt from '../../all-reusable-components/asar-logo-sm-wt/asar-logo-sm-wt.component';

import './qt-navbar.styles.scss'

const QuotifyNavbar = () => (
    <div class="qt-navbar col-12 col-sm-2 p-0">    
        <div class="d-flex flex-row flex-sm-column flex-wrap justify-content-between">  
            <div class="d-none d-lg-block pt-4 pb-3">
                <AsArLogoLgWt />
            </div>
            <div class="d-none d-sm-block d-md-none p-3 pt-sm-4 pb-sm-4">
                <AsArLogoMdWt />
            </div>
            
            <ul class="nav 
                       flex-sm-column 
                       flex-row
                       d-flex 
                       flex-wrap 
                       align-items-center align-items-lg-start 
                       fw-bold py-3 p-sm-3">
                <li>
                <Link to='/profile/quotify/home' class="nav-link pb-sm-0">
                    <i class="bi bi-house-door fs-4 text-light"></i>
                    <span class="d-none d-lg-inline ms-3 text-secondary"> Home</span> 
                </Link>
                </li>
                <li>
                    <Link to='/profile/search' class="nav-link pb-sm-0">
                        <i class="bi bi-search fs-4 text-light"></i>
                        <span class="d-none d-lg-inline ms-3 text-secondary"> Search</span> 
                    </Link>
                </li>
                <li>
                    <Link to='/profile/' class="nav-link">
                        <i class="bi bi-journal-bookmark fs-4 text-light"></i>
                        <span class="d-none d-lg-inline ms-3 text-secondary"> Library</span> 
                    </Link>
                </li>
                <hr />
                <li>
                    <Link to='/profile/' class="nav-link pt-sm-4 pb-sm-0">
                        <i class="bi bi-bookmark-plus fs-4 text-light"></i>
                        <span class="d-none d-lg-inline ms-3 text-secondary"> Bookmark</span>   
                    </Link>
                </li>
                <li>
                    <Link to='/profile/' class="nav-link">
                        <i class="bi bi-heart fs-4 text-light"></i>
                        <span class="d-none d-lg-inline ms-3 text-secondary"> Liked</span>  
                    </Link>
                </li>
            </ul>
        </div>
    </div>
)
                
export default QuotifyNavbar;