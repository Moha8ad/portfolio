import React from "react";
import { Link } from "react-router-dom";

import QuotifyFooter from "../../components/quotify-components/qt-footer/qt-footer.component";

import SignIn from "../../components/quotify-components/qt-sign-in/qt-sign-in.component";
import SignUp from "../../components/quotify-components/qt-sign-up/qt-sign-up.component";

import './qt-account.styles.scss';

const SignInAndSignUp = () => (
    <div class="container-fluid d-flex justify-content-center align-items-start bg-dark text-light p-5"
        style={{minHeight: '100vh'}}
    >
        <div className="row ">
            <div className="col-12 fixed-top p-3">
                <div class="row">
                    <div class="col-3 d-flex justify-content-start">
                        <Link to="/profile/quotify">
                            <i className="bi bi-box-arrow-left text-secondary fs-4 px-3"></i>
                        </Link>
                    </div>
                    <div class="col-6 d-flex justify-content-center fs-4 text-secondary">
                        Quotify Account
                    </div>
                </div>
            </div>
            <div class="col-12 p-3"></div>

            <div className="col-12 col-sm-6 p-5">
                <SignIn />
            </div>
            <div className="col-12 col-sm-6 pb-5 py-sm-5 px-5">
                <SignUp />
            </div>

            <QuotifyFooter />
        </div>
    </div>
)

export default SignInAndSignUp;