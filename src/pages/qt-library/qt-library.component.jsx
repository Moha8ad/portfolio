import React from 'react';

import COLOR_PALETTE from '../../components/all-reusable-components/random-color/random-color-component';

import QUOTES_DATA from './qt-library.data';

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
        const { quotesDB, searchField, colorArr} = this.state;

        const randomColor = colorArr[Math.floor(Math.random() * colorArr.length)]

        const randomQuoteId = Math.floor(Math.random()*quotesDB.length)

        const searchByName = quotesDB.filter(name => (
        name.author.toLowerCase().includes(searchField.toLowerCase())
        ))

        const result = quotesDB.map(item => item)


        const quotes = searchByName.map((item, id) => item.quote)
        const authors = searchByName.map((item, id) => item.author)

        return(
            <div class="container-fluid" >
                <div class="row">
                    
                    <div class="col-12 col-sm-3 py-sm-4 bg-dark text-warning">
                        <div class="col-12 text-warning d-flex justify-content-center fs-1">Quotify</div>
                        <div class="col-12 text-light d-flex justify-content-center fs-5">Get Inspired!</div>
                    </div>
              
                    <div class="col-12 col-sm-9 bg-black py-4 min-vh-100">
                        <div class="row d-flex justify-content-center ">

                            <form class="d-flex col-8 col-sm-10 col-md-8 col-lg-6" >
                                <input 
                                    class="form-control me-2" 
                                    type="search" 
                                    placeholder="Search for Authors or Words" 
                                    aria-label="Search" 
                                    onChange={this.handleChange}
                                />
                                <button 
                                    class="btn btn-outline-warning" 
                                    type="submit"
                                    onClick={this.handleClick}
                                >Random Quote</button>
                              
                            </form>

                            <span class="my-sm-2"/>

                            {searchField === '' ?
                            
                                <div class="col-12 col-sm-10 col-md-8 col-lg-6 p-4">
                                    <hr class="text-light"/>

                                        <div class="col-12 fs-3 text-light">
                                            <i class="bi bi-quote fs-1" style={{color: randomColor}}></i>
                                            {quotes[randomQuoteId]}
                                            
                                        </div>

                                        <div class="col-12 d-flex justify-content-end fs-4" style={{color: randomColor}}>
                                            {authors[randomQuoteId]}

                                        </div>
                                    <hr class="text-light"/>
                                </div>

                                :

                                <div class="col-12 col-sm-10 col-md-8 col-lg-6 p-4">
                                    
                                    
                                        {searchByName.map((item, id) => 
                                            
                                            <div class="col-12 fs-3 text-light">
                                                <hr class="text-light"/>
                                                <div class="col-12 fs-3 text-light">
                                                    <i class="bi bi-quote fs-1" style={{color: randomColor}}></i>
                                                    {item.quote}
                                                </div>
                                                <div
                                                    class="col-12 d-flex justify-content-end fs-4" 
                                                    style={{color: randomColor}}>{item.author}
                                                </div>
                                                <hr class="text-light mb-5"/>
                                            </div>
                                            
                                        )}

                                    
                                </div>
                            
                            }
                            
                            
                                
                        </div>
                    </div>

                    <div class="col-12 fixed-bottom">
                        <div class="row bg-dark">

                            <hr class="text-light"/>
                            <div class="col-3 me-auto p-4 text-light">
                                Left-footer
                            </div>
                            <div class="col-3 d-flex text-light justify-content-end p-4">
                                
                                Right-footer
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default QuotifyMain;