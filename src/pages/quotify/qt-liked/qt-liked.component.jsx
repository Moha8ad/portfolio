import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import QuotifyNavbar from '../../../components/quotify-components/qt-navbar/qt-navbar.component'
import QuotifyTopbar from '../../../components/quotify-components/qt-topbar/qt-topbar.component';
import QuotifyFooter from '../../../components/quotify-components/qt-footer/qt-footer.component';


const LikedQuotify = ({ history, likedQuote }) => (
    <div className="container-fluid">
    <div class='row'>
        <QuotifyNavbar />
        <div className="qt-main col-12 col-sm-10 overflow-scroll">
     
    <div class="row">
            <div className="qt-topbar col-12 sticky-top me-auto py-2">
                <QuotifyTopbar 
                    midPart={"searchBox"}
                    back={() => history.goBack()}
                    forward={() => history.goForward()}
                />
            </div>
            <div class="col-12 text-light">
                
                {
                    likedQuote.length < 1 ?
                    <h1>No Liked Quote</h1>
                    :
                    ''
                }
            
                {likedQuote.map((liked)=> 
                    <div class="row liked-box border border-1 rounded-2 py-3 m-3">
                        <div className="col-3">
                            <div className="row">
                                <div className="col-12 pb-4">
                                    <div className="row ">
                                        <div className="col-12 fs-1 pb-2 d-flex justify-content-center">
                                            <img
                                            alt='img'
                                            src={`https://robohash.org/${[liked.id]}?&&size=180x180`}
                                            />
                                        </div>
                                        <div className="col-12 text-light text-center fs-5">{liked.author}</div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row d-flex justify-content-center text-secondary">
                                        <div className="col-auto">copy</div>
                                        <div className="col-auto">like</div>
                                        <div className="col-auto">share</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9 d-flex align-self-center">
                            <h1 class="text-warning fs-3"> {liked.quote}</h1>
                        </div>   
                    </div>
                )}
            </div>
            <QuotifyFooter />

        </div>
        </div>
        </div>
        </div>

)

const mapStateToProps = ({ quote: { likedQuote }}) => ({
    likedQuote
})

export default connect(mapStateToProps)(withRouter(LikedQuotify));