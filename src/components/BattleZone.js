import {bindActionCreators} from "redux";
import AddPlayerToBattlezoneDispatch from "../redux/dispatch/AddPlayerToBattlezoneDispatch";
import setIsTappedDispatch from "../redux/dispatch/SetIsTappedDispatch";
import SetPositionInListCardToBeTappedDispatch from "../redux/dispatch/SetPositionInListCardToBeTappedDispatch";
import addPlayerToBattlezoneActionDispatch from "../redux/dispatch/UpdatePlayerDispatch";
import {withRouter} from "react-router-dom";
import {Component} from "react";
import {connect} from "react-redux";
import '../css/BattleZone.css'

class BattleZone extends Component {

    render() {

        const {players}
            = this.props;

        const mappedAttackZonePlayer1 = players[0].attackZone.map(
            card => <div
                key={card.positionInList}
                className={card.isTapped ? 'tapped-card' : 'untapped-card'}
                onClick={() => {
                    this.props.SetPositionInListCardToBeTappedDispatch(card.positionInList)
                    players[0].idToChangeForTapping = card.positionInList
                    updatePlayerInOrderToTapTheCard(players[0])
                }}
            >
                <img
                    onClick={()=> console.log(card.isTapped)}
                    style={{width:'100%',height:'100%'}}
                    src={`data:image/jpeg;base64,${card.cardImage}`}/>
            </div>
        )
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



        const mappedAttackZonePlayer2 = players[1].attackZone.map(
            card => <div
                key={card.positionInList}
                className={card.isTapped ? 'tapped-card' : 'untapped-card'}
                onClick={() => {
                    this.props.SetPositionInListCardToBeTappedDispatch(card.positionInList)
                    players[1].idToChangeForTapping = card.positionInList
                    updatePlayerInOrderToTapTheCard(players[1])
                }}
            >
                <img
                    onClick={()=> console.log(card.isTapped)}
                    style={{width:'100%',height:'100%'}}
                    src={`data:image/jpeg;base64,${card.cardImage}`}/>
            </div>
        )

        return (
            <div className='battleZone'>
                <div className='container-players-in-battlezone'>
                    <div className='container-cards-player-battlezone'>
                        {mappedAttackZonePlayer1}
                    </div>
                    <div className='divider-players'/>
                    <div className='container-cards-player-battlezone'>
                        {mappedAttackZonePlayer2}
                    </div>
                </div>
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
    mapDispatchToProps)(withRouter(BattleZone))