import {setIsTapped} from '../actions/SetIsTappedAction'

export default function setIsTappedDispatch(isTapped) {
    return dispatch => dispatch(setIsTapped(isTapped))
}
