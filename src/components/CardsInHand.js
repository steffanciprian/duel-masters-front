import {Component} from "react";
import '../css/CardsInHand.css'
import {bindActionCreators} from "redux";
import AddPlayerToBattlezoneDispatch from "../redux/dispatch/AddPlayerToBattlezoneDispatch";
import setIsTappedDispatch from "../redux/dispatch/SetIsTappedDispatch";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class CardsInHand extends Component {
    state = {
        isTapped: false
    }

    render() {
        const {
            hand,
            isTapped
        } = this.props;

        const changeTap = card => {
            console.log(card.cardName)
            card.isTapped = !card.isTapped;
        }

        const mappedHand = hand.map(card =>
            <div
                key={card.cardName}
                // onClick={() => this.props.setIsTappedDispatch(!isTapped)}
                onClick={() => changeTap(card)}
                className={isTapped ? 'tapped-card' : 'untapped-card'}/>
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
    isTapped: state.setIsTappedReducer.isTapped,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    AddPlayerToBattlezoneDispatch: AddPlayerToBattlezoneDispatch,
    setIsTappedDispatch: setIsTappedDispatch,
}, dispatch)

export default connect(mapStateToProps,
    mapDispatchToProps)(withRouter(CardsInHand));