import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import QuotifyNavbar from '../../../components/quotify-components/qt-navbar/qt-navbar.component'
import QuotifyTopbar from '../../../components/quotify-components/qt-topbar/qt-topbar.component';
import QuotifyFooter from '../../../components/quotify-components/qt-footer/qt-footer.component';
import QuotifyMainLibrary from '../../../components/quotify-components/qt-main-library/qt-main-library.component';

class LibraryPageQuotify extends React.Component {
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
        
        const { history, quotesDB } = this.props;

        const searchByName = quotesDB.filter(name => (
            name.author.toLowerCase().includes(this.state.searchField.toLowerCase())
        ))

        return (
            <div className="container-fluid">
                <div class='row'>
                    <QuotifyNavbar />
                    <div className="qt-main col-12 col-sm-10 overflow-scroll">
                        <div class="row">
                            <QuotifyTopbar 
                                midPart={"searchBox"}
                                back={() => history.goBack()}
                                forward={() => history.goForward()}
                                handleChange={this.handleChange}
                            />
                            <QuotifyMainLibrary 
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

const mapStateToProps = ({ quote: { quotesDB }}) => ({
    quotesDB
})

export default connect(mapStateToProps)(withRouter(LibraryPageQuotify));