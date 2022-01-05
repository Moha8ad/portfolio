import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth, createUserProfileDocument  } from '../../../firebase/firebase.utils.js';

import QuotifyTopbar from '../../../components/quotify-components/qt-topbar/qt-topbar.component';
import QuotifyNavbar from '../../../components/quotify-components/qt-navbar/qt-navbar.component';
import QuotifyFooter from '../../../components/quotify-components/qt-footer/qt-footer.component';

import QuotifyMainHome from '../../../components/quotify-components/qt-main-home/qt-main-home.component'

import { setCurrentUser } from '../../../redux/user/user.actions';
import { setRandomQuoteId } from '../../../redux/quote/quote.actions';
import { generateRandomColor } from '../../../redux/quote/quote.actions';

import '../quotify.styles.scss';

class HomePageQuotify extends React.Component {

    handleClick = (e) => {
        e.preventDefault()
        this.props.setRandomQuoteId(Math.floor(Math.random()*this.props.quotesDB.length))
        this.props.generateRandomColor(Math.floor(Math.random()*25))
    }
    
    unsubscribeFromAuth = null;

    componentDidMount() {
    
        const { setCurrentUser } = this.props;
        
        this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data() 
                    });
                });
            } 
            setCurrentUser(userAuth)
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {      

        const { history, quotesDB } = this.props;

        return(
            
            <div className="container-fluid">
                <div class='row'>
                    <QuotifyNavbar/>
                    <div className="qt-main col-12 col-sm-10 overflow-scroll"> 
                        <div class="row">
                            <div className="qt-topbar col-12 sticky-top me-auto py-2">
                                <QuotifyTopbar 
                                forward={() => history.goForward()}
                                />
                            </div>
                            <div className="col-12">
                                <QuotifyMainHome
                                    randomAuthors={quotesDB.map(i => i.author)} 
                                    randomQuotes={quotesDB.map(i => i.quote)} 
                                    randomIds={quotesDB.map(i => i.id)}
                                    handleClick={this.handleClick}
                                />         
                            </div>
                        </div>
                    </div>
                    <QuotifyFooter />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ quote: { quotesDB } }) => ({
    quotesDB
})
  
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    setRandomQuoteId: randomQuoteId => dispatch(setRandomQuoteId(randomQuoteId)),
    generateRandomColor: randomColor => dispatch(generateRandomColor(randomColor))
  });

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(HomePageQuotify));