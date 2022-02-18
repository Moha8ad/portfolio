import React from "react";

import { withRouter, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { setCurrentUser } from "../../../redux/user/user.actions";

import { auth, createUserProfileDocument } from '../../../firebase/firebase.utils';

import QuotifyFooter from "../../../components/quotify-components/qt-footer/qt-footer.component";

import SignIn from "../../../components/quotify-components/qt-sign-in/qt-sign-in.component"
import SignUp from "../../../components/quotify-components/qt-sign-up/qt-sign-up.component";

class AccountPageQuotify extends React.Component {

    goBack = () => {
        this.props.history.goBack();
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
    
        const { setCurrentUser } = this.props;
        
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
            setCurrentUser(userAuth)
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return(
            <div>
            {
                !this.props.currentUser ?

                (<div className="container-fluid d-flex justify-content-center align-items-start bg-dark text-light p-5"
                    style={{minHeight: '100vh'}}
                >
                    <div className="row ">
                        <div className="col-12 fixed-top p-3">
                            <div className="row">
                                <div>
                                    <i className="bi bi-box-arrow-left text-secondary fs-4 px-3" onClick={this.goBack}></i>                                </div>
                            </div>
                        </div>
                        <div className="col-12 p-3"></div>

                        <div className="col-12 col-sm-6 p-sm-5">
                            <SignIn />
                        </div>
                        <div className="col-12 col-sm-6 pb-5 py-4 px-sm-5">
                            <SignUp />
                        </div>
                        <QuotifyFooter />
                    </div>
                </div>
                ) : (
                <Redirect to={this.props.history.goBack()} />
                )
            }
            </div>    
        )
    }
}


const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

const mapStateToProps = ({ user: { currentUser} }) => ({
    currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AccountPageQuotify));
