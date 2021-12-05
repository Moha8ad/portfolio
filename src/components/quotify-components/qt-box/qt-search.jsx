import React from "react";

const ResultQuote = ({ result, randomColor }) => (
    <div class="row d-flex justify-content-center p-0 m-0">  
            <div class="col-12 col-sm-10 col-md-8 col-xl-6 d-flex justify-content-center">
                <div class="row">
                    <div class="col-12 my-3 py-3 p-5 fs-3">
                        {/* Quote Text */}
                        <i class="bi bi-quote fs-1 d-inline" style={{color: randomColor}}>
                        <span class="text-light fst-normal">{result.quote}</span>
                        <span class="fs-4"> {result.author}</span>
                        </i>
                        {/* Copy Button */}
                        <div class="col-12">
                            <button 
                            type="button" 
                            class="btn"
                            style={{color: randomColor}}
                            data-toggle="tooltip" 
                            data-placement="left" 
                            title="Copy"
                            onClick={() =>  navigator.clipboard.writeText(`${result.quote} --${result.author}`)}
                            > 
                                <i class="bi bi-clipboard fs-4" />
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
                            <hr />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
   
)

export default ResultQuote;