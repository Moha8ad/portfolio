export const removeNextWord = ( words, next ) => {
  
  return words.filter(item => item.id !== next.id)

};

export const sortWord = ( db, word ) => {
    
  const existingWord = db.find(
    words => words.id === word.id
  );

  if (existingWord) {

    if (word.remove) {
      return db.filter( words => words.id !== word.id )
    }

    const now = new Date();
    const nextDay = new Date(now.getFullYear(), now.getMonth(), (now.getDate() + 1));

    const index = db.findIndex(words => words.id === word.id);
    const newDB = [...db];

    newDB[index].review = true
    newDB[index].time = nextDay

    return db = newDB
  }

  return [...db, word];

};