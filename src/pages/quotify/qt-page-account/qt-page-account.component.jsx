import React from "react";

import { withRouter, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import QuotifyFooter from "../../../components/quotify-components/qt-footer/qt-footer.component";

import SignIn from "../../../components/quotify-components/qt-sign-in/qt-sign-in.component"
import SignUp from "../../../components/quotify-components/qt-sign-up/qt-sign-up.component";

class AccountPageQuotify extends React.Component {

    goBack = () => {
        this.props.history.goBack();
    }

    render() {
        return(
            <div>
            {
                !this.props.currentUser ?

                (<div class="container-fluid d-flex justify-content-center align-items-start bg-dark text-light p-5"
                    style={{minHeight: '100vh'}}
                >
                    <div className="row ">
                        <div className="col-12 fixed-top p-3">
                            <div class="row">
                                <div>
                                    <i className="bi bi-box-arrow-left text-secondary fs-4 px-3" onClick={this.goBack}></i>                                </div>
                            </div>
                        </div>
                        <div class="col-12 p-3"></div>

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

const mapStateToProps = ({ user: { currentUser} }) => ({
    currentUser
})

export default connect(mapStateToProps)(withRouter(AccountPageQuotify));
