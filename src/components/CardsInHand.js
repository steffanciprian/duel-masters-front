import {Component} from "react";
import '../css/CardsInHand.css'
import {bindActionCreators} from "redux";
import AddPlayerToBattlezoneDispatch from "../redux/dispatch/AddPlayerToBattlezoneDispatch";
import setIsTappedDispatch from "../redux/dispatch/SetIsTappedDispatch";
import SetPositionInListCardToBeTappedDispatch from "../redux/dispatch/SetPositionInListCardToBeTappedDispatch";
import addPlayerToBattlezoneActionDispatch from "../redux/dispatch/UpdatePlayerDispatch";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Modal from 'react-modal';

class CardsInHand extends Component {
    state = {
        card: '',
        rotate: '',
        isOpen: false,
        currentCard: ''
    }

    render() {
        const {
            hand,
            player
        } = this.props;

        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'green',
            },
        };

        const updatePlayerInOrderToUpdateTheManaZone = playerToUpdate => {
            return fetch('http://localhost:8080/players/card-to-manazone', {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(playerToUpdate)
            })
                .then(r => r.json())
                .then(r => this.props.addPlayerToBattlezoneActionDispatch(r))
                .catch(error => console.log(error))
        }

        const updatePlayerInOrderToUpdateTheAttackZone = playerToUpdate => {
            return fetch('http://localhost:8080/players/card-to-attackzone', {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(playerToUpdate)
            })
                .then(r => r.json())
                .then(r => this.props.addPlayerToBattlezoneActionDispatch(r))
                .catch(error => console.log(error))
        }

        const mappedHand = hand.map(card =>
            <div
                key={card.positionInList}
                className={card.isTapped ? 'card-rotate' : 'card-default'}
                onClick={() => {
                    this.setState({
                        currentCard: card,
                        isOpen: true
                    })
                }}>
                <img
                    style={{width: '100%', height: '100%'}}
                    src={`data:image/jpeg;base64,${card.cardImage}`}/>
            </div>
        );
        return (
            <div className='cards-in-hand'>
                {mappedHand}
                <Modal
                    isOpen={this.state.isOpen}
                    style={customStyles}
                    contentLabel="Example Modal"
                    onRequestClose={() => this.setState({isOpen: false})}
                >
                    <div className='button-container'>
                        <button onClick={() => {
                            this.setState({isOpen: false})
                            player.cardIdToPutInManaZone = this.state.currentCard.positionInList
                            updatePlayerInOrderToUpdateTheManaZone(player)
                        }}>
                            Put into mana zone
                        </button>
                        <button onClick={() => {
                            this.setState({
                                isOpen: false
                            })
                            player.cardIdToPutInAttackZone = this.state.currentCard.positionInList
                            console.log(player.cardIdToPutInAttackZone)
                            console.log(this.state.currentCard.positionInList)
                            updatePlayerInOrderToUpdateTheAttackZone(player)
                        }}>
                            Put into battle zone
                        </button>
                    </div>
                </Modal>
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