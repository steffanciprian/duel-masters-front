import {SET_IS_TAPPED} from "../actionTypes/SetIsTappedActionType";

const initialState = {
    id: false,
}

export default function setIsTappedReducer(state = initialState, action) {
    switch (action.type) {
        case SET_IS_TAPPED:
            return {
                ...state,
                id: action.payload.id,
            }
        default:
            return state;
    }
}
