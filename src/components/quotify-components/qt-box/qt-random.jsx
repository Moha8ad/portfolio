import React from "react";

const RandomQuote = ({ randomQuoteId, randomAuthors, randomQuotes, handleClick, randomColor }) => ( 
        <div class="row d-flex justify-content-center p-0 m-0"> 
            <div class="col-12 mt-5 d-flex justify-content-center"> 
                <div class="row d-flex justify-content-center" >
                    <div class="col-7 col-sm-auto d-flex align-items-end border border-2 border-light rounded-1" 
                        style={{backgroundColor: randomColor}}>
                        <div class="row d-flex justify-content-center" >
                            <div class="col-12 d-flex justify-content-center px-2">
                                <img 
                                    style={{marginTop: "-80px"}} 
                                    alt='img'
                                    src={`https://robohash.org/${[randomAuthors[randomQuoteId]]}?&&size=180x180`}
                                />
                            </div>
                            <div class="col-12 text-center fs-4" style={{color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.534)"}}>
                                {randomAuthors[randomQuoteId]}
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="row" 
                            style={{ color: randomColor}} >
                            {/* Repeat Button */}
                            <button 
                            type="button" 
                            class="btn"
                            style={{color: randomColor}} 
                            data-toggle="tooltip" 
                            data-placement="left" 
                            title="Get Inspired!"
                            onClick={handleClick}
                            >   
                                <i class="bi bi-arrow-repeat fs-3"></i>        
                            </button>
                           {/* Share Button */}               
                            <button 
                            type="submit" 
                            class="btn my-sm-3"
                            style={{color: randomColor}}
                            data-toggle="tooltip" 
                            data-placement="left" 
                            title="Inspire Others!"
                            >        
                                <i class="bi bi-share fs-4"></i>
                            </button>
                            
                            {/* Copy Button */}
                            <button 
                            type="button" 
                            class="btn"
                            style={{color: randomColor}}
                            data-toggle="tooltip" 
                            data-placement="left" 
                            title="Copy"
                            onClick={() =>  navigator.clipboard.writeText(`${randomQuotes[randomQuoteId]} --${randomAuthors[randomQuoteId]}`)}
                            > 
                                <i class="bi bi-clipboard fs-4" />
                            </button>
                        </div>
                    </div>
                </div> 
            </div>  
            <div class="col-12 col-sm-10 col-md-8 col-xl-6 d-flex justify-content-center">
                <div class="row">
                    <div class="col-12 my-3 mb-5 pt-3 p-5 fs-3">
                        {/* Quote Text */}
                        <i class="bi bi-quote fs-1 d-inline" style={{color: randomColor}}>
                        <span class="text-light fst-normal">{randomQuotes[randomQuoteId]}</span>
                        </i>
                        
                    </div>
                    <div class="mb-5"/>
                </div>
            </div>
        </div>
)

export default RandomQuote;