import React from "react";

import { ReactComponent as Author } from '../../../assets/owl.svg'

const ResultQuote = ({ result }) => (
    <div class="container-fluid bg-danger p-5">
        <div class="row fs-2 fw-bold align-self-center bg-warning p-5">
           
        <div class="col-2">
            <Author alt='img' />
        </div>
        <div class="col-auto">
            <p> {result.author}</p>
        </div>
        <div class="col-auto">
            <p>{result.quote}</p>
        </div>
    </div>
</div>
   
)

export default ResultQuote;