import React from "react";

import './qt-library.styles.scss'

const LibraryQuote = ({ randomColor, searchByName }) => ( 
    <div class="container-fluid">
        <div class="row d-flex justify-content-center">
            {searchByName.map((result, id) => (
                <div class="col-10 col-sm-9 col-md-4 px-4 py-3"> 
                    <div class="row" >
                        <div class="col-12 ">
                            <div class="collection row d-flex justify-content-center border border-secondary bg-dark border-2 rounded-2">
                                <div class="col-12 col-sm-3 px-2">
                                    <img
                                        alt='img'
                                        src={`https://robohash.org/${[id]}?&&size=180x180`}
                                    />
                                </div>
                                <div class="col-auto d-flex align-self-end fs-4 py-2 d-none d-md-block">
                                    <div class="px-2 border-2 rounded-2" style={{color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.700)"}}>
                                        {result.author}
                                    </div>
                                </div>
                                
                                <div class="row p-1 border-2 rounded-2" style={{backgroundColor: randomColor, minHeight: "200px"}}>
                                    <div class="col-12 p-0 border-2 rounded-2" style={{color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.400)"}}>
                                        <div class="fs-5 px-2 d-md-none" style={{color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.400)"}}>
                                            {result.author}
                                        </div>
                                        <div class="text-light p-2 fs-4">
                                            {result.quote}
                                            
                                                <button 
                                                type="button" 
                                                class="btn text-light"
                                                onClick={() =>  navigator.clipboard.writeText(`${result.quote} --${result.author}`)}
                                                > 
                                                    <i class="bi bi-clipboard fs-5" />
                                                </button>
                                                {/* Share Button */}
                                                <a
                                                    rel="noopener noreferrer"
                                                    target="_blank"
                                                    href={`https://twitter.com/intent/tweet?text=${result.quote} -${result.author}`}>
                                                <i class="bi bi-twitter text-light fs-5"></i>
                                                </a>
                                                    
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