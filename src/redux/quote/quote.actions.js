import QuoteActionTypes from './quote.types';

export const setSearchByName = searchByName => ({
    type: QuoteActionTypes.SET_SEARCH_BY_NAME,
    payload: searchByName
})

export const setSearchField = searchField => ({
    type: QuoteActionTypes.SET_SEARCH_FIELD,
    payload: searchField
})

export const setRandomQuoteId = randomQuoteId => ({
    type: QuoteActionTypes.SET_RANDOM_QUOTE_ID,
    payload: randomQuoteId
});

export const generateRandomColor = randomColor => ({
    type: QuoteActionTypes.GENERATE_RANDOM_COLOR,
    payload: randomColor
})

export const setLikedQuote = likedQuote => ({
    type: QuoteActionTypes.SET_LIKED_QUOTE,
    payload: likedQuote
})

export const addQuoteToDataBase = addedQuote => ({
    type: QuoteActionTypes.ADD_QUOTE_TO_DATA_BASE,
    payload: addedQuote
})

export const addLikedQuoteToDataBase = addedLikedQuote => ({
    type: QuoteActionTypes.ADD_LIKED_QUOTE_TO_DATA_BASE,
    payload: addedLikedQuote
})