import { SET_CURRENT_MONSTER } from "./monster.types"

export const setCurrentMonster = monster => ({ 
    type: SET_CURRENT_MONSTER, 
    payload: monster 
}) 