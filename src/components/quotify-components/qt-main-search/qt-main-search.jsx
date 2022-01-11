import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import QuotifyButtonPanel from '../qt-button-panel/qt-button-panel.component';

import './qt-main-search.styles.scss'

const QuotifyMainSearch = ({ result, randomColor }) => (
    <div class="row d-flex justify-content-center m-3">  
        <div class="col-12 col-sm-10 col-md-8 col-xl-6">
            <div class="row">
                <div class="col-12 p-3 fs-4 border border-2 rounded-2 hover-scale">
                    {/* Quote Text */}
                    <i class="bi bi-quote fs-3 d-inline" style={{color: randomColor}}>
                    <span class="text-light fst-normal fs-4">{result.quote}</span>
                   
                    </i>
                    <div class="col-12 fs-5 fst-italic fs-6" style={{color: randomColor}}> {result.author}</div>
                    <div class="col-12 d-flex justify-content-end align-items-end">
                        
                        <QuotifyButtonPanel item = {result} />
                        
                    </div>
                </div>
            </div>
        </div>   
    </div>
)



const mapStateToProps = ({quote: {randomColor}}) => ({
    randomColor
})

export default connect(mapStateToProps)(withRouter(QuotifyMainSearch));