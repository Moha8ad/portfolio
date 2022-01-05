import QuoteActionTypes from './quote.types';
import QUOTES_DATA from '../../pages/quotify/quotify-data';
import COLOR_PALETTE from '../../components/all-reusable-components/random-color/random-color-component';

const INITIAL_STATE = {
    quotesDB: QUOTES_DATA,
    likedQuote: [],
    currentRandomQuoteId: Math.floor(Math.random()*2),
    randomColorNum: COLOR_PALETTE[Math.floor(Math.random()*25)],
    
}

const quoteReducer = (state= INITIAL_STATE , action) => {
    switch (action.type) {
        case QuoteActionTypes.ADD_QUOTE_TO_DATA_BASE:
            return {
                ...state,
                quotesDB: [...state.addedQuote, action.payload]
            }
        case QuoteActionTypes.SET_LIKED_QUOTE:
            return {
                ...state,
                likedQuote: [...state.likedQuote, action.payload]
            }
        case QuoteActionTypes.SET_RANDOM_QUOTE_ID:
            return {
                ...state,
                currentRandomQuoteId: action.payload
            }
        case QuoteActionTypes.GENERATE_RANDOM_COLOR_NUM:
            return {
                ...state,
                randomColorNum: COLOR_PALETTE[action.payload]
            }
        default:
            return state
    }
}

export default quoteReducer;