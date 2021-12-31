const SET_RANDOM_QUOTE_ID = 'SET_RANDOM_QUOTE_ID';

export const setRandomQuoteId = randomQuoteId => ({
    type: SET_RANDOM_QUOTE_ID,
    payload: randomQuoteId
});