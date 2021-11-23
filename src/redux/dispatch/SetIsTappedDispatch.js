import {setIsTapped} from '../actions/SetIsTappedAction'

export default function setIsTappedDispatch(id) {
    return dispatch => dispatch(setIsTapped(id))
}
