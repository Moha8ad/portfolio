export const highlight = ( example, word ) => {

    const wordToLoweCase = word.toLowerCase();
    const exampleArr = example.toLowerCase().split(/([\wäöüÄÖÜß]+)/ig);
    const indexOfWord = exampleArr.indexOf(wordToLoweCase);

    const firstPartOfExample = exampleArr.slice(0, indexOfWord).join(' ');
    const secondPartOfExample = exampleArr.slice(indexOfWord + 1, exampleArr.length).join(' ');
    const wordOfExample = example.split(/([\wäöüÄÖÜß]+)/ig).slice(indexOfWord, indexOfWord + 1);
    

    return (
        wordOfExample.length > 0
        ?
        <div>{firstPartOfExample}<span className="g5-example-word" style={{color: "greenyellow"}}>{wordOfExample}</span>{secondPartOfExample}</div>
        : 
        example
    )

}