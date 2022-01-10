import React from "react";
import { connect } from "react-redux";

import { setLikedQuote, setInspirationalQuote } from "../../../redux/quote/quote.actions";

import './qt-main-library.styles.scss';

class QuotifyMainLibrary extends React.Component {

    render() {
        const { randomColor, searchByName, setLikedQuote, likedQuotesDB, setInspirationalQuote } = this.props;
        
        return ( 
            <div class="d-flex flex-wrap justify-content-center">
                {searchByName.map((result) => 
                    
                    <div class="col-12 col-sm-10 col-md-6 col-lg-4 px-4 py-3">
                        <div class="hover-scale row d-flex justify-content-center border border-secondary bg-dark border-2 rounded-3">
                            <div class="col-12 col-lg-6 px-2 auth-img-library-animation">
                                <img
                                    alt='img'
                                    src={`https://robohash.org/${[result.authorId]}?&&size=180x180`}
                                />
                            </div>
                            <div class="col-auto col-sm-6 d-flex align-self-end fs-4 py-2 d-none d-lg-block auth-name-library-animation">
                                <div class="px-2 border-2 rounded-1 fs-6" style={{color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.400)"}}>
                                    {result.author}
                                </div>
                            </div>
                                    
                            <div class="row p-1 border-2 rounded-1 overflow-scroll" style={{backgroundColor: randomColor, height: "150px"}}>
                                <div class="col-12 p-0 border-2 rounded-1" style={{color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.400)"}}>
                                    <div class="fs-6 px-2" style={{color: randomColor, backgroundColor:"rgba(26, 21, 25, 0.400)"}}>
                                        <div className="row">
                                            <div className="col d-lg-none"> 
                                                {result.author}
                                            </div>
                                            <div className="col-auto ms-auto">
                                                {/* Like Button */}
                                                <span 
                                                    class="px-2"
                                                    style={{color:randomColor}}
                                                    onClick={() => setLikedQuote(result)}
                                                >
                                                {
                                                    likedQuotesDB.find(likedQuote => likedQuote.quoteId === result.quoteId) 
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
                                                    onClick={() => setInspirationalQuote(result)}
                                                >
                                                    <i 
                                                        class="bi bi-journal-plus" 
                                                        data-bs-toggle="dropdown" 
                                                        aria-expanded="false"
                                                    >
                                                    </i>
                                                    <ul class="dropdown-menu dropdown-menu-dark text-light" style={{backgroundColor:'rgba(33, 37, 41, 0.95)'}}>
                                                        <li class="dropdown-item cursor-pointer bi bi-bookmark-plus"> Inspirational List</li>
                                                        <li class="dropdown-item cursor-pointer bi bi-bookmark-dash"> Insightful List</li>
                                                    </ul>
                                                </span>
                                                {/* Copy Button */}
                                                <span
                                                class="ps-2"
                                                style={{color: randomColor}}
                                                onClick={() =>  navigator.clipboard.writeText(`${result.quote} --${result.author}`)}
                                                > 
                                                <i class="bi bi-clipboard"/>
                                                </span>
                                                {/* Share Button */}
                                                <a
                                                    rel="noopener noreferrer"
                                                    target="_blank"
                                                    href={`https://twitter.com/intent/tweet?text=${result.quote} - ${result.author}`}
                                                    style={{color: randomColor}}
                                                    class="ps-2"
                                                >
                                                <i class="bi bi-twitter"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-light p-2 fs-5">
                                        {result.quote}     
                                    </div>
                                </div>
                            </div>
                        </div>
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
    setLikedQuote: likedQuote => dispatch(setLikedQuote(likedQuote)),
    setInspirationalQuote: inspirationalQuote => dispatch(setInspirationalQuote(inspirationalQuote))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuotifyMainLibrary);