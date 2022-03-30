import WordActionTypes from './word.types';

import { removeNextWord, sortWord } from './word.utils';

const INITIAL_STATE = {
    wordsDayOne: [],
    wordsDayTwo: [],
    wordsDayThree: [],
    wordsDayFour: [],
    wordsDayFive: [],
    wordsArchive: [],
}

const wordReducer = (state= INITIAL_STATE , action) => {
    switch (action.type) {
        case WordActionTypes.BOX_ONE:
            return {
                ...state,
                wordsDayOne: sortWord(state.wordsDayOne, action.payload),
                wordsArchive: removeNextWord(state.wordsArchive, action.payload)

            }
        case WordActionTypes.BOX_TWO:
            return {
                ...state,
                wordsDayTwo: sortWord(state.wordsDayTwo, action.payload),
                wordsDayOne: removeNextWord(state.wordsDayOne, action.payload)
            }
        case WordActionTypes.BOX_THREE:
            return {
                ...state,
                wordsDayThree: sortWord(state.wordsDayThree, action.payload),
                wordsDayTwo: removeNextWord(state.wordsDayTwo, action.payload)
            }
        case WordActionTypes.BOX_FOUR:
            return {
                ...state,
                wordsDayFour: sortWord(state.wordsDayFour, action.payload),
                wordsDayThree: removeNextWord(state.wordsDayThree, action.payload)
            }
        case WordActionTypes.BOX_FIVE:
            return {
                ...state,
                wordsDayFive: sortWord(state.wordsDayFive, action.payload),
                wordsDayFour: removeNextWord(state.wordsDayFour, action.payload)
            }
        case WordActionTypes.BOX_ARCHIVE:
            return {
                ...state,
                wordsArchive: sortWord(state.wordsArchive, action.payload),
                wordsDayFive: removeNextWord(state.wordsDayFive, action.payload)
        }
        default:
            return state
    }
}

export default wordReducer;