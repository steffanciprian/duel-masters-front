import {FETCH_PLAYERS_ERROR, FETCH_PLAYERS_PENDING, FETCH_PLAYERS_SUCCESS} from "../actionTypes/FetchPlayersActionType";

export function fetchPlayersPending() {
    return {
        type: FETCH_PLAYERS_PENDING
    }
}

export function fetchPlayersSuccess(playerDTO) {
    return {
        type: FETCH_PLAYERS_SUCCESS,
        payload: {playerDTO},
    }
}

export function fetchPlayersError(error) {
    return {
        type: FETCH_PLAYERS_ERROR,
        payload: {error},
    }
}
