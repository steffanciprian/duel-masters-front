import {addPlayerToBattlezoneAction} from "../actions/AddPlayerToBattlezoneAction";

export default function addPlayerToBattlezoneActionDispatch(playerDTO)
{
    return dispatch => dispatch(addPlayerToBattlezoneAction(playerDTO))
}
