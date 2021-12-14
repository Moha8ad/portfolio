import React from "react";

const ResultQuote = ({ result, randomColor }) => (
    <div class="row d-flex justify-content-center m-3">  
        <div class="col-12 col-sm-10 col-md-8 col-xl-6">
            <div class="row">
                <div class="col-12 p-3 fs-4 border border-2 rounded-2 hover-scale">
                    {/* Quote Text */}
                    <i class="bi bi-quote fs-3 d-inline" style={{color: randomColor}}>
                    <span class="text-light fst-normal">{result.quote}</span>
                   
                    </i>
                    <div class="col-12 fs-5 fst-italic" style={{color: randomColor}}> {result.author}</div>
                    {/* Copy Button */}
                    <div class="col-12 d-flex justify-content-end align-items-end">
                        <button 
                        type="button" 
                        class="btn"
                        style={{color: randomColor}}
                        data-toggle="tooltip" 
                        data-placement="left" 
                        title="Copy"
                        onClick={() =>  navigator.clipboard.writeText(`${result.quote} --${result.author}`)}
                        > 
                            <i class="bi bi-clipboard fs-5" />
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
                            <i class="bi bi-share fs-5"></i>
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>   
    </div>
)

export default ResultQuote;