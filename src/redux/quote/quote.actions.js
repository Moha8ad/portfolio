import QuoteActionTypes from './quote.types';

export const generateRandomColor = randomColor => ({
    type: QuoteActionTypes.GENERATE_RANDOM_COLOR,
    payload: randomColor
})

export const addQuoteToDataBase = addedQuote => ({
    type: QuoteActionTypes.ADD_QUOTE_TO_DATA_BASE,
    payload: addedQuote
})

export const setLikedQuote = likedQuote => ({
    type: QuoteActionTypes.SET_LIKED_QUOTE,
    payload: likedQuote
})

export const setInspirationalQuote = inspirationalQuote => ({
    type: QuoteActionTypes.SET_INSPIRATIONAL_QUOTE,
    payload: inspirationalQuote
})

export const setInsightfulQuote = insightfulQuote => ({
    type: QuoteActionTypes.SET_INSIGHTFUL_QUOTE,
    payload: insightfulQuote
})