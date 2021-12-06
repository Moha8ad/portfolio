import React from "react";

import './qt-library.styles.scss'

const LibraryQuote = ({ randomColor, searchByName }) => ( 
    <div class="container-fluid">
        <div class="row d-flex justify-content-center">
            {searchByName.map((result, id) => (
                <div class="col-10 col-sm-9 col-md-5 m-4"> 
                    <div class="row" >
                        <div class="col-12 border border-2 border-light rounded-1 bg-info">
                            <div class="row d-flex justify-content-center bg-dark">
                                <div class="col-4 col-sm-3 px-2">
                                    <img
                                        alt='img'
                                        src={`https://robohash.org/${[id]}?&&size=180x180`}
                                    />
                                </div>
                                <div class="col-auto d-flex align-self-end fs-4 py-2 d-none d-md-block">
                                    <div class="px-2" style={{color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.700)"}}>
                                        {result.author}
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end align-self-end col-2 ms-auto">
                                    <button 
                                    type="button" 
                                    class="btn"
                                    style={{color: randomColor}}
                                    onClick={() =>  navigator.clipboard.writeText(`${result.quote} --${result.author}`)}
                                    > 
                                        <i class="bi bi-clipboard fs-5" />
                                    </button>
                                    {/* Share Button */}               
                                    <button 
                                    type="submit" 
                                    class="btn p-0"
                                    style={{color: randomColor}}
                                    >        
                                        <i class="bi bi-share fs-5"></i>
                                    </button>
                                </div>
                                <div class="row p-0" style={{backgroundColor: randomColor, minHeight: "200px"}}>
                                    <div class="col-12 p-0" 
                                        style={{color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.300)"}}
                                    >
                                        <div class="fs-4 px-2 d-md-none" style={{color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.700)"}}>
                                            {result.author}
                                        </div>
                                        <div class="text-light p-2 fs-3">
                                            {result.quote}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            ))}
        </div>
    </div>
)

export default LibraryQuote;