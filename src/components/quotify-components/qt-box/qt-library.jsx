import React from "react";

import './qt-library.styles.scss'

const LibraryQuote = ({ randomColor, searchByName }) => ( 
    <div class="row d-flex justify-content-center">
    {searchByName.map((result, id) => (
        <div class="col-10 col-sm-5 m-4"> 
            <div class="row" >
                <div class="col-12 border border-2 border-light rounded-1" 
                    
                >
                    <div class="row d-flex justify-content-center" >
                        <div class="col-4 d-flex justify-content-center px-2">
                            <img 
                                alt='img'
                                src={`https://robohash.org/${[id]}?&&size=180x180`}
                            />
                           
                        </div>
                            <div class="p-0" style={{backgroundColor: randomColor}}>
                                <div class="col-12 fs-4 p-2" 
                                    style={{color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.534)"}}>
                                
                                    {result.author}
                                <div class="text-light">
                                    {result.quote}
                                    <button 
                                    type="button" 
                                    class="btn"
                                    style={{color: randomColor}}
                                    onClick={() =>  navigator.clipboard.writeText(`${result.quote} --${result.author}`)}
                                    > 
                                        <i class="bi bi-clipboard fs-4" />
                                    </button>
                                    {/* Share Button */}               
                                    <button 
                                    type="submit" 
                                    class="btn my-sm-3"
                                    style={{color: randomColor}}
                                    >        
                                        <i class="bi bi-share fs-4"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))}
    </div>
)

export default LibraryQuote;