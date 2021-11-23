import {ADD_PLAYER_TO_BATTLEZONE} from "../actionTypes/AddPlayerToBattlezoneActionType";

export function addPlayerToBattlezoneAction(playerDTO) {
    return {
        type: ADD_PLAYER_TO_BATTLEZONE,
        payload: {playerDTO}
    }
}
