import {SET_POSITION} from "../actionTypes/SetPositionInListCardToBeTappedActionType";

export function setPositionInListCardToBeTapped(id) {
    return {
        type: SET_POSITION,
        payload: {id}
    }
}
