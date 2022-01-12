import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import QuotifyNavbar from '../../../components/quotify-components/qt-navbar/qt-navbar.component';
import QuotifyTopbar from '../../../components/quotify-components/qt-topbar/qt-topbar.component';
import QuotifyFooter from '../../../components/quotify-components/qt-footer/qt-footer.component';
import QuotifyMainLiked from '../../../components/quotify-components/qt-main-liked/qt-main-liked.component';

class LikedPageQuotify extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchField: ''
        }
    }

    handleChange = e => (
        this.setState({
            searchField: e.target.value
       })
    )

    render() {
        
        const { history, likedQuotesDB } = this.props;

        const searchByName = likedQuotesDB.filter(name => (
            name.author.toLowerCase().includes(this.state.searchField.toLowerCase())
        ))

        return (
            <div className="container-fluid">
                <div class='row'>
                    <QuotifyNavbar />
                    <div className="qt-main col-12 col-sm-10 overflow-scroll">
                        <div class="row">
                        {searchByName.length > 0 ?

                            <QuotifyTopbar 
                                midPart={"searchBox"}
                                back={() => history.goBack()}
                                forward={() => history.goForward()}
                                handleChange={this.handleChange}
                            />
                        :
                            <QuotifyTopbar 
                                midPart={""}
                                back={() => history.goBack()}
                                forward={() => history.goForward()}
                                handleChange={this.handleChange}
                            />
                        }
                            <QuotifyMainLiked 
                                searchByName={searchByName} 
                            />
                        </div>
                    </div>
                    <QuotifyFooter />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ quote: { likedQuotesDB }}) => ({
    likedQuotesDB
})

export default connect(mapStateToProps)(withRouter(LikedPageQuotify));