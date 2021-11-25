import React from 'react';

import SearchPage from '../search-page/search-page.component';

import QUOTES_DATA from './qt.data';
import COLOR_PALETTE from '../../all-reusable-components/random-color/random-color-component'

import './qt-main.styles.scss';

class QuotifyMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotesDB: [],
            colorArr: [],
            searchField: ''
        };
    }
    handleChange = e => {
        this.setState({
            searchField: e.target.value
        })
      }
    handleClick = () => {
        this.setState({
            
        })
    }
    componentDidMount() {
        this.setState({
            quotesDB: QUOTES_DATA,
            colorArr: COLOR_PALETTE
        })
    }
    render() {
        const { quotesDB, searchField, colorArr } = this.state;
        const handleChange= this.handleChange;
        const handleClick = this.handleClick;

        const randomColor = colorArr[Math.floor(Math.random() * colorArr.length)]
    
        const randomQuoteId = Math.floor(Math.random()*quotesDB.length)

        const quotesText = quotesDB.map(text => text)

        const searchByName = quotesText.filter(name => (
        name.author.toLowerCase().includes(searchField.toLowerCase())
        ))
        return(
            <div className="qt-main col-12 col-sm-10 offset-sm-2 p-0 pb-5 mb-5">
                <SearchPage
                    randomColor = {randomColor}
                    handleChange={handleChange}
                    handleClick={handleClick}
                    searchField={searchField}
                    searchByName={searchByName}
                    randomQuoteId={randomQuoteId}
                />
            </div>
        )
    }
}

export default QuotifyMain;