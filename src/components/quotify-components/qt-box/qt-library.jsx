import React from "react";

import './qt-box.styles.scss'

const LibraryQuote = ({ randomColor, searchByName }) => ( 
    <div class="container-fluid">
        <div class="row d-flex justify-content-center">
            {searchByName.map((result, id) => (
                <div class="col-10 col-sm-9 col-md-6 col-lg-4 px-4 py-3"> 
                    <div class="row" >
                        <div class="col-12 ">
                            <div class="hover-scale row d-flex justify-content-center border border-secondary bg-dark border-2 rounded-2">
                                <div class="col-12 col-lg-6 px-2 auth-img-library-animation">
                                    <img
                                        alt='img'
                                        src={`https://robohash.org/${[id]}?&&size=180x180`}
                                    />
                                </div>
                                <div class="col-auto col-sm-6 d-flex align-self-end fs-4 py-2 d-none d-lg-block auth-name-library-animation">
                                    <div class="px-2 border-2 rounded-2" style={{color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.400)"}}>
                                        {result.author}
                                    </div>
                                </div>
                                
                                <div class="row p-1 border-2 rounded-2 overflow-scroll" style={{backgroundColor: randomColor, height: "150px"}}>
                                    <div class="col-12 p-0 border-2 rounded-2" style={{color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.400)"}}>
                                        <div class="fs-5 px-2 d-lg-none" style={{color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.400)"}}>
                                            {result.author}
                                        </div>
                                        <div class="text-light p-2 fs-4">
                                            {result.quote}
                                            
                                                <button 
                                                type="button" 
                                                class="btn"
                                                onClick={() =>  navigator.clipboard.writeText(`${result.quote} --${result.author}`)}
                                                > 
                                                    <i class="bi bi-clipboard fs-5"  style={{color: randomColor}}/>
                                                </button>
                                                {/* Share Button */}
                                                <a
                                                    rel="noopener noreferrer"
                                                    target="_blank"
                                                    href={`https://twitter.com/intent/tweet?text=${result.quote} - ${result.author}`}>
                                                <i class="bi bi-twitter fs-5" style={{color: randomColor}}/>
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