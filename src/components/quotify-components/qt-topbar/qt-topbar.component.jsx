import React from 'react';

import { withRouter, Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { auth, signInWithGoogle, createUserProfileDocument, getQuotesDB } from '../../../firebase/firebase.utils';

import { setCurrentUser } from '../../../redux/user/user.actions';

import { setQuotesDataBase } from '../../../redux/quote/quote.actions';

import SearchBox from '../../all-reusable-components/search-box/search-box.component';

import { Topbar } from './qt-topbar.styles';

class QuotifyTopbar extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount() {

        const { setCurrentUser, setQuotesDataBase } = this.props;
        
        this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
                    
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });
            }
            setCurrentUser(userAuth);
            setQuotesDataBase(await getQuotesDB(`quotes/F87Qww0qRNcZRr9OWyfJ23m1ykZ2`));
            //addCollectionAndDocuments('Col', QUOTES_DATA.map(({quotes}) => ({quotes})));
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {

        const { handleChange, midPart, currentUser, back, forward } = this.props;


        return (
            <Topbar className="col-12 sticky-top me-auto py-2">
                <div class="row d-flex flex-wrap align-items-center fs-5 fw-bold text-light ps-2">
                    <div class="col-auto">
                        <i class="bi bi-arrow-left-circle fs-2 cursor-pointer" 
                        onClick={back}/>
                        <i class="bi bi-arrow-right-circle fs-2 ps-3 cursor-pointer"
                        onClick={forward}
                        />
                    </div>
                    <div class="col-7 col-sm-6 col-md-auto me-auto">
                        { midPart === "searchBox" ?
                            <SearchBox placeholder={"Search for Authors"} handleChange={handleChange}/>
                        :
                            null
                        }
                    </div>
                    <div class="col-auto ms-auto me-2">
                        {currentUser ? (
                            <div class="dropdown d-none d-sm-block">
                                <button 
                                    class="btn btn-sm btn-success"
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <div>Hello, {currentUser.displayName}</div>                                      
                                </button>
                                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                                    <li class="dropdown-item cursor-pointer" onClick={() => auth.signOut()}>Sign out</li>
                                </ul>
                            </div>
                            ) : (
                            <div class="dropdown d-none d-sm-block">
                                <button 
                                    class="btn btn-sm btn-dark" 
                                    type="button" 
                                    id="dropdownMenuButton1" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                >
                                <div>Hello, Sign in</div>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                                    <Link to="/qt/account"><li class="dropdown-item">Sign in/ Sign up</li></Link>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li class="dropdown-item cursor-pointer" onClick={signInWithGoogle}>Login with <i class="bi bi-google"></i></li>
                                </ul>
                            </div>
                            )
                        }
                    </div>  
                </div>
            </Topbar>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    setQuotesDataBase: quotesDB => dispatch(setQuotesDataBase(quotesDB))
})

const mapStateToProps = ( { user: { currentUser }} ) => ({
    currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(QuotifyTopbar));