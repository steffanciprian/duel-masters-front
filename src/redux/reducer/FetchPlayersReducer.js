import {
    FETCH_PLAYERS_ERROR,
    FETCH_PLAYERS_PENDING,
    FETCH_PLAYERS_SUCCESS
} from "../actionTypes/FetchPlayersActionType";

const initialState = {
    players: [],
    loading: true,
    error: null,
}

export default function fetchBooksReducer(state=initialState, action)
{
    switch (action.type){
        case FETCH_PLAYERS_PENDING:
            return{
                ...state,
                loading: true,
                error: null,
            }

        case FETCH_PLAYERS_SUCCESS:
            return{
                ...state,
                loading: false,
                playerDTO:action.payload.playerDTO,
            }

        case FETCH_PLAYERS_ERROR:
            return{
                ...state,
                error:action.payload.error,
                playerDTO:''
            }

        default:
            return state;
    }
}
