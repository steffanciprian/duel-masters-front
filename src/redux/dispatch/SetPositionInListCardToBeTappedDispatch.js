import {setPositionInListCardToBeTapped} from '../actions/SetPositionInListCardToBeTappedAction'

export default function setPositionInListCardToBeTappedDispatch(id) {
    return dispatch => dispatch(setPositionInListCardToBeTapped(id))
}
