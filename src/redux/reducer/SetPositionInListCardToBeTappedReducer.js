import {SET_POSITION} from "../actionTypes/SetPositionInListCardToBeTappedActionType";

const initialState = {
    id: false,
}

export default function setPositionInListCardToBeTappedReducer(state = initialState, action) {
    switch (action.type) {
        case SET_POSITION:
            return {
                ...state,
                id: action.payload.id,
            }
        default:
            return state;
    }
}
