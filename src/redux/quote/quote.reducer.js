import QuoteActionTypes from './quote.types';

import { toggleQuote } from './quote.utils'; 

const INITIAL_STATE = {
    quotesDB: [],
    likedQuotesDB: [],
    inspirationalList: [],
    insightfulList: [], 
    addedQuoteCard: []
}

const quoteReducer = (state= INITIAL_STATE , action) => {
    switch (action.type) {
        case QuoteActionTypes.SET_QUOTES_DATA_BASE:
            return {
                ...state,
                quotesDB: action.payload
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