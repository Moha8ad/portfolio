import React from 'react';

import RandomQuoteBox from '../qt-box/qt-random-box.component';

import QUOTES_DATA from './qt.data';
import COLOR_PALETTE from '../../all-reusable-components/random-color/random-color-component'

import QuotifyTopbar from '../qt-topbar/qt-topbar.component';

import './qt-main.styles.scss';


class HomeQuotifyMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotesDB: [],
            colorArr: [],
            searchField: '',
            randomQuoteId: Math.floor(Math.random()*30)
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
            <div className="qt-main col-12 col-sm-10 overflow-scroll p-0 pb-5 mb-5">
                <QuotifyTopbar />
                <RandomQuoteBox
                    randomColor = {randomColor}
                    handleClick={this.handleClick}
                    searchByName={searchByName}
                    randomQuoteId={randomQuoteId}
                />
                
            </div>
        )
    }
}

export default HomeQuotifyMain;