export const highlight = ( example, word ) => {

    const exampleArr = example.toLowerCase().split(/([\wäöüÄÖÜß]+)/ig);
    const indexOfWord = exampleArr.indexOf(word.toLowerCase());

    const firstPartOfExample = exampleArr.slice(0, indexOfWord).join(' ');
    const secondPartOfExample = exampleArr.slice(indexOfWord + 1, exampleArr.length).join(' ');
    const wordOfExample = example.split(/([\wäöüÄÖÜß]+)/ig).slice(indexOfWord, indexOfWord + 1);
    
    console.log(word)
    console.log(example)
    console.log(exampleArr)
    console.log(indexOfWord)
    console.log(firstPartOfExample)
    console.log(secondPartOfExample)
    console.log(wordOfExample)
    console.log(example.toLowerCase().includes(word.toLowerCase()))

    return (
        wordOfExample.length > 0
        ?
        <div>{firstPartOfExample}<span className="g5-example-word" style={{color: "greenyellow"}}>{wordOfExample}</span>{secondPartOfExample}</div>
        : 
        example
    )

}