import {Component} from "react";
import '../css/ManaZone.css'
import {bindActionCreators} from "redux";
import AddPlayerToBattlezoneDispatch from "../redux/dispatch/AddPlayerToBattlezoneDispatch";
import setIsTappedDispatch from "../redux/dispatch/SetIsTappedDispatch";
import SetPositionInListCardToBeTappedDispatch from "../redux/dispatch/SetPositionInListCardToBeTappedDispatch";
import addPlayerToBattlezoneActionDispatch from "../redux/dispatch/UpdatePlayerDispatch";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class ManaZone extends Component {
    render() {
        const {
            manaZone,
            player
        } = this.props;

        const updatePlayerInOrderToTapTheCard = playerToUpdate => {
            return fetch('http://localhost:8080/players/tap', {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(playerToUpdate)
            })
                .then(r => r.json())
                .then(r => this.props.addPlayerToBattlezoneActionDispatch(r))
                .catch(error => console.log(error))
        }

        const mappedManaZone =
            (manaZone).map(card =>
                <div
                    key={card.positionInList}
                    className={card.isTapped ? 'card-rotate' : 'card-default'}
                    onClick={() => {
                        this.props.SetPositionInListCardToBeTappedDispatch(card.positionInList)
                        player.idToChangeForTapping = card.positionInList
                        updatePlayerInOrderToTapTheCard(player)
                    }}
                >
                    <img
                        onClick={() => console.log(card.isTapped)}
                        style={{width: '100%', height: '100%'}}
                        src={`data:image/jpeg;base64,${card.cardImage}`}/>
                </div>
            );

        return (
            <div className='mana-zone'>
                {manaZone && manaZone ? mappedManaZone : null}
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
    mapDispatchToProps)(withRouter(ManaZone));