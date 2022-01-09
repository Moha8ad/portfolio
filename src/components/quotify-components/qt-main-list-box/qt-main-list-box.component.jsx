import React from "react";
import { Link } from "react-router-dom";

import './qt-main-list-box.styles.scss';

const QuotifyMainListBox = ({ randomColor, setLikedQuote, likedQuotesDB }) => (
            
            <div className="container d-flex text-secondary overflow-scroll">

                {
                    likedQuotesDB.length < 1 ?
                    <div class="p-4">
                        <div class="pb-4 text-secondary">
                            <span class="fs-6">Add quotes to this list by selecting add to Insightful Quotes.</span>
                            <br />
                        </div>
                        <button class="btn btn-primary fs-6" type="button">
                            <Link to='library' class="link-light">Find Quotes</Link>
                        </button>
                    </div>
                    :
                    ''
                }
                {
                    likedQuotesDB.map((liked) =>
                        <div class="col-12 col-sm-10 col-md-6 col-lg-4 p-4">
                            <div class="hover-scale row d-flex justify-content-center border border-secondary bg-dark border-2 rounded-2">
                                <div class="col-12 col-lg-6 px-2 auth-img-library-animation">
                                    <img
                                        alt='img'
                                        src={`https://robohash.org/${[liked.authorId]}?&&size=180x180`}
                                    />
                                </div>
                                <div class="col-auto col-sm-6 d-flex align-self-end fs-4 py-2 d-none d-lg-block auth-name-library-animation">
                                    <div class="px-2 border-2 rounded-2 fs-6" style={{color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.400)"}}>
                                        {liked.author}
                                    </div>
                                </div>
                                <div class="row p-1 border-2 rounded-2 overflow-scroll" style={{backgroundColor: randomColor, height: "150px"}}>
                                    <div class="col-12 p-0 border-2 rounded-2" style={{color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.400)"}}>
                                        <div class="fs-6 px-2 d-lg-none" style={{color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.400)"}}>
                                            {liked.author}
                                        </div>
                                        <div class="text-light p-2 fs-5">
                                            {liked.quote}
                                            {/* Copy Button */}
                                            <button 
                                            type="button" 
                                            class="btn ps-2 p-0"
                                            onClick={() =>  navigator.clipboard.writeText(`${liked.quote} --${liked.author}`)}
                                            > 
                                                <i class="bi bi-clipboard fs-5"  style={{color: randomColor}}/>
                                            </button>
                                            {/* Like Button */}
                                            <button 
                                                type="button" 
                                                class="btn"
                                                style={{color: randomColor}}
                                                onClick={() => setLikedQuote(liked)}
                                            >
                                                <i class="bi bi-heart-fill text-danger fs-5" />
                                            </button>
                                            {/* Share Button */}
                                            <a
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                href={`https://twitter.com/intent/tweet?text=${liked.quote} - ${liked.author}`}>
                                            <i class="bi bi-twitter fs-5" style={{color: randomColor}}/>
                                            </a>   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }      
            </div>
)


export default QuotifyMainListBox;