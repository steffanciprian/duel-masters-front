import {ADD_PLAYER_TO_BATTLEZONE} from "../actionTypes/AddPlayerToBattlezoneActionType";

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

        default:
            return state;
    }
}
