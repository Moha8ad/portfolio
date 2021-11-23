import React from "react";

import { ReactComponent as Author } from '../../../assets/owl.svg'

const RandomQuote = ({ randomQuoteId, authorsText, quotesText }) => (
    <div class="d-flex flex-wrap justify-content-center fw-bold p-4">
        <div class="col-md-8 border border-2 border-info rounded-3 p-4 m-4">
            <div class='row pb-4'>
                <div class="col-3">
                    <Author alt='img' />
                </div>
                <div class="col-6 align-self-end fs-5">
                {authorsText[randomQuoteId]}
                </div>
            </div>
            <div class="col-12 fs-4">
                {quotesText[randomQuoteId]}
            </div>    
        </div>
        <div class="row d-flex flex-wrap justify-content-center col-12 border border-2 border-light">
            <div class="col-md-3 border border-2 border-info rounded-3 p-4 m-4">
                <div class='row pb-4'>
                    <div class="col-5">
                        <Author alt='img' />
                    </div>
                    <div class="col-6 align-self-end fs-auto fs-md-5">
                    {authorsText[randomQuoteId]}
                    </div>
                </div>
                <div class="col-12 fs-4">
                    {quotesText[randomQuoteId]}
                </div>    
            </div>
            <div class="col-md-3 border border-2 border-info rounded-3 p-4 m-4">
                <div class='row pb-4'>
                    <div class="col-5">
                        <Author alt='img' />
                    </div>
                    <div class="col-6 align-self-end fs-auto fs-md-5">
                    {authorsText[randomQuoteId]}
                    </div>
                </div>
                <div class="col-12 fs-4">
                    {quotesText[randomQuoteId]}
                </div>    
            </div>
            <div class="col-md-3 border border-2 border-info rounded-3 p-4 m-4">
                <div class='row pb-4'>
                    <div class="col-5">
                        <Author alt='img' />
                    </div>
                    <div class="col-6 align-self-end fs-auto fs-md-5">
                    {authorsText[randomQuoteId]}
                    </div>
                </div>
                <div class="col-12 fs-4">
                    {quotesText[randomQuoteId]}
                </div>    
            </div>
        </div>
    </div>
)

export default RandomQuote;