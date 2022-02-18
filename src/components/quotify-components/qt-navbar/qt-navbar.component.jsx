import React from 'react';

import { withRouter, Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { auth, signInWithGoogle } from '../../../firebase/firebase.utils';

import AsArLogoLgWt from '../../all-reusable-components/asar-logo-lg-wt/asar-logo-lg-wt.component';
import AsArLogoMdWt from '../../all-reusable-components/asar-logo-md-wt/asar-logo-md-wt.component';

import './qt-navbar.styles.scss';

const QuotifyNavbar = ({ history, currentUser }) => (
    <div className="qt-navbar col-12 col-sm-2 p-0 px-2">    
        <div className="d-flex flex-row flex-sm-column flex-wrap justify-content-between">  
            <div className="d-none d-lg-block pt-4 pb-3">
                <AsArLogoLgWt />
            </div>
            <div className="d-none d-sm-block d-lg-none p-3 pt-sm-2 pb-sm-4">
                <AsArLogoMdWt />
            </div>
            <ul className="
                nav flex-sm-column flex-row d-flex flex-wrap
                align-items-center align-items-lg-start 
                fw-bold py-2 p-sm-2"
            >
                <li>
                    <Link className="nav-link pb-sm-0 cursor-pointer"
                    to='/qt/home'
                    >
                        <i className="bi bi-house-door fs-4 text-light"></i>
                        <span className="d-none d-lg-inline ms-3 text-secondary"> Home</span> 
                    </Link>
                </li>
                <li>
                    <div className="nav-link pb-sm-0 cursor-pointer"
                    onClick={() => history.push('/qt/library')}
                    >
                        <i className="bi bi-collection fs-4 text-light"></i>
                        <span className="d-none d-lg-inline ms-3 text-secondary"> Library</span> 
                    </div>
                </li>
                <li>
                    <div className="nav-link cursor-pointer"
                        onClick={() => history.push('/qt/list')}
                    >
                        <i className="bi bi-journal-bookmark-fill fs-4 text-light"></i>
                        <span className="d-none d-lg-inline ms-3 text-secondary"> Lists</span> 
                    </div>
                </li>
                
                <li>
                    <div className="nav-link d-none d-sm-block pt-sm-4 pb-sm-0 cursor-pointer"
                        onClick={() => history.push('/qt/create')}
                    >
                        <i className="bi bi-plus-square-dotted fs-4 text-light"></i>
                        <span className="d-none d-lg-inline ms-3 text-secondary"> Create</span>   
                    </div>
                </li>
                <li>
                    <div className="nav-link d-none d-sm-block cursor-pointer"
                        onClick={() => history.push('/qt/liked')}
                    >
                        <i className="bi bi-heart fs-4 text-light"></i>
                        <span className="d-none d-lg-inline ms-3 text-secondary"> Liked</span>  
                    </div>
                </li>
                <li className="dropdown d-block d-sm-none">
                        <i 
                            className="bi bi-three-dots fs-4 text-light ms-3" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false"
                        >
                        </i>
                        <ul className="dropdown-menu dropdown-menu-dark" style={{zIndex: "10000"}}>
                            <Link to='qt/create'>
                                <li className="dropdown-item cursor-pointer bi-plus-square-dotted"> Create</li>
                            </Link>
                            <Link to='/qt/liked'>
                                <li className="dropdown-item cursor-pointer bi bi-heart"> Liked</li>
                            </Link>
                        </ul>
                </li>
            </ul>
            <div className="d-flex justify-self-center align-self-center">
                    {
                        currentUser
                        ?
                        <div className="dropdown d-block d-sm-none">
                            <button 
                                className="btn btn-sm btn-success mx-2" 
                                type="button" 
                                id="dropdownMenuButton1" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                <i className="d-block d-sm-none bi bi-person-fill"></i>
                                <div className="d-none d-sm-block"> Hello, {currentUser.displayName}</div>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1"  style={{zIndex: "10000"}}>
                                <li className="dropdown-item cursor-pointer" onClick={() => auth.signOut()}>Sign out</li>
                            </ul>
                        </div>
                        :
                        <div className="dropdown d-block d-sm-none">
                            <button 
                                className="btn btn-sm btn-dark mx-2" 
                                type="button" 
                                id="dropdownMenuButton1" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                            <i className="d-block d-sm-none bi bi-person-fill"></i>
                            <div className="d-none d-sm-block"> Hello, Sign in</div>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1" style={{zIndex: "10000"}}>
                                <Link to="/account"><li className="dropdown-item">Sign in/ Sign up</li></Link>
                                <li><hr className="dropdown-divider"/></li>
                                <li className="dropdown-item cursor-pointer" onClick={signInWithGoogle}>Login with <i className="bi bi-google"></i></li>
                            </ul>
                        </div>
                    }
                </div>
        </div>
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})
                
export default connect(mapStateToProps)(withRouter(QuotifyNavbar));