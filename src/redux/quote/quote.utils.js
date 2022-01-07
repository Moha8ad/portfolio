const addQuoteToLikedQuoteDB = ( likedQuotesDB, quoteToLike ) => {
    
    const existingQuote = likedQuotesDB.find(
        likedQuote => likedQuote.id  === quoteToLike.id 
    );

    if(existingQuote) {
        return likedQuotesDB.map(likedQuote => 
            likedQuote.id  === quoteToLike.id 
             ? {...likedQuote}
             : likedQuote
        )
    };

    return [...likedQuotesDB, {...quoteToLike}]

 };

 export default addQuoteToLikedQuoteDB;