import React from "react";

import ReactTooltip from "react-tooltip";

const RandomQuote = ({ randomQuoteId, randomAuthors, randomQuotes, handleClick, randomColor }) => ( 
    
    /* quote row */
    <div class="row d-flex justify-content-center align-items-center">
 
        {/* quote box */}
        <div class="col-10 col-sm-8 border border-2 border-light rounded-2 m-4" style={{backgroundColor: randomColor}}>
            <div class="row d-flex justify-content-center align-items-center" style={{color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.200)"}}>

                {/* buttons */}
                <div class="col-12 mt-4 mb-0 px-4">
                    <div class="row d-flex align-items-center">

                    {/* repeat button */}
                    <div className="col-auto me-auto hover-scale-rotate"
                        data-tip data-for="repeat-btn"

                        onClick={handleClick}
                    >
                        <i class="bi bi-arrow-repeat fs-2" />
                    </div>
                    <ReactTooltip class="col-auto fs-6" id="repeat-btn" place="right" effect="float">
                        Get Inspired!
                    </ReactTooltip>

                    {/* share button */}
                    <a
                        className="col-auto hover-scale2"
                        style={{color: randomColor}}
                        data-tip data-for="share-btn"
                        rel="noopener noreferrer"
                        target="_blank"
                        href={`https://twitter.com/intent/tweet?text=${randomQuotes[randomQuoteId]} - ${randomAuthors[randomQuoteId]}`}
                    >
                        <i class="bi bi-twitter fs-5"></i>
                    </a>
                    <ReactTooltip class="col-auto fs-6" id="share-btn" place="left" effect="float">
                        Inpire Others!
                    </ReactTooltip>

                    {/* copy button */}
                    <div className="col-auto hover-scale-change"
                        
                        data-tip='saved!' data-event='click focus'
                        
                    >
                        <i class="bi bi-clipboard fs-5" data-tip data-for="copy-btn"/>

                    </div>
                    <ReactTooltip class="col-auto fs-6" id="copy-btn" place="bottom" effect="float">
                        Copy the Quote!
                    </ReactTooltip>
                    
                    <ReactTooltip class="col-auto bg-success fs-6" globalEventOff='click'/>

                </div>
            </div>

            {/* author image */}
            <div className="col-12 d-flex justify-content-center align-items-center">
        
                <img
                    alt={`${randomAuthors[randomQuoteId]}`}
                    src={`https://robohash.org/${[randomQuoteId]}?&&size=180x180`}
                    />        
            
            </div>

            {/* quote */}
            <div class="col-12 p-4 bg-dark">
                <div class="row">
                    
                {/* quote mark*/}
                    <i class="bi bi-quote fs-1">
                    
                        {/* quote text*/}
                        <span class="fst-normal fs-2"  style={{color: randomColor}}>{randomQuotes[randomQuoteId]}</span>
                    
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