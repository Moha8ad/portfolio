import QuoteActionTypes from './quote.types';
import { addQuoteToLikedQuotesDB } from './quote.utils';

import QUOTES_DATA from '../../pages/quotify/quotify-data';
import COLOR_PALETTE from '../../components/all-reusable-components/random-color/random-color-component';

const INITIAL_STATE = {
    searchByName: '',
    searchField: '',
    quotesDB: QUOTES_DATA,
    likedQuotesDB: [],
    currentRandomQuoteId: Math.floor(Math.random()*102),
    randomColor: COLOR_PALETTE[Math.floor(Math.random()*25)],
    
}

const quoteReducer = (state= INITIAL_STATE , action) => {
    switch (action.type) {
        case QuoteActionTypes.SET_SEARCH_BY_NAME:
            return {
                ...state,
                searchByName: action.payload
            }
        case QuoteActionTypes.SET_SEARCH_FIELD:
            return {
                ...state,
                searchField: action.payload
            }
        case QuoteActionTypes.ADD_QUOTE_TO_DATA_BASE:
            return {
                ...state,
                quotesDB: [...state.addedQuote, action.payload]
            }
        case QuoteActionTypes.SET_LIKED_QUOTE:
            return {
                ...state,
                likedQuotesDB: addQuoteToLikedQuotesDB(state.likedQuotesDB, action.payload)
            }
        case QuoteActionTypes.SET_RANDOM_QUOTE_ID:
            return {
                ...state,
                currentRandomQuoteId: action.payload
            }
        case QuoteActionTypes.GENERATE_RANDOM_COLOR:
            return {
                ...state,
                randomColor: COLOR_PALETTE[action.payload]
            }
        default:
            return state
    }
}

export default quoteReducer;