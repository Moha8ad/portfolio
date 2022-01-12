import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import QuotifyNavbar from '../../../components/quotify-components/qt-navbar/qt-navbar.component'
import QuotifyTopbar from '../../../components/quotify-components/qt-topbar/qt-topbar.component';
import QuotifyFooter from '../../../components/quotify-components/qt-footer/qt-footer.component';

import QuotifyMainSearch from '../../../components/quotify-components/qt-main-search/qt-main-search';

import QuotifyCard from '../../../components/quotify-components/qt-card/qt-card.component';
import QuotifyMainListBox from '../../../components/quotify-components/qt-main-list-box/qt-main-list-box.component';

import { addQuoteCard } from '../../../redux/quote/quote.actions';

class SearchPageQuotify extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        const { authorInput, quoteInput} = this.state;
        const { history } = this.props;


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
                            <div class="col-12 text-secondary">
                                <div className='row'>
                                    <div class="col-12">
                                        <div class="fs-4 py-2">Add Quote to your personal library here</div>
                                        <div class="py-4 ">Enter Author Name and Quote Below</div>
                                    </div>
                                        <div className="col-12">
                                            <input
                                                type='text'
                                                name='authorInput'
                                                value={authorInput}
                                                onChange={this.handleChange}
                                                placeholder='Enter Author Name'
                                                required
                                            />
                                        </div>
                                        <div className="col-12 my-2">
                                            <input
                                                type='text'
                                                name='quoteInput'
                                                value={quoteInput}
                                                onChange={this.handleChange}
                                                placeholder='Enter Quote'
                                                required
                                            />
                                        </div>
                                        <div className='col-12 py-4'>
                                        <button class="btn btn-success me-1 mb-1" onClick={this.handleSubmit}> Add to My Library </button>
                                        </div>
                                    <div class="col-12">
                                    <QuotifyMainListBox 
                                        header = "My Quotes Library"
                                        list= { this.props.addedQuoteCard }
                                        searchList = { this.props.addedQuoteCard }
                                    />
                                    
                                    </div>
                                </div>


                            </div>
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

const mapStateToProps = ({quote: {quotesDB, addedQuoteCard}}) => ({
    quotesDB, addedQuoteCard
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchPageQuotify));