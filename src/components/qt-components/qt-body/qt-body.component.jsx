import React from 'react';

import QUOTES_DATA from './qt.data';

import QuoteBox from '../qt-box/qt-box.component';

import QuotifyTopbar from '../../quotify-components/qt-topbar/qt-topbar.component';
import QuotifyFooter from '../../quotify-components/qt-footer/qt-footer.component';

import { SearchBox } from '../../all-reusable-components/search-box/search-box.component';

import './qt-body.styles.scss'

class QuoteBody extends React.Component {
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
    
    return (
      <div className="qt-main col-12 col-sm-10 offset-sm-2 p-0">
        <QuotifyTopbar changeHandle={this.changeHandle}/>
        <div class="container-fluid">
          <div class="row">
            <QuoteBox 
            searchField={searchField}
            searchByName={searchByName} 
            randomQuoteId={randomQuoteId}
            />     
          </div>
        <div>
            <QuotifyFooter />
        </div>
        </div>
      </div>
    )
  }
}

export default QuoteBody;