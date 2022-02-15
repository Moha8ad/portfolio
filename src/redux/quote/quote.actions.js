import QuoteActionTypes from './quote.types';

export const setQuotesDataBase = quotesDB => ({
    type: QuoteActionTypes.SET_QUOTES_DATA_BASE,
    payload: quotesDB
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

export const addQuoteCard = (author, quote, quoteId, authorId) => ({
    type: QuoteActionTypes.ADD_QUOTE_CARD,
    author: author,
    quote: quote,
    quoteId: quoteId,
    authorId: authorId
})