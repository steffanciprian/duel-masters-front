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

        const updatePlayerInOrderToTapTheCard = playerToUpdate => {
            return fetch('http://localhost:8080/players/tap', {method: 'PUT',  headers: {'Content-Type': 'application/json'}, body: JSON.stringify(playerToUpdate)})
                .then(r => r.json())
                .then(r => this.props.addPlayerToBattlezoneActionDispatch(r))
                .catch(error => {
                        console.log(error)
                })
        }

        const mappedHand = hand.map((card, cardId) =>
            <div
                id={cardId}
                key={cardId}
                className={card.isTapped ? 'tapped-card' : 'untapped-card'}
                onClick={() => {
                    console.log(players)
                    this.props.SetPositionInListCardToBeTappedDispatch(card.positionInList)
                    updatePlayerInOrderToTapTheCard(player).then(r => console.log(r))
                    player.idToChangeForTapping = card.positionInList
                }}
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