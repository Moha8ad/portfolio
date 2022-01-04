import QuoteActionTypes from './quote.types'

export const setRandomQuoteId = randomQuoteId => ({
    type: QuoteActionTypes.SET_RANDOM_QUOTE_ID,
    payload: randomQuoteId
});

export const setLikedQuote = likedQuote => ({
    type: QuoteActionTypes.SET_LIKED_QUOTE,
    payload: likedQuote
})