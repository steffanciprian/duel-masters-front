import axios from 'axios';
import {fetchPlayersError, fetchPlayersPending, fetchPlayersSuccess} from "../actions/FetchPlayersAction";

export default function fetchBooksDispatch(username) {
    return dispatch => {
        dispatch(fetchPlayersPending());
        axios.get('http://localhost:8080/players/my-deck/'+username)
            .then(response => {
                dispatch(fetchPlayersSuccess(response.data));
                console.log(response)
            })
            .catch(error =>
            {dispatch(fetchPlayersError(error))
                console.log(error)
            })
    }
}
