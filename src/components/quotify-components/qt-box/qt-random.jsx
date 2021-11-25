import React from "react";

const RandomQuote = ({ randomQuoteId, authorsText, quotesText, handleClick, randomColor }) => ( 
    <div >    
        <div class="row m-4 fw-bold pt-5">
            <div class='col-6 col-sm-5 col-lg-3 p-lg-4'>
                <div class="row" style={{backgroundColor: `${randomColor}`}}>
                    <div class="col-12" style={{marginTop: "-80px"}}>
                        <img alt='img' src={`https://robohash.org/${[randomQuoteId]}?&&size=180x180`}/>
                    </div>
                    <div class="col-12 fs-4" style={{color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.534)"}}>
                    {authorsText[randomQuoteId]}
                    </div>
                </div>
                <div class='row pt-4 justify-content-start'>
                <button type="button" class="col-auto  btn btn-lg btn-outline-success">
                        <i class="bi bi-share"></i>
                </button>
                <button type="submit" class="col-auto ms-2 btn btn-lg btn-outline-primary" onClick={() => handleClick()}>
                <i class="bi bi-quote"></i>        
                </button>
                
                 </div>
            </div>
            <div class="col-12 col-sm-10 col-md-7 col-lg-8 fs-2 px-4">
                <div class="row">
                <div class="col-12">
                    <i class="bi bi-quote fs-1" style={{color: randomColor}}></i>
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