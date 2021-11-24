import {ADD_PLAYER_TO_BATTLEZONE, UPDATE_PLAYERS_LIST} from "../actionTypes/AddPlayerToBattlezoneActionType";

export function addPlayerToBattlezoneAction(playerDTO) {
    return {
        type: ADD_PLAYER_TO_BATTLEZONE,
        payload: {playerDTO}
    }
}

export function updatePlayerAction(player) {
    return {
        type: UPDATE_PLAYERS_LIST,
        payload: {player}
    }
}
