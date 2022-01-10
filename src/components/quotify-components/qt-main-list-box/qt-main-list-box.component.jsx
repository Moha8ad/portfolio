import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { setLikedQuote } from "../../../redux/quote/quote.actions";


import './qt-main-list-box.styles.scss';

const QuotifyMainListBox = ({ header, randomColor, setLikedQuote, likedQuotesDB, setListQuote, list }) => (
        <div>
            <div class="fs-4 pt-4 text-secondary">
                {header}
            </div>
            <div className="container d-flex text-secondary overflow-scroll">

                {
                    list.length < 1 ?
                    <div class="p-4">
                        <div class="pb-4 text-secondary">
                            <span class="fs-6">Quotes you add to {header} will appear here.</span>
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
                    list.map((listed) =>
                        <div class="col-12 col-sm-10 col-md-6 col-lg-4 p-4">
                            <div class="hover-scale row d-flex justify-content-center border border-secondary bg-dark border-2 rounded-2">
                                <div class="col-12 col-lg-6 px-2 auth-img-library-animation">
                                    <img
                                        alt='img'
                                        src={`https://robohash.org/${[listed.authorId]}?&&size=180x180`}
                                    />
                                </div>
                                <div class="col-auto col-sm-6 d-flex align-self-end fs-4 py-2 d-none d-lg-block auth-name-library-animation">
                                    <div class="px-2 border-2 rounded-2 fs-6" style={{color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.400)"}}>
                                        {listed.author}
                                    </div>
                                </div>
                                <div class="row p-1 border-2 rounded-1 overflow-scroll" style={{backgroundColor: randomColor, height: "150px"}}>
                                <div class="col-12 p-0 border-2 rounded-1" style={{color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.400)"}}>
                                    <div class="fs-6 px-2" style={{color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.400)"}}>
                                        <div className="row">
                                            <div className="col d-lg-none"> 
                                                {listed.author}
                                            </div>
                                            <div className="col-auto ms-auto">
                                                {/* Like Button */}
                                                <span 
                                                    class="px-2"
                                                    style={{color:randomColor}}
                                                    onClick={() => setLikedQuote(listed)}
                                                >
                                                {
                                                    likedQuotesDB.find(likedQuote => likedQuote.quoteId === listed.quoteId) 
                                                ?
                                                    <i class="bi bi-heart-fill text-danger" />
                                                :
                                                    <i class="bi bi-heart" />
                                                }
                                                </span>
                                                {/* List Button */}
                                                <span 
                                                    class="dropdown"
                                                    style={{color: randomColor}}
                                                >
                                                <span
                                                    data-bs-toggle="dropdown" 
                                                    aria-expanded="false"
                                                >
                                                
                                                    {
                                                        list.find(listedQuote => listedQuote.quoteId === listed.quoteId) 
                                                    ?
                                                    <i 
                                                        class="bi bi-journal-bookmark-fill" 
                                                        
                                                    ></i>
                                                    :
                                                    <i 
                                                        class="bi bi-journal-bookmark" 
                                                    ></i>
                                                    }
                                                </span>
                                                    
                                                    <ul class="dropdown-menu dropdown-menu-dark text-light" style={{backgroundColor:'rgba(33, 37, 41, 0.95)'}}>
                                                        
                                                    {
                                                        list.find(listedQuote => listedQuote.quoteId === listed.quoteId) 
                                                    ?
                                                        <li 
                                                            class="dropdown-item cursor-pointer bi bi-bookmark-dash" 
                                                            onClick={() => setListQuote(listed)}
                                                        > 
                                                            <span class='px-2'>Inspirational List</span>
                                                        </li>
                                                    :
                                                        <li 
                                                            class="dropdown-item cursor-pointer bi bi-bookmark-plus" 
                                                            onClick={() => setListQuote(listed)}
                                                        > 
                                                            <span class='px-2'>Inspirational List</span>
                                                        </li>
                                                    }
                                                        <li 
                                                            class="dropdown-item cursor-pointer bi bi-bookmark-dash"
                                                        >
                                                            <span class='px-2'>Insightful List</span>
                                                        </li>
                                                    </ul>
                                                </span>
                                                {/* Copy Button */}
                                                <span
                                                class="ps-2"
                                                style={{color: randomColor}}
                                                onClick={() =>  navigator.clipboard.writeText(`${listed.quote} --${listed.author}`)}
                                                > 
                                                <i class="bi bi-clipboard"/>
                                                </span>
                                                {/* Share Button */}
                                                <a
                                                    rel="noopener noreferrer"
                                                    target="_blank"
                                                    href={`https://twitter.com/intent/tweet?text=${listed.quote} - ${listed.author}`}
                                                    style={{color: randomColor}}
                                                    class="ps-2"
                                                >
                                                <i class="bi bi-twitter"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-light p-2 fs-5">
                                        {listed.quote}     
                                    </div>
                                </div>
                            </div>
                           </div>
                        </div>
                    )
                }      
            </div>
            <hr class="text-secondary" />

        </div>  
)


const mapStateToProps = ({ quote: { randomColor, likedQuotesDB }}) => ({
    randomColor, likedQuotesDB
})

const mapDispatchToProps = dispatch => ({
    setLikedQuote: likedQuote => dispatch(setLikedQuote(likedQuote)),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuotifyMainListBox);