import React from "react";

const RandomQuote = ({ randomQuoteId, randomAuthors, randomQuotes, handleClick, randomColor }) => ( 
    <div > 
        <div class="row fw-bold m-3 m-sm-5 
                    d-flex justify-content-center align-items-center"> 
            <div class="col-8 col-sm-6 p-2 px-sm-4 text-center" >
                <div class="row" >
                    <div class="col-12 mx-2 mt-5 mb-2 px-2 d-flex justify-content-center border border-1 rounded-2"
                         style={{ backgroundColor: randomColor }} 
                    >
                        <img 
                        style={{marginTop: "-75px"}} 
                        alt='img'
                        src={`https://robohash.org/${[randomAuthors[randomQuoteId]]}?&&size=180x180`}/>
                    </div>
                    <div class="col-12 mx-2 border border-1 rounded-2" 
                        style={{color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.534)"}}
                    >
                        {randomAuthors[randomQuoteId]}
                    </div>
                </div>
            </div>
            <div class="col-2 col-sm-1 ms-4 mt-5 d-flex justify-content-center align-items-end" 
                >
                <div class="row border border-1 rounded-2" 
                     style={{ color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.534)" }} >
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
                  
            <div class="col-12">
                <div class="row">
                    
                    <div class="col-12 my-2 mb-5 pb-5 fs-3">
                        {/* Quote Text */}
                        <i class="bi bi-quote fs-1" style={{color: randomColor}}></i>
                        
                        {randomQuotes[randomQuoteId]} 
                    </div>
                </div>
                 
            </div>
        </div>


    </div>
)

export default RandomQuote;