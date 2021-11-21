import React from "react";

import { ReactComponent as Author } from '../../../assets/owl.svg'

const ResultQuote = ({ result }) => (
    <div class="d-flex flex-wrap justify-content-center fw-bold p-4">
        <div class="col-md-5 border border-2 border-light rounded-3 p-4 m-4">
            <div class="col-4">
                <Author alt='img' />
            </div>
            <div class="col-8 fs-5 py-4">
                {result.author}
            </div>
            <div class="col-12 fs-4">
                {result.quote}
            </div>
        </div>
    </div>
   
)

export default ResultQuote;