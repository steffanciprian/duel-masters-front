import {SET_IS_TAPPED} from "../actionTypes/SetIsTappedActionType";

const initialState = {
    isTapped: false,
}

export default function setIsTappedReducer(state = initialState, action) {

    switch (action.type) {
        case SET_IS_TAPPED:
            return {
                ...state,
                isTapped: !action.payload.isTapped,
            }
        default:
            return state;
    }
}
