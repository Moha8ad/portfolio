import React from "react";

import { randomColor } from '../../all-reusable-components/random-color/random-color-component'

import { ReactComponent as Author } from '../../../assets/owl.svg'

const RandomQuote = ({ randomQuoteId, authorsText, quotesText }) => (
    <div class="d-flex flex-wrap align-self-center justify-content-center fw-bold p-5">
        <div class="col-md-8 border border-3 rounded-3 p-4 m-4">
            <div class='row pb-4'>
                <div class="col-3">
                    <Author alt='img' />
                </div>
                <div class="col-6 align-self-end fs-5">
                {authorsText[randomQuoteId]}
                </div>
            </div>
            <div class="col-12 fs-4" style={{color: randomColor}}>
                {quotesText[randomQuoteId]}
            </div>
            
            <div class="d-flex justify-content-between pt-4">
                <div>
                    <button type="button" class="btn btn-lg btn-success">
                        <i class="bi bi-share fs-4 pe-2"> </i>
                        Inspire Others!
                    </button>    
                    
                    <button type="button" 
                        class="btn btn-lg btn-dark d-inline ms-2"
                        data-toggle="tooltip" data-placement="right" title="Copy"
                    >
                        <i class="bi bi-clipboard fs-4 pe-2"> </i>
                        
                        Copy
                    </button>        
                </div>
                <div>
                    <button type="button" class="btn btn-lg btn-primary">Get More Inspired!</button>                
                </div>
            </div>
        </div>
        
        <span class="d-block p-5" />

    </div>
)

export default RandomQuote;