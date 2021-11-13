import { types } from "../types/types";


const initialState = {
    active: true
}


export const proyectReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.proyectActive:
            return{
                ...state,
                active: {
                    ...action.payload
                }
            }

        default:
            return state;
    }
}