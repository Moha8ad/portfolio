import React from "react";

import { randomColor } from '../../all-reusable-components/random-color/random-color-component'

const RandomQuote = ({ randomQuoteId, authorsText, quotesText }) => (
    <div class=" d-flex flex-wrap align-self-center justify-content-center fw-bold">    
        <div class="col-12 px-4">
            <div class='my-4 pt-2' style={{backgroundColor: randomColor}}>
                <div class="col-3 ps-2">
                    <img alt='img' src={`https://robohash.org/${[randomQuoteId]}?&&size=180x180`}/>
                </div>
                <div class="col-auto fs-4 bg-dark ps-2 mb-2" style={{color: randomColor}}>
                {authorsText[randomQuoteId]}
                </div>
                
            </div>
            <div class='row'>
            <div class="col-8 me-auto fs-2 ">
            <i class="bi bi-quote fs-1 pe-2" style={{color: randomColor}}></i>
            {quotesText[randomQuoteId]}
            <span> </span>
            <button type="button" 
                        class="btn btn-dark"
                        data-toggle="tooltip" data-placement="left" title="Copy"
                    > <i class="bi bi-clipboard fs-4"></i>
                    </button>  
            </div>
            <div class="col-auto">
                    <button type="button" class="btn btn-primary">
                            <i class="bi bi-quote pe-2"></i>
                            Get Inspired!
                    </button>
                    <button type="button" class="btn btn-success mx-2">
                    <i class="bi bi-share pe-2"></i>
                    Inspire Others!
                    </button>           
                </div>
            </div>   
        </div>
        
        <div class="d-block p-4 m-4"/>

    </div>
)

export default RandomQuote;