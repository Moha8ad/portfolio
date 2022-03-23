export const checkTime = ( date ) => {

    const now = new Date();
    return now.toISOString() >= date ? true : false
   
};

export const highlight = ( example, word ) => {

    const exampleArr = example.toLowerCase().split(/([\wäöüÄÖÜß]+)/ig);
    const indexOfWord = exampleArr.indexOf(word.toLowerCase());

    const firstPartOfExample = exampleArr.slice(0, indexOfWord).join(' ');
    const secondPartOfExample = exampleArr.slice(indexOfWord + 1, exampleArr.length).join(' ')
    const wordOfExample = example.split(/([\wäöüÄÖÜß]+)/ig).slice(indexOfWord, indexOfWord + 1);

    return (
        example.toLowerCase().includes(word.toLowerCase()) 
        ?
        <div>{firstPartOfExample}<span className="g5-example-word" style={{color: "greenyellow"}}>{wordOfExample}</span>{secondPartOfExample}</div>
        : 
        example
    )
}

export const cardToDelete = (arr, card) => {
    return arr.filter(cards => cards.word !== card.word)
}

