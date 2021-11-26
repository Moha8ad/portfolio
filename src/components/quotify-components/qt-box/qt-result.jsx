import React from "react";

const ResultQuote = ({ result, randomColor }) => (
    <div >    

        {/* Quote BOX DIV */}
        <div class="row m-4 fw-bold pt-5">

            {/* Author BOX & Button BOX DIVs */}
            <div class='d-flex flex-wrap col-12 col-md-4 col-lg-3 
                        align-items-center mb-4 mb-md-0'>
                
                {/* Author BOX DIV */}
                <div
                    class="row col-5 col-md-12 me-auto border border-3 rounded-2 border-light" 
                    style={{backgroundColor: `${randomColor}`}}
                >
                    {/* Image DIV */}
                    <div 
                        class="col-12" 
                        style={{marginTop: "-80px"}}
                    >
                    
                        <img 
                            alt='img' 
                            src={`https://robohash.org/${result.id}?&&size=180x180`}
                        />
                    
                    </div>
                    
                    {/* Author DIV */}
                    <div 
                        class="col-12 fs-4" 
                        style={{
                            color: randomColor, 
                            backgroundColor:"rgba(26, 21, 25, 0.534)"
                        }}
                    >

                        {result.author}
                    
                    </div>

                </div>
                
                {/* Button BOX DIV */}
                <div 
                    class='row col-7 col-md-12 mt-4 border border-2 rounded-2 border-light 
                           d-flex justify-content-center align-self-end'
                    style={{backgroundColor: randomColor}}
                >
                    {/* Button BOX */}
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

                        {/* Copy Button */}
                        <button 
                            type="button" 
                            class="col-auto btn btn-lg mx-2"
                            style={{color: randomColor}}
                            data-toggle="tooltip" 
                            data-placement="left" 
                            title="Copy"
                            onClick={() =>  navigator.clipboard.writeText(`${result.quote} --${result.author}`)}
                        > 

                            <i class="bi bi-clipboard fs-4" />
                            
                        </button> 
                        
                    </div>

                </div>

            </div>
            
            {/* Quote DIV */}
            <div class="col-12 col-md-8 col-lg-8 fs-2 
                        border border-3 border-light rounded-2
                        d-flex align-items-center"
            >
                
                <div class="col-12">
                    
                    {/* Quote Text */}
                    <i class="bi bi-quote fs-1" style={{color: randomColor}}></i>
                    
                    {result.quote} 
                
                </div>       
                
            </div>  
        
        </div>
        {/* BLOCK SPACE */}
        <span class="d-block p-4 m-4"/>

    </div>
   
)

export default ResultQuote;