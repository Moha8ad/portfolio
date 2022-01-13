import QuoteActionTypes from './quote.types';

import { toggleQuote } from './quote.utils'; 

import QUOTES_DATA from '../../pages/quotify/quotify-data';
import COLOR_PALETTE from '../../components/all-reusable-components/random-color/random-color-component';

const INITIAL_STATE = {
    quotesDB: QUOTES_DATA,
    likedQuotesDB: [],
    inspirationalList: [],
    insightfulList: [],
    addedQuoteCard: [],
    ic: [],
    randomColor: COLOR_PALETTE[Math.floor(Math.random()*25)],
}

const quoteReducer = (state= INITIAL_STATE , action) => {
    switch (action.type) {
        case QuoteActionTypes.GENERATE_RANDOM_COLOR:
            return {
                ...state,
                randomColor: COLOR_PALETTE[action.payload]
            }
        case QuoteActionTypes.ADD_QUOTE_TO_DATA_BASE:
            return {
                ...state,
                quotesDB: [...state.addedQuote, action.payload]
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
        case QuoteActionTypes.REMOVE:
            return{
                ...state,
                ic: QUOTES_DATA
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