import {Component} from "react";
import '../css/CardsInHand.css'
import {bindActionCreators} from "redux";
import AddPlayerToBattlezoneDispatch from "../redux/dispatch/AddPlayerToBattlezoneDispatch";
import setIsTappedDispatch from "../redux/dispatch/SetIsTappedDispatch";
import SetPositionInListCardToBeTappedDispatch from "../redux/dispatch/SetPositionInListCardToBeTappedDispatch";
import addPlayerToBattlezoneActionDispatch from "../redux/dispatch/UpdatePlayerDispatch";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class CardsInHand extends Component {
    state = {
        card: '',
        rotate: ''
    }

    render() {
        const {
            hand,
            id,
            isTapped,
            players,
            player
        } = this.props;

        const mappedHand = hand.map((card, cardId) =>
            <div
                id={cardId}
                key={cardId}
                onClick={() => {
                    player.idToChangeForTapping = card.positionInList
                    this.props.SetPositionInListCardToBeTappedDispatch(card.positionInList)
                    this.props.setIsTappedDispatch(card.isTapped)
                    console.log(card.positionInList)
                }}
                className={card.isTapped ? 'tapped-card' : 'untapped-card'}
            />
        );
        return (
            <div className='cards-in-hand'>
                {mappedHand}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    players: state.addPlayerToBattlezoneReducer.players,
    id: state.setPositionInListCardToBeTappedReducer.id,
    isTapped: state.setIsTappedReducer.isTapped,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    AddPlayerToBattlezoneDispatch: AddPlayerToBattlezoneDispatch,
    setIsTappedDispatch: setIsTappedDispatch,
    SetPositionInListCardToBeTappedDispatch: SetPositionInListCardToBeTappedDispatch,
    addPlayerToBattlezoneActionDispatch: addPlayerToBattlezoneActionDispatch,
}, dispatch)

export default connect(mapStateToProps,
    mapDispatchToProps)(withRouter(CardsInHand));