import React from 'react';

import QuotifySearchPage from '../qt-search-page/qt-search-page.component';

import QUOTES_DATA from './qt.data';

import './qt-directory.styles.scss';

class QuotifyDirectory extends React.Component {
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
            <QuotifySearchPage
                changeHandle={this.changeHandle}
                searchField={searchField}
                searchByName={searchByName}
                randomQuoteId={randomQuoteId}
            />
        )
    }
}

export default QuotifyDirectory;