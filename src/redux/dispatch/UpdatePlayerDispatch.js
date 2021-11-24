import {updatePlayerAction} from "../actions/AddPlayerToBattlezoneAction";

export default function addPlayerToBattlezoneActionDispatch(player) {
    return dispatch => dispatch(updatePlayerAction(player))
}
