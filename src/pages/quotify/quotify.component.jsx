import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth, createUserProfileDocument  } from '../../firebase/firebase.utils.js';

import RandomQuoteBox from '../../components/quotify-components/qt-box/qt-random-box/qt-random-box.component';

import QuotifyNavbar from '../../components/quotify-components/qt-navbar/qt-navbar.component';
import QuotifyFooter from '../../components/quotify-components/qt-footer/qt-footer.component';

import SignInAndSignUp from '../../components/quotify-components/qt-sign-in-sign-up/qt-sign-in-sign-up.component'

import { setCurrentUser } from '../../redux/user/user.actions';
import { setRandomQuoteId, setSearchByName, setSearchField } from '../../redux/quote/quote.actions';
import { generateRandomColor } from '../../redux/quote/quote.actions';

import './quotify.styles.scss';

class Quotify extends React.Component {

    handleClick = (e) => {
        e.preventDefault()
        this.props.setRandomQuoteId(Math.floor(Math.random()*this.props.quotesDB.length))
        this.props.generateRandomColor(Math.floor(Math.random()*25))
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
    
        const { location } = this.props;

        return(
            <div>
            {location.pathname === '/profile/quotify/account' 
            ? 
            <SignInAndSignUp />
            :
            <div className="container-fluid">
                <div class='row'>
                    <QuotifyNavbar/>
                    <div className="qt-main col-12 col-sm-10 overflow-scroll">
                        <RandomQuoteBox />
                    </div>
                    <QuotifyFooter />
                </div>
            </div>}
            </div>
        )
    }
}

const mapStateToProps = ({ quote: { quotesDB, randomColor, searchField } }) => ({
    quotesDB, randomColor, searchField
})
  
const mapDispatchToProps = dispatch => ({
    setSearchByName: searchByNam => dispatch(setSearchByName(searchByNam)),
    setSearchField: searchField => dispatch(setSearchField(searchField)),
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    setRandomQuoteId: randomQuoteId => dispatch(setRandomQuoteId(randomQuoteId)),
    generateRandomColor: randomColor => dispatch(generateRandomColor(randomColor))
  });

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(Quotify));