import {SET_IS_TAPPED} from "../actionTypes/SetIsTappedActionType";

export function setIsTapped(isTapped) {
    return {
        type: SET_IS_TAPPED,
        payload: {isTapped}
    }
}
