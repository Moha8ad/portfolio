import React from 'react';

import { withRouter, Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { auth, signInWithGoogle } from '../../../firebase/firebase.utils';

import AsArLogoLgWt from '../../all-reusable-components/asar-logo-lg-wt/asar-logo-lg-wt.component';
import AsArLogoMdWt from '../../all-reusable-components/asar-logo-md-wt/asar-logo-md-wt.component';

import './qt-navbar.styles.scss'

const QuotifyNavbar = ({ history, currentUser }) => (
    <div class="qt-navbar col-12 col-sm-2 p-0 px-2">    
        <div class="d-flex flex-row flex-sm-column flex-wrap justify-content-between">  
            <div class="d-none d-lg-block pt-4 pb-3">
                <AsArLogoLgWt />
            </div>
            <div class="d-none d-sm-block d-lg-none p-3 pt-sm-2 pb-sm-4">
                <AsArLogoMdWt />
            </div>
            <ul class="
                nav 
                flex-sm-column 
                flex-row
                d-flex 
                flex-wrap
                align-items-center align-items-lg-start 
                fw-bold py-2 p-sm-2"
            >
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
                    <div class="nav-link d-none d-sm-block pt-sm-4 pb-sm-0">
                        <i class="bi bi-bookmark-plus fs-4 text-light"></i>
                        <span class="d-none d-lg-inline ms-3 text-secondary"> Lists</span>   
                    </div>
                </li>
                <li>
                    <div class="nav-link d-none d-sm-block">
                        <i class="bi bi-heart fs-4 text-light"></i>
                        <span class="d-none d-lg-inline ms-3 text-secondary"> Liked</span>  
                    </div>
                </li>
                <li class="dropdown">
                    <div class="d-block d-sm-none">
                        <i 
                            class="bi bi-three-dots fs-4 text-light ms-3" 
                            id="dropdownMenuButton1" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false"
                        >
                            <div class="d-none d-sm-block"> </div>
                        </i>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1"  style={{zIndex: "10000"}}>
                            <li class="dropdown-item cursor-pointer bi bi-bookmark-plus"> Lists</li>
                            <li class="dropdown-item cursor-pointer bi bi-heart"> Liked</li>
                        </ul>
                    </div>
                </li>
            </ul>
            <div class="d-flex justify-self-center align-self-center">
                    {
                        currentUser
                        ?
                        <div class="dropdown d-block d-sm-none">
                            <button 
                                class="btn btn-sm btn-success mx-2" 
                                type="button" 
                                id="dropdownMenuButton1" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                <i class="d-block d-sm-none bi bi-person-fill"></i>
                                <div class="d-none d-sm-block"> Hello, {currentUser.displayName}</div>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1"  style={{zIndex: "10000"}}>
                                <li class="dropdown-item cursor-pointer" onClick={() => auth.signOut()}>Sign out</li>
                            </ul>
                        </div>
                        :
                        <div class="dropdown d-block d-sm-none">
                            <button 
                                class="btn btn-sm btn-dark mx-2" 
                                type="button" 
                                id="dropdownMenuButton1" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                            <i class="d-block d-sm-none bi bi-person-fill"></i>
                            <div class="d-none d-sm-block"> Hello, Sign in</div>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1" style={{zIndex: "10000"}}>
                                <Link to="/profile/account"><li class="dropdown-item">Sign in/ Sign up</li></Link>
                                <li><hr class="dropdown-divider"/></li>
                                <li class="dropdown-item cursor-pointer" onClick={signInWithGoogle}>Login with <i class="bi bi-google"></i></li>
                            </ul>
                        </div>
                    }
                </div>
        </div>
    </div>
)

                
export default withRouter(QuotifyNavbar);