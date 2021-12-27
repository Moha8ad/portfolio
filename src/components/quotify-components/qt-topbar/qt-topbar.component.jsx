import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase/firebase.utils'

import { signInWithGoogle } from '../../../firebase/firebase.utils';

import SearchBox from '../../all-reusable-components/search-box/search-box.component';

import './qt-topbar.styles.scss'

const QuotifyTopbar = ({ handleChange, midPart, currentUser, back, forward }) => (
        <div class="row d-flex flex-wrap align-items-center fs-5 fw-bold">
            <div class="col-auto">
                <i class="bi bi-arrow-left-circle fs-2 cursor-pointer" 
                   onClick={back}
                />
                <i class="bi bi-arrow-right-circle fs-2 ps-3 cursor-pointer"
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
            <div class="col-auto d-none d-sm-block" >
                {
                    currentUser
                    ?
                    <div class="dropdown">
                        <button 
                            class="btn btn-sm btn-success" 
                            type="button" 
                            id="dropdownMenuButton1" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false"
                        >
                            <i class="bi bi-person-fill"></i> Hello, Signed in
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                            <li class="dropdown-item cursor-pointer" onClick={() => auth.signOut()}>Sign out</li>
                        </ul>
                    </div>
                    :
                    <div class="dropdown">
                        <button 
                            class="btn btn-sm btn-dark" 
                            type="button" 
                            id="dropdownMenuButton1" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false"
                        >
                            <i class="bi bi-person-fill"></i> Hello, Sign in
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                            <Link to="/profile/search"><li class="dropdown-item">Sign in/ Sign up</li></Link>
                            <li><hr class="dropdown-divider"/></li>
                            <li class="dropdown-item cursor-pointer" onClick={signInWithGoogle}>Login with <i class="bi bi-google"></i></li>
                        </ul>
                    </div>
                }
            </div>  
        </div>
)

export default withRouter(QuotifyTopbar);