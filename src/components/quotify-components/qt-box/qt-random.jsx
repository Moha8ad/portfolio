import React from "react";

const RandomQuote = ({ randomQuoteId, randomAuthors, randomQuotes, handleClick, randomColor }) => ( 
    
    /* quote row */
    <div class="row d-flex justify-content-center align-items-center">
        
        {/* quote box */}
        <div class="col-10 col-sm-8 border border-2 border-light rounded-2 m-4" style={{backgroundColor: randomColor}}>
            <div class="row d-flex justify-content-center align-items-center">

            {/* buttons */}
            <div class="col-12 mt-4 mb-0 px-4">
                <div class="row d-flex align-items-center">

                    {/* repeat button */}
                    <div className="col-auto me-auto hover-scale-rotate"
                    data-toggle="tooltip" data-placement="bottom" title="Get Inspired!"

                        onClick={handleClick}
                    >
                        <i class="bi bi-arrow-repeat fs-2" />
                    </div>
                    {/* share button */}
                    <a
                        className="col-auto hover-scale2"
                        data-toggle="tooltip" data-placement="top" title="Inspire Others on Twitter!"
                        rel="noopener noreferrer"
                        target="_blank"
                        href={`https://twitter.com/intent/tweet?text=${randomQuotes[randomQuoteId]} - ${randomAuthors[randomQuoteId]}`}>
                            <i class="bi bi-twitter text-light fs-5"></i>
                    </a>
                    {/* copy button */}
                    <div className="col-auto hover-scale2"
                    data-toggle="tooltip" data-placement="top" title="Copy the Quote!"
                    >
                        <i class="bi bi-clipboard fs-5" />
                    </div>

                </div>
            </div>

            {/* author image */}
            <div className="col-12 d-flex justify-content-center align-items-center">
        
                <img
                    alt='img'
                    src={`https://robohash.org/${[randomQuoteId]}?&&size=180x180`}
                    />        
            
            </div>

            {/* quote */}
            <div class="col-12 p-4 bg-dark">
                <div class="row">
                    
                {/* quote mark*/}
                    <i class="bi bi-quote fs-1" style={{color: randomColor}}>
                    
                        {/* quote text*/}
                        <span class="fst-normal fs-2 text-light">{randomQuotes[randomQuoteId]}</span>
                    
                    </i>
                    
                    {/* author */}
                    <div className="col-12 d-flex justify-content-end fs-4" style={{color: randomColor}}>
                        {randomAuthors[randomQuoteId]}
                    </div>
                </div>
            </div>
                
            </div>
        </div>
    </div>
)

export default RandomQuote;