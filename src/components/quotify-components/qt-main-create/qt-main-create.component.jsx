import React from "react";
import { connect } from "react-redux";

import QuotifyHorizontalCardsBox from "../qt-horizontal-cards-box/qt-horizontal-cards-box.component";

import './qt-main-create.styles.scss';

const QuotifyMainCreate = ({ handleChange, handleSubmit, authorInput, quoteInput, addedQuoteCard }) => (
    <div class="col-12 text-secondary">
        <div className='row'>
            <div class="col-12">
                <div class="fs-4 py-2">Add Quote to your personal library here</div>
                <div class="py-4 ">Enter Author Name and Quote Below</div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="col-12">
                    <label for="author">Author:</label><br />
                    <input
                        id="author"
                        type='text'
                        name='authorInput'
                        value={authorInput}
                        onChange={handleChange}
                        label="author"
                        placeholder='Enter Author Name'
                        required
                    />
                </div>
                <div className="col-12 my-2">
                    <label for="quote">Quote:</label><br />
                    <input
                        id="quote"
                        type='text'
                        name='quoteInput'
                        value={quoteInput}
                        onChange={handleChange}
                        label="quote"
                        placeholder='Enter Quote'
                        required
                    />
                </div>
                <div className='col-12 py-4'>
                    <button class="btn btn-success me-1 mb-1" type="submit"> Add to My Library </button>
                </div>
            </form>
            <div class="col-12">
                <QuotifyHorizontalCardsBox 
                    header = "My Quotes Library"
                    list= { addedQuoteCard }
                    searchList = { addedQuoteCard }
                    trash= "yes"
                />
            </div>
        </div>
    </div>
)

const mapStateToProps = ({quote: {addedQuoteCard}}) => ({
    addedQuoteCard
})

export default connect(mapStateToProps)(QuotifyMainCreate);