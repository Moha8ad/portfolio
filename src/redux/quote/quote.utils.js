export const addQuoteToLikedQuotesDB = ( likedQuotesDB, quoteToLike ) => {
    
    const existingQuote = likedQuotesDB.find(
        likedQuote => likedQuote.quoteId === quoteToLike.quoteId
    );
  
    if (existingQuote) {
        return likedQuotesDB.filter(cartItem => cartItem.quoteId !== quoteToLike.quoteId)
    }
  
    return [...likedQuotesDB, { ...quoteToLike, liked: true }];
  };