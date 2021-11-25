import {ADD_PLAYER_TO_BATTLEZONE, UPDATE_PLAYERS_LIST} from "../actionTypes/AddPlayerToBattlezoneActionType";

const initialState = {
    players: [],
}
export default function addPlayerToBattlezoneReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PLAYER_TO_BATTLEZONE:
            return {
                ...state,
                players: state.players.concat(action.payload.playerDTO),
            }

        case UPDATE_PLAYERS_LIST:
            return {
                ...state,
                players:
                    state.players.map(
                        player => player.id === action.payload.player.id ? action.payload.player : player
                    )
            }

        default:
            return state;
    }
}
