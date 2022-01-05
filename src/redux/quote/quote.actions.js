import QuoteActionTypes from './quote.types'

export const setRandomQuoteId = randomQuoteId => ({
    type: QuoteActionTypes.SET_RANDOM_QUOTE_ID,
    payload: randomQuoteId
});

export const generateRandomColorNum = randomColorNum => ({
    type: QuoteActionTypes.GENERATE_RANDOM_COLOR_NUM,
    payload: randomColorNum
})

export const setLikedQuote = likedQuote => ({
    type: QuoteActionTypes.SET_LIKED_QUOTE,
    payload: likedQuote
})

export const addQuoteToDataBase = addedQuote => ({
    type: QuoteActionTypes.ADD_QUOTE_TO_DATA_BASE,
    payload: addedQuote
})