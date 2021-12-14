import React from 'react';
import { withRouter } from "react-router";

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
        this.setState({
            randomQuoteId: Math.floor(Math.random()*this.state.quotesDB.length),
            randomNum: Math.floor(Math.random()*13)

        })
    }

    componentDidMount() {
        this.setState({
            quotesDB: QUOTES_DATA,
            colorArr: COLOR_PALETTE
        })
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
                />
                
                <div className="qt-main col-12 col-sm-10 overflow-scroll">
                
                {location.pathname === '/profile/quotify' &&            
                    <RandomQuoteBox
                        randomColor = {randomColor}
                        handleClick={this.handleClick}
                        searchByName={searchByName}
                        randomQuoteId={randomQuoteId}
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
                    />
                }
                </div>

                <QuotifyFooter />

            </div>
        )
    }
}

export default withRouter(QuotifyMain);