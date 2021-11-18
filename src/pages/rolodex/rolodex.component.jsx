import React, { Component } from 'react';

import CardList from '../../components/rolodex-components/card-list/card-list.component';
import { SearchBox } from '../../components/all-reusable-components/search-box/search-box.component';

import AsArLogoLgWt from '../../components/all-reusable-components/asar-logo-lg-wt/asar-logo-lg-wt.component';

import './rolodex.styles.scss'

export class Rolodex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      searchField: ''
    };
  }

  changeHandle = e => {
    this.setState({
      searchField: e.target.value
    })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({characters:users}))
  }

  render() {
    const { characters, searchField} = this.state;
    const filteredCharacters = characters.filter(character => (
      character.name.toLowerCase().includes(searchField.toLowerCase())
    ))
    return(
      <div className='rolodex'>
        <div className='rolodex-homepage-logo'>
          <AsArLogoLgWt />
        </div>
        <p className='blinking rolodex-title'>
        Character Rolodex
        </p>
        <SearchBox 
        placeholder="Search Characters"
        changeHandle={this.changeHandle}
        />
        <CardList characters={filteredCharacters}/>
      </div>
    )
  }
}

export default Rolodex;