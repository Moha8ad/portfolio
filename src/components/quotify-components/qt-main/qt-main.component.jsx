import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth, createUserProfileDocument  } from '../../../firebase/firebase.utils.js'

import RandomQuoteBox from '../qt-box/qt-random-box/qt-random-box.component';
import SearchQuoteBox from '../qt-box/qt-search-box/qt-search-box.component';
import LibraryQuoteBox from '../qt-box/qt-library-box/qt-library-box.component';

import QuotifyNavbar from '../qt-navbar/qt-navbar.component';
import QuotifyFooter from '../qt-footer/qt-footer.component';

import { setCurrentUser } from '../../../redux/user/user.actions';
import { setRandomQuoteId } from '../../../redux/quote/quote.actions'

import QUOTES_DATA from './qt.data';
import COLOR_PALETTE from '../../all-reusable-components/random-color/random-color-component';

import './qt-main.styles.scss';

class QuotifyMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotesDB: [],
            colorArr: [],
            searchField: '',
            randomNum: Math.floor(Math.random()*13),        
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
    
        const { setCurrentUser } = this.props;

        this.setState({
            quotesDB: QUOTES_DATA,
            colorArr: COLOR_PALETTE,
        })
        
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
                        
                    </div>
                    <QuotifyFooter />
                </div>
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
  )(withRouter(QuotifyMain));