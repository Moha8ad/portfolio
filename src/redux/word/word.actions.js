import WordActionTypes from "./word.types";

export const boxOne = word => ({
    type: WordActionTypes.BOX_ONE,
    payload: word
});

export const boxTwo = word => ({
    type: WordActionTypes.BOX_TWO,
    payload: word
})

export const boxThree = word => ({
    type: WordActionTypes.BOX_THREE,
    payload: word
})

export const boxFour = word => ({
    type: WordActionTypes.BOX_FOUR,
    payload: word
})

export const boxFive = word => ({
    type: WordActionTypes.BOX_FIVE,
    payload: word
})

export const boxArchive = word => ({
    type: WordActionTypes.BOX_ARCHIVE,
    payload: word
})