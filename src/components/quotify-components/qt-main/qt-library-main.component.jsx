import React from 'react';

import LibraryQuoteBox from '../qt-box/qt-library-box.component'

import QUOTES_DATA from './qt.data';
import COLOR_PALETTE from '../../all-reusable-components/random-color/random-color-component';

import './qt-main.styles.scss';
import QuotifyTopbar from '../qt-topbar/qt-topbar.component';


class LibraryQuotifyMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotesDB: [],
            colorArr: [],
            searchField: '',
            randomQuoteId: Math.floor(Math.random()*20)
        };
    }
    handleChange = e => {
        this.setState({
            searchField: e.target.value
        })
      }
    handleClick = (e) => {
        e.preventDefault()
        this.setState({
            randomQuoteId: Math.floor(Math.random()*this.state.quotesDB.length)
        })
    }

    componentDidMount() {
        this.setState({
            quotesDB: QUOTES_DATA,
            colorArr: COLOR_PALETTE
        })
    }
    render() {
        const { quotesDB, searchField, colorArr, randomQuoteId } = this.state;

        const randomColor = colorArr[Math.floor(Math.random() * colorArr.length)]
        
        const searchByName = quotesDB.filter(name => (
            name.author.toLowerCase().includes(searchField.toLowerCase())
        ))

        return(
            <div className="qt-main col-12 col-sm-10 offset-sm-2 p-0 pb-5 mb-5">
                <QuotifyTopbar 
                    midPart={"searchBox"}
                    handleChange={this.handleChange}
                />
                <LibraryQuoteBox
                    handleClick={this.handleClick}
                    searchByName={searchByName}
                    randomQuoteId={randomQuoteId}
                    randomColor = {randomColor}
                    searchField={searchField}
                />
                
            </div>
        )
    }
}

export default LibraryQuotifyMain;