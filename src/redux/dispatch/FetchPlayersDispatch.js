import axios from 'axios';
import {fetchPlayersError, fetchPlayersPending, fetchPlayersSuccess} from "../actions/FetchPlayersAction";

export default function fetchBooksDispatch(playerdto) {
    return dispatch => {
        dispatch(fetchPlayersPending());
        axios.put('http://localhost:8080/players',playerdto)
            .then(response => {
                dispatch(fetchPlayersSuccess(response.data));
            })
            .catch(error => dispatch(fetchPlayersError(error)))
    }
}
