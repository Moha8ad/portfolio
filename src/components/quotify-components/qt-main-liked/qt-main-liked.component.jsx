import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { setLikedQuote } from "../../../redux/quote/quote.actions";

import './qt-main-liked.styles.scss';

class QuotifyMainLiked extends React.Component {

    render() {
        const { randomColor, setLikedQuote, likedQuotesDB } = this.props;
        
        return ( 
                <div class="d-flex flex-wrap justify-content-center">
                {
                    likedQuotesDB.length < 1 ?
                    <div class="p-4 text-center">
                        <div class="pb-4 text-secondary">
                            <span class="fs-2">Quotes you like will appear hear</span>
                            <br />
                            <span class="fs-4">Save quotes by tapping the heart icon.</span>
                            <br />
                        </div>
                        <button class="btn btn-primary fs-5" type="button">
                            <Link to='library' class="link-light">Find Quotes</Link>
                        </button>
                    </div>
                    :
                    ''
                }
                {likedQuotesDB.map((liked) => 
                    
                            <div class="col-12 col-sm-10 col-md-6 col-lg-4 px-4 py-3">
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
                                                onClick={() =>
                                                    setLikedQuote(liked)
                                                }
                                                > 
                                                    
                                                    <i class="bi bi-heart-fill text-danger fs-5" /> {liked.star}
                                                        
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
                            :
                            <div></div>
                        
                        </div>
                    )}
                </div>
        )
    }   
}

const mapStateToProps = ({ quote: { randomColor, likedQuotesDB }}) => ({
    randomColor, likedQuotesDB
})

const mapDispatchToProps = dispatch => ({
    setLikedQuote: likedQuote => dispatch(setLikedQuote(likedQuote))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuotifyMainLiked);