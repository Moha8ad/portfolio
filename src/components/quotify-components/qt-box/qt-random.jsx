import React from "react";

import { ReactComponent as Author } from '../../../assets/owl.svg'

const RandomQuote = ({ randomQuoteId, authorsText, quotesText }) => (
    <div class="d-flex flex-wrap justify-content-center fw-bold p-4">
        <div class="col-md-5 border border-2 border-info rounded-3 p-4 m-4">
            <div class="col-4">
                <Author alt='img' />
            </div>
            <div class="col-6 fs-5 py-4">
                {authorsText[randomQuoteId]}
            </div>
            <div class="col-12 fs-4">
                {quotesText[randomQuoteId]}
            </div>
        </div>
        <div class="col-md-5 border border-2 border-warning rounded-3 p-4 m-4">
            <div class="col-4">
                <Author alt='img' />
            </div>
            <div class="col-8 fs-5 py-4">
                {authorsText[randomQuoteId+1]}
            </div>
            <div class="col-12 fs-4">
                {quotesText[randomQuoteId+1]}
            </div>
        </div>
        <div class="col-md-5 border border-2 border-danger rounded-3 p-4 m-4">
            <div class="col-4">
                <Author alt='img' />
            </div>
            <div class="col-8 fs-5 py-4">
                {authorsText[randomQuoteId+2]}
            </div>
            <div class="col-12 fs-4">
                {quotesText[randomQuoteId+2]}
            </div>
        </div>
        <div class="col-md-5  border border-2 border-success rounded-3 p-4 m-4">
            <div class="col-4">
                <Author alt='img' />
            </div>
            <div class="col-8 fs-5 py-4">
                {authorsText[randomQuoteId+3]}
            </div>
            <div class="col-12 fs-4">
                {quotesText[randomQuoteId+3]}
            </div>
        </div>
    </div>
)

export default RandomQuote;