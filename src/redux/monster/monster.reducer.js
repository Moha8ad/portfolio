import { SET_CURRENT_MONSTER } from './monster.types';

export const INITIAL_STATE = { 
    currentMonster: null 
};

const monsterReducer = (state = INITIAL_STATE, action) => { 
    switch (action.type) { 
        case SET_CURRENT_MONSTER: 
            return { 
                ...state, 
                currentMonster: action.payload 
            } 
        default: 
            return state; 
    } 
};  

export default monsterReducer; 