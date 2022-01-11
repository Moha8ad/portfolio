import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import QuotifyNavbar from '../../../components/quotify-components/qt-navbar/qt-navbar.component';
import QuotifyTopbar from '../../../components/quotify-components/qt-topbar/qt-topbar.component';
import QuotifyFooter from '../../../components/quotify-components/qt-footer/qt-footer.component';
import QuotifyMainList from '../../../components/quotify-components/qt-main-list/qt-main-list.component';

class ListPageQuotify extends React.Component {
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
        
        const { history, inspirationalList, insightfulList } = this.props;

        const searchByNameinspirationalList = inspirationalList.filter(name => (
            name.author.toLowerCase().includes(this.state.searchField.toLowerCase())
        ))
        
        const searchByNameinsightfulList = insightfulList.filter(name => (
            name.author.toLowerCase().includes(this.state.searchField.toLowerCase())
        ))

        return (
            <div className="container-fluid">
                <div class='row'>
                    <QuotifyNavbar />
                    <div className="qt-main col-12 col-sm-10 overflow-scroll">
                        <div class="row">
                        {inspirationalList.length || insightfulList.length > 0 ?

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
                            <QuotifyMainList
                            searchByNameinspirationalList={searchByNameinspirationalList}
                            searchByNameinsightfulList={searchByNameinsightfulList}
                            />
                            <QuotifyFooter />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ quote: { inspirationalList, insightfulList }}) => ({
    inspirationalList, insightfulList
})

export default connect(mapStateToProps)(withRouter(ListPageQuotify));