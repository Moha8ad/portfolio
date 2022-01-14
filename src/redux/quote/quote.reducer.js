import QuoteActionTypes from './quote.types';

import { toggleQuote } from './quote.utils'; 

import QUOTES_DATA from '../../pages/quotify/quotify-data';

const INITIAL_STATE = {
    randomQuoteId: Math.floor(Math.random()*50),
    quotesDB: QUOTES_DATA,
    likedQuotesDB: [],
    inspirationalList: [],
    insightfulList: [],
    addedQuoteCard: []
}

const quoteReducer = (state= INITIAL_STATE , action) => {
    switch (action.type) {
        case QuoteActionTypes.GENERATE_RANDOM_QUOTE_ID:
            return {
                ...state,
                randomQuoteId: action.payload
            }
        case QuoteActionTypes.SET_LIKED_QUOTE:
            return {
                ...state,
                likedQuotesDB: toggleQuote(state.likedQuotesDB, action.payload)
            }
        case QuoteActionTypes.SET_INSPIRATIONAL_QUOTE:
            return{
                ...state,
                inspirationalList: toggleQuote(state.inspirationalList, action.payload)
            }
        case QuoteActionTypes.SET_INSIGHTFUL_QUOTE:
            return{
                ...state,
                insightfulList: toggleQuote(state.insightfulList, action.payload)
            }
        case QuoteActionTypes.ADD_QUOTE_CARD:
            return{
                ...state,
                addedQuoteCard: toggleQuote(state.addedQuoteCard, 
                    {   
                        author: action.author,
                        quote: action.quote,
                        quoteId: action.quoteId,
                        authorId: action.authorId
                    }   
                )
            }
        default:
            return state
    }
}

export default quoteReducer;