import React from 'react';

import AsArLogoLgWt from '../../components/all-reusable-components/asar-logo-lg-wt/asar-logo-lg-wt.component'
import AsArLogoMdWt from '../../components/all-reusable-components/asar-logo-md-wt/asar-logo-md-wt.component'
import AsArLogoSmWt from '../../components/all-reusable-components/asar-logo-sm-wt/asar-logo-sm-wt.component'



import COLOR_PALETTE from '../../components/all-reusable-components/random-color/random-color-component';

import QUOTES_DATA from './qt-testdata';

class QuotifyTest extends React.Component {
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
            randomQuoteId: Math.floor(Math.random()*30)
        })
    }
    
    componentDidMount() {
        this.setState({
            quotesDB: QUOTES_DATA,
            colorArr: COLOR_PALETTE
        })
    }
    
    render() {
        const { quotesDB, searchField, colorArr, randomQuoteId} = this.state;

        const randomColor = colorArr[Math.floor(Math.random() * colorArr.length)]

        const searchByName = quotesDB.filter(name => (
        name.author.toLowerCase().includes(searchField.toLowerCase())
        ))

        const quotes = searchByName.map((item, id) => item.quote)
        const authors = searchByName.map((item, id) => item.author)

        return(
            <div class="container-fluid" >
                {/* Quotify App*/}
                <div class="row">

                    <div class="col-12 col-sm-4 col-md-3 py-sm-4 bg-dark text-warning">
                        {/* Navbar */}
                        <div class="row p-2 justify-content-between">

                            {/* Logo */}
                            <div class='col-auto col-sm-12'>
                                <div class="d-none d-sm-block col-12 fs-1"><AsArLogoLgWt /></div>
                                <div class="d-sm-none p-2 col-12 fs-1"><AsArLogoMdWt /></div>
                            </div>
                            

                            {/* Content Icon */}
                            <div class='col-auto col-sm-12 text-center pt-sm-4'>
                                <div class="col-12 text-warning fs-1">Quotify</div>
                                <div class="col-12 text-light fs-5">Get Inspired!</div>
                            </div>
                        </div>
                    </div>
              
                    <div class="col-12 col-sm-8 col-md-9 bg-black py-4 min-vh-100">
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
                                    <hr class="text-light" />

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
                                (searchByName.length > 0) 
                                ?

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

                                :

                                <div class="col-12 col-sm-10 col-md-8 col-lg-6 p-4 text-light">
                                        <h1>Result Not Found</h1>
                                </div>

                            
                            }
                            
                        </div>
                    </div>

                    <div class="col-12 fixed-bottom">
                        <div class="row bg-dark">

                            <hr class="text-light p-0 m-0"/>
                            <div class="col-auto me-auto align-self-center d-flex text-light">
                                
                                <AsArLogoSmWt />
                            
                            </div>
                            <div class="col-auto d-flex text-light justify-content-end p-4">
                                
                                © 2021 AsAr Web Development
                                
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default QuotifyTest;