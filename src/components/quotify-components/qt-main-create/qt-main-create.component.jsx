import React from "react";
import { connect } from "react-redux";

import QuotifyHorizontalCardsBox from "../qt-horizontal-cards-box/qt-horizontal-cards-box.component";

import './qt-main-create.styles.scss';

const QuotifyMainCreate = ({ handleChange, handleSubmit, authorInput, quoteInput, addedQuoteCard, currentUser }) => (
    <div class="col-12 text-light">
        <div className='row'>
            <div class="col-12 ">
                <div class="fs-5 py-2">Add Quote to your personal library</div>
            </div>
            <div class="col-12">
                <div className="row">
                    
                    <div className="col-12 col-sm-3 py-1">
                        <div class="form-floating">
                            <textarea 
                                class="form-control text-light" 
                                placeholder="Enter Author Name" 
                                id="floatingTextarea2" 
                                type='text'
                                name='authorInput'
                                value={authorInput}
                                onChange={handleChange}
                            />
                            <label for="floatingTextarea2">Author</label>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 py-1">
                    <div class="form-floating ">
                            <textarea 
                                class="form-control text-light" 
                                placeholder="Enter Quote" 
                                id="floatingTextarea2" 
                                type='text'
                                name='quoteInput'
                                value={quoteInput}
                                onChange={handleChange}
                            />
                            <label for="floatingTextarea2">Quote</label>
                        </div>
                    </div>
                    <div className="col-12 col-sm-3 py-1">
                        <div className='col'>
                            {authorInput && quoteInput ?
                            <button class="btn btn-success py-3" onClick={handleSubmit}>
                                Add to My Library
                            </button>
                            :
                            authorInput ?
                            <button class="btn btn-outline-warning py-3" onClick={()=> alert(
                                "\n Dear " + JSON.stringify(currentUser.displayName) 
                                + "\n\n ⚠ Please enter quote's text! \n")}
                            >
                                Enter Quote
                            </button>
                            :
                            quoteInput ?
                            <button class="btn btn-outline-warning py-3" onClick={()=> alert(
                                "\n Dear " + JSON.stringify(currentUser.displayName) 
                                + "\n\n ⚠ Please enter author's name! \n")}
                            >
                                Enter Author
                            </button>
                            :
                            <button class="btn btn-outline-secondary py-3" onClick={()=> alert(
                                "\n Dear " + JSON.stringify(currentUser.displayName) 
                                + "\n\n ⚠ Please enter author's name and quote's text first! \n")}
                            >
                                Enter Author and Quote
                            </button>
                        }
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <QuotifyHorizontalCardsBox 
                    header = "My Quotes Library"
                    list= { addedQuoteCard }
                    searchList = { addedQuoteCard }
                    trash= {true}
                />
            </div>
        </div>
    </div>
)

const mapStateToProps = ({quote: {addedQuoteCard}, user: {currentUser}}) => ({
    addedQuoteCard, currentUser
})

export default connect(mapStateToProps)(QuotifyMainCreate);