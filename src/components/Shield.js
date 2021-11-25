import {Component} from "react";
import '../css/Shield.css'
import {bindActionCreators} from "redux";
import AddPlayerToBattlezoneDispatch from "../redux/dispatch/AddPlayerToBattlezoneDispatch";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import setIsTappedDispatch from "../redux/dispatch/SetIsTappedDispatch";
import duelMastersImageForDeck from '../assets/deckImage.jpeg';
import SetPositionInListCardToBeTappedDispatch from "../redux/dispatch/SetPositionInListCardToBeTappedDispatch";
import addPlayerToBattlezoneActionDispatch from "../redux/dispatch/UpdatePlayerDispatch";

class Shield extends Component {

    state = {
        untappedCardClassName: 'untappedCard',
        tappedCardClassName: 'tapped-card',
        isTapped: false,
    }

    render() {

        const drawCardFromDeck = playerToUpdate => {
            return fetch('http://localhost:8080/players/draw-card', {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(playerToUpdate)
            })
                .then(r => r.json())
                .then(r => this.props.addPlayerToBattlezoneActionDispatch(r))
                .catch(error => console.log(error))
        }

        const {
            players,
            shields,
            player
        } = this.props;

        const mappedShields = shields.map(() =>
            <div onClick={() => console.log(players)} className={this.state.untappedCardClassName}/>
        );

        return (
            <div className='shield'>
                {mappedShields}
                <div
                    onClick={() => {
                        drawCardFromDeck(player)
                    }}>
                    <img className='img-style' src={duelMastersImageForDeck}/>
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
    mapDispatchToProps)(withRouter(Shield));