import {SET_IS_TAPPED} from "../actionTypes/SetIsTappedActionType";

export function setIsTapped(id) {
    return {
        type: SET_IS_TAPPED,
        payload: {id}
    }
}
