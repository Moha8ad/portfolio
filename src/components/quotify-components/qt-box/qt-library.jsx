import React from "react";

import './qt-library.styles.scss'

const LibraryQuote = ({ randomColor, searchByName }) => ( 
    <div class="container-fluid">
        <div class="row d-flex justify-content-center">
            {searchByName.map((result, id) => (
                <div class="col-10 col-sm-9 col-md-4 px-4 py-1 border border-secondary"> 
                    <div class="row" >
                        <div class="col-12">
                            <div class="row d-flex justify-content-center ">
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
                                
                                <div class="row p-0" style={{minHeight: "200px"}}>
                                    <div class="col-12 p-0" 
                                    >
                                        <div class="fs-5 px-2 d-md-none" style={{color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.700)"}}>
                                            {result.author}
                                        </div>
                                        <div class="text-secondary p-2 fs-4">
                                            {result.quote}
                                            
                                                <button 
                                                type="button" 
                                                class="btn text-secondary"
                                                onClick={() =>  navigator.clipboard.writeText(`${result.quote} --${result.author}`)}
                                                > 
                                                    <i class="bi bi-clipboard" />
                                                </button>
                                                {/* Share Button */}               
                                                <button 
                                                type="submit" 
                                                class="btn p-0 text-secondary"
                                                >        
                                                    <i class="bi bi-share"></i>
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
    </div>
)

export default LibraryQuote;