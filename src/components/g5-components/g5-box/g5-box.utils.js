export const checkTime = ( date ) => {

    const now = new Date();
    return now.toISOString() >= date ? true : false
   
};

export const cardToDelete = (arr, card) => {
    return arr.filter(cards => cards.word !== card.word)
}

