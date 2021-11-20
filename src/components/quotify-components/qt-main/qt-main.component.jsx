import React from 'react';

import SearchPage from '../search-page/search-page.component';

import QUOTES_DATA from './qt.data';

import './qt-main.styles.scss';

class QuotifyMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotesDB: [],
            searchField: ''
        };
    }
    changeHandle = e => {
        this.setState({
          searchField: e.target.value
        })
      }
    componentDidMount() {
        this.setState({
            quotesDB: QUOTES_DATA
        })
    }
    render() {
        const { quotesDB, searchField } = this.state;
    
        const quotesText = quotesDB.map(text => text)

        const randomQuoteId = Math.floor(Math.random()*quotesDB.length);

        const searchByName = quotesText.filter(name => (
        name.author.toLowerCase().includes(searchField.toLowerCase())
        ))
        return(
            <div className="qt-main col-12 col-sm-10 offset-sm-2 p-0">
                <SearchPage
                    changeHandle={this.changeHandle}
                    searchField={searchField}
                    searchByName={searchByName}
                    randomQuoteId={randomQuoteId}
                />
            </div>
        )
    }
}

export default QuotifyMain;