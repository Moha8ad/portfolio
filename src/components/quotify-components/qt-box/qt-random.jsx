import React from "react";

const RandomQuote = ({ randomQuoteId, authorsText, quotesText, handleClick, randomColor }) => ( 
    <div >    
        <div class="row m-4 fw-bold pt-5">
            <div class='col-3 align-self-center p-4' >
                <div class="row border border-dark border-3" style={{backgroundColor: `${randomColor}`}}>
                    <div class="col-12 col align-self-end" style={{marginTop: "-80px"}}>
                        <img alt='img' src={`https://robohash.org/${[randomQuoteId]}?&&size=180x180`}/>
                    </div>
                    <div class="col-12 align-self-end fs-4 bg-dark" style={{color: randomColor}}>
                    {authorsText[randomQuoteId]}
                    </div>
                </div>
                <div class="col-12 my-4">
                        <button type="submit" class="btn btn-lg btn-primary" onClick={() => handleClick()}>
                                <i class="bi bi-quote pe-2"></i>
                                Get Inspired!
                        </button>
                        <button type="button" class="btn btn-lg btn-success my-2">
                        <i class="bi bi-share pe-2"></i>
                        Inspire Others!
                        </button>           
                </div>
            </div>
            <div class="col-9 fs-2 p-4">
                <div class="row">
                <div class="col-12">
                    <i class="bi bi-quote fs-1 pe-2" style={{color: randomColor}}></i>
                    {quotesText[randomQuoteId]} <button 
                    type="button" 
                    class="btn btn-sm btn-outline-secondary"
                    data-toggle="tooltip" 
                    data-placement="left" 
                    title="Copy"
                    onClick={() =>  navigator.clipboard.writeText(`${quotesText[randomQuoteId]} --${authorsText[randomQuoteId]}`)}
                > 
                <i class="bi bi-clipboard fs-4"></i></button> 
                </div>
                 
                </div>
                
            </div>  
        </div>
        
        <div class="d-block p-4 m-4"/>

    </div>
)

export default RandomQuote;