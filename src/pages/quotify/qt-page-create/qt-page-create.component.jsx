import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import QuotifyNavbar from '../../../components/quotify-components/qt-navbar/qt-navbar.component'
import QuotifyTopbar from '../../../components/quotify-components/qt-topbar/qt-topbar.component';
import QuotifyFooter from '../../../components/quotify-components/qt-footer/qt-footer.component';
import QuotifyMainCreate from '../../../components/quotify-components/qt-main-create/qt-main-create.component';

import { addQuoteCard } from '../../../redux/quote/quote.actions';

class SearchPageQuotify extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchField: '',
            authorInput: '',
            quoteInput: '',
            authorId: 121,
            quoteId: 121
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        
        this.setState({ 
            [name]: value
        });
    }

    handleSubmit = () => {
        this.setState({ 
            authorInput: '',
            quoteInput: '',
            authorId: this.state.authorId + 1,
            quoteId: this.state.quoteId + 1
        });   

        const { authorInput, quoteInput, authorId, quoteId } = this.state
        this.props.addQuoteCard( authorInput, quoteInput, quoteId, authorId)             
    }

    render() {
        const { authorInput, quoteInput, searchField } = this.state;
        const { history, addedQuoteCard } = this.props;

        const searchByNameaddedQuoteCard = addedQuoteCard.filter(name => (
            name.author.toLowerCase().includes(this.state.searchField.toLowerCase())
        ))
        
        return (
            <div className="container-fluid">
                <div class='row'>
                    <QuotifyNavbar />
                    <div className="qt-main col-12 col-sm-10 overflow-scroll">
                        <div class="row">
                             <QuotifyTopbar 
                                midPart= { addedQuoteCard.length > 0 ? "searchBox" : null }
                                back={() => history.goBack()}
                                forward={() => history.goForward()}
                                handleChange={this.handleChange}
                                name="searchField"
                            />
                        
                            <QuotifyMainCreate 
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                searchByNameaddedQuoteCard= {searchByNameaddedQuoteCard}
                                authorInput={authorInput} 
                                quoteInput={quoteInput}
                            />
                        </div>
                    </div>
                    <QuotifyFooter />
                </div>    
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addQuoteCard: (author, quote, quoteId, authorId) => dispatch(addQuoteCard(author, quote, quoteId, authorId))
})

const mapStateToProps = ({ quote: { addedQuoteCard }}) => ({
    addedQuoteCard
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchPageQuotify));