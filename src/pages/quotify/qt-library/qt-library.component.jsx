import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import QuotifyNavbar from '../../../components/quotify-components/qt-navbar/qt-navbar.component'
import QuotifyTopbar from '../../../components/quotify-components/qt-topbar/qt-topbar.component';
import QuotifyFooter from '../../../components/quotify-components/qt-footer/qt-footer.component';

import LibraryQuote from '../../../components/quotify-components/qt-box/qt-library-box/qt-library-box';

class LibraryQuotify extends React.Component {
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
        
        const { searchField } = this.state;
        const { history, quotesDB } = this.props;

        const searchByName = quotesDB.filter(name => (
            name.author.toLowerCase().includes(searchField.toLowerCase())
        ))

        return (
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
                                    handleChange={this.handleChange}
                                />
                            </div>
                            <div>
                                {(searchByName.length > 0) 
                                ?
                                    <div>
                                        <LibraryQuote 
                                        searchByName={searchByName}
                                        />
                                        <div class="mb-5 pb-5"/>
                                    </div>
                                :
                                    <div class="col-12 col-sm-10 col-md-8 col-lg-6 p-4 text-danger">
                                            <h1>Result Not Found</h1>
                                    </div>
                                }
                            </div>
                            <QuotifyFooter />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}  


const mapStateToProps = ({quote: {quotesDB}}) => ({
    quotesDB
})

export default connect(mapStateToProps)(withRouter(LibraryQuotify));