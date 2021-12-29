import React from 'react';
import { withRouter } from "react-router";

import { auth, createUserProfileDocument  } from '../../../firebase/firebase.utils.js'

import RandomQuoteBox from '../qt-box/qt-random-box/qt-random-box.component';
import SearchQuoteBox from '../qt-box/qt-search-box/qt-search-box.component';
import LibraryQuoteBox from '../qt-box/qt-library-box/qt-library-box.component';

import QuotifyNavbar from '../qt-navbar/qt-navbar.component';
import QuotifyFooter from '../qt-footer/qt-footer.component';

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
            randomQuoteId: Math.floor(Math.random()*30),
            randomNum: Math.floor(Math.random()*13),
            currentUser: null
        };
    }
    handleChange = e => {
        this.setState({
            searchField: e.target.value,
        })
      }
    handleClick = (e) => {
        e.preventDefault()
        this.setState({
            randomQuoteId: Math.floor(Math.random()*this.state.quotesDB.length),
            randomNum: Math.floor(Math.random()*13)

        })
    }

    unsubscribeFromAuth = null;

    componentDidMount() {

        this.setState({
            quotesDB: QUOTES_DATA,
            colorArr: COLOR_PALETTE,
        })
        
        this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    })
                })
            } 
            this.setState({
                currentUser: userAuth
            })
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        const { quotesDB, searchField, colorArr, randomQuoteId, randomNum } = this.state;

        const randomColor = colorArr[randomNum]
        
        const searchByName = quotesDB.filter(name => (
            name.author.toLowerCase().includes(searchField.toLowerCase())
        ))
        const { location } = this.props;

        return(
            <div class='row'>
                <QuotifyNavbar 
                    handleNavHome={this.handleNavHome}
                    handleNavSearch={this.handleNavSearch}
                    handleNavLibrary={this.handleNavLibrary}
                    currentUser={this.state.currentUser}

                />
                
                <div className="qt-main col-12 col-sm-10 overflow-scroll">
                
                {location.pathname === '/profile/quotify' &&            
                    <RandomQuoteBox
                        randomColor = {randomColor}
                        handleClick={this.handleClick}
                        searchByName={searchByName}
                        randomQuoteId={randomQuoteId}
                        currentUser={this.state.currentUser}
                    />
                }
                {location.pathname === '/profile/search' &&            
                    <SearchQuoteBox
                        handleClick={this.handleClick}
                        searchByName={searchByName}
                        randomQuoteId={randomQuoteId}
                        randomColor = {randomColor}
                        searchField={searchField}
                        handleChange={this.handleChange}
                        currentUser={this.state.currentUser}
                    />
                }
                {location.pathname === '/profile/library' &&            
                    <LibraryQuoteBox
                        handleClick={this.handleClick}
                        searchByName={searchByName}
                        randomQuoteId={randomQuoteId}
                        randomColor = {randomColor}
                        searchField={searchField}
                        handleChange={this.handleChange}
                        currentUser={this.state.currentUser}
                    />
                }
                </div>

                <QuotifyFooter />

            </div>
        )
    }
}

export default withRouter(QuotifyMain);