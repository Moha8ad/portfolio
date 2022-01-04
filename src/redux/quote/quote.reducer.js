import QuoteActionTypes from './quote.types'

const INITIAL_STATE = {
    currentRandomQuoteId: Math.floor(Math.random()*3) + 1,
    likedQuote: 
    [
        {
            author: 'Mike',
            quote: 'one thing'
        },
        {
            author: 'Maggy',
            quote: 'another thing'
        }
    ]
    
}

const quoteReducer = (state= INITIAL_STATE , action) => {
    switch (action.type) {
        case QuoteActionTypes.SET_RANDOM_QUOTE_ID:
            return {
                ...state,
                currentRandomQuoteId: action.payload
            }
        case QuoteActionTypes.SET_LIKED_QUOTE:
            return {
                ...state,
                likedQuote: [...state.likedQuote, action.payload]
            }
        default:
            return state
    }
}

export default quoteReducer;