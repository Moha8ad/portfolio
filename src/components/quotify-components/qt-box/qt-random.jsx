import React from "react";

const RandomQuote = ({ randomQuoteId, randomAuthors, randomQuotes, handleClick, randomColor }) => ( 
    <div > 
        <div class="row fw-bold border border-1 rounded-2 border-light mx-2 my-4 bg-secondary"> 
            <div class="col-9 p-2 text-center me-auto" >
                <div class="row" >
                    <div class="col-12 mx-2 mt-5 px-2 d-flex justify-content-center border border-1 rounded-2"
                         style={{ backgroundColor: randomColor }} 
                    >
                        <img 
                        style={{marginTop: "-80px"}} 
                        alt='img'
                        src={`https://robohash.org/${[randomAuthors[randomQuoteId]]}?&&size=180x180`}/>
                    </div>
                    <div class="col-12 mx-2 p-2 border border-1 rounded-2" 
                        style={{color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.534)"}}
                    >
                        {randomAuthors[randomQuoteId]}
                    </div>
                </div>
            </div>
            <div class="col-2 m-2 border border-1 rounded-2" 
                style={{ color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.534)" }} >
                <div class="row d-flex justify-content-center">
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
                        class="btn"
                        style={{color: randomColor}}
                        data-toggle="tooltip" 
                        data-placement="left" 
                        title="Inspire Others!"
                        >        
                            <i class="bi bi-share fs-5"></i>
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
                            <i class="bi bi-clipboard fs-5" />
                        </button>
                </div>
            </div>
                  
            <div class="col-12">
                <div class="row">
                    
                    <div class="col-12 my-4 fs-3">
                        {/* Quote Text */}
                        <i class="bi bi-quote fs-1" style={{color: randomColor}}></i>
                        
                        {randomQuotes[randomQuoteId]} 
                    </div>
                </div>
                 
            </div>
        </div>

        {/* 2X BLOCK SPACE */}
        <span class="d-block p-4 m-4"/>
        <span class="d-block p-4 m-4"/>

    </div>
)

export default RandomQuote;