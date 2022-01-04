import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth, createUserProfileDocument  } from '../../firebase/firebase.utils.js';

import RandomQuoteBox from '../../components/quotify-components/qt-box/qt-random-box/qt-random-box.component';
import SearchQuoteBox from '../../components/quotify-components/qt-box/qt-search-box/qt-search-box.component';
import LibraryQuoteBox from '../../components/quotify-components/qt-box/qt-library-box/qt-library-box.component';
import LikedQuoteBox from '../../components/quotify-components/qt-box/qt-liked-box/qt-liked-box.component';

import QuotifyNavbar from '../../components/quotify-components/qt-navbar/qt-navbar.component';
import QuotifyFooter from '../../components/quotify-components/qt-footer/qt-footer.component';

import SignInAndSignUp from '../../components/quotify-components/qt-sign-in-sign-up/qt-sign-in-sign-up.component'

import { setCurrentUser } from '../../redux/user/user.actions';
import { setRandomQuoteId } from '../../redux/quote/quote.actions'

import QUOTES_DATA from './quotify-data';
import COLOR_PALETTE from '../../components/all-reusable-components/random-color/random-color-component';

import './quotify.styles.scss';

class Quotify extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotesDB: [],
            colorArr: [],
            searchField: '',
            randomNum: Math.floor(Math.random()*13)
        };
    }
    
    handleChange = e => {
        this.setState({
            searchField: e.target.value,
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        this.props.setRandomQuoteId(Math.floor(Math.random()*this.state.quotesDB.length))
        this.setState({
            randomNum: Math.floor(Math.random()*13)
        })
    }
    
    unsubscribeFromAuth = null;

    componentDidMount() {

        this.setState({
            quotesDB: QUOTES_DATA,
            colorArr: COLOR_PALETTE,
        })
    
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
        const { quotesDB, searchField, colorArr, randomNum } = this.state;

        const randomColor = colorArr[randomNum]
        
        const searchByName = quotesDB.filter(name => (
            name.author.toLowerCase().includes(searchField.toLowerCase())
        ))
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
                        {location.pathname === '/profile/quotify' &&            
                            <RandomQuoteBox
                                randomColor = {randomColor}
                                handleClick={this.handleClick}
                                searchByName={searchByName}
                            />
                        }
                        {location.pathname === '/profile/quotify/search' &&            
                            <SearchQuoteBox
                                handleClick={this.handleClick}
                                searchByName={searchByName}
                                randomColor = {randomColor}
                                searchField={searchField}
                                handleChange={this.handleChange}
                            />
                        }
                        {location.pathname === '/profile/quotify/library' &&            
                            <LibraryQuoteBox
                                handleClick={this.handleClick}
                                searchByName={searchByName}
                                randomColor = {randomColor}
                                searchField={searchField}
                                handleChange={this.handleChange}
                            />
                        }
                        {location.pathname === '/profile/quotify/liked' &&            
                            <LikedQuoteBox />
                        }
                    </div>
                    <QuotifyFooter />
                </div>
            </div>}
            </div>
        )
    }
}

  
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    setRandomQuoteId: randomQuoteId => dispatch(setRandomQuoteId(randomQuoteId))
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(withRouter(Quotify));