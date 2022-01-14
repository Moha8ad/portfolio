import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import QuotifyTopbar from '../../../components/quotify-components/qt-topbar/qt-topbar.component';
import QuotifyNavbar from '../../../components/quotify-components/qt-navbar/qt-navbar.component';
import QuotifyFooter from '../../../components/quotify-components/qt-footer/qt-footer.component';
import QuotifyMainHome from '../../../components/quotify-components/qt-main-home/qt-main-home.component'

import '../quotify.styles.scss';

class HomePageQuotify extends React.Component { 
    
    render() {              
        const { history, quotesDB, randomQuoteId } = this.props;

        const randomQuote = quotesDB.filter(card => card.quoteId === randomQuoteId)
            
        return(
            <div className="container-fluid">
                <div class='row'>
                    <QuotifyNavbar/>
                    <div className="qt-main col-12 col-sm-10 overflow-scroll"> 
                        <div class="row">
                            <QuotifyTopbar 
                                forward={() => history.goForward()}
                            />
                            <QuotifyMainHome
                                randomQuote = {randomQuote}
                                handleClick={this.handleClick}
                            />         
                        </div>
                    </div>
                    <QuotifyFooter />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ quote: { quotesDB, randomQuoteId } }) => ({
    quotesDB, randomQuoteId
})

export default connect(mapStateToProps)(withRouter(HomePageQuotify));