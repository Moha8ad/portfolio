import React from "react";

const RandomQuote = ({ randomQuoteId, authorsText, quotesText, handleClick, randomColor }) => ( 
    <div >    
    
        <div class="row flex-wrap m-4 fw-bold pt-5">

            {/* Author & Panel DIV */}
            <div class='col-6 col-sm-5 col-lg-3 p-lg-4'>
          
                <div ``
                    class="row border border-3 rounded-2 border-light" 
                    style={{backgroundColor: `${randomColor}`}}
                >
            
                    <div 
                        class="col-12" 
                        style={{marginTop: "-80px"}}
                    >
                    
                        <img 
                            alt='img' 
                            src={`https://robohash.org/${[randomQuoteId]}?&&size=180x180`}
                        />
                    
                    </div>

                    <div 
                        class="col-12 fs-4" 
                        style={{
                            color: randomColor, 
                            backgroundColor:"rgba(26, 21, 25, 0.534)"
                        }}
                    >

                        {authorsText[randomQuoteId]}
                    
                    </div>

                </div>

                <div 
                    class='row mt-4 border border-2 rounded-2 border-light justify-content-center'
                    style={{backgroundColor: randomColor}}
                >
                    {/* Button Panel */}
                    <div
                        class="row justify-content-center"
                        style={{backgroundColor:"rgba(26, 21, 25, 0.834)"}}
                    >
                    
                        {/* Share Button */}
                        <button 
                            type="submit" 
                            class="col-auto btn btn-lg"
                            style={{color: randomColor}}
                            data-toggle="tooltip" 
                            data-placement="left" 
                            title="Inspire Others!"
                        >
                                
                            <i class="bi bi-share fs-4"></i>

                        </button>
                        
                        {/* Repeat Button */}
                        <button 
                            type="button" 
                            class="col-auto mx-2 btn btn-lg"
                            style={{color: randomColor}} 
                            data-toggle="tooltip" 
                            data-placement="left" 
                            title="Get Inspired!"
                            onClick={() => handleClick()}
                        >

                            <i class="bi bi-arrow-repeat fs-2"></i>        
                        
                        </button>

                        {/* Copy Button */}
                        <button 
                            type="button" 
                            class="col-auto btn btn-lg"
                            style={{color: randomColor}}
                            data-toggle="tooltip" 
                            data-placement="left" 
                            title="Copy"
                            onClick={() =>  navigator.clipboard.writeText(`${quotesText[randomQuoteId]} --${authorsText[randomQuoteId]}`)}
                        > 

                            <i class="bi bi-clipboard fs-4" />
                            
                        </button> 

                    </div>

                </div>

            </div>
            
            {/* Quote DIV */}
            <div class="col-12 col-sm-10 col-md-7 col-lg-8 fs-2 m-4 
                        border border-3 border-light rounded-2"
            >
                
                <div class="row">
                
                    <div class="col-12">
                        
                        {/* Quote Text */}
                        <i class="bi bi-quote fs-1" style={{color: randomColor}}></i>
                        {quotesText[randomQuoteId]} 
                   
                    </div>       
                
                </div>   
            
            </div>  
        
        </div>
        {/* BLOCK SPACE */}
        <span class="d-block p-4 m-4"/>

    </div>
)

export default RandomQuote;