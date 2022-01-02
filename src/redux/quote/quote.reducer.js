const INITIAL_STATE = {
    currentRandomQuoteId: Math.floor(Math.random()*30) + 1
}

const quoteReducer = (state= INITIAL_STATE , action) => {
    switch (action.type) {
        case 'SET_RANDOM_QUOTE_ID':
            return {
                ...state,
                currentRandomQuoteId: action.payload
            }
        default:
            return state
    }
}

export default quoteReducer;