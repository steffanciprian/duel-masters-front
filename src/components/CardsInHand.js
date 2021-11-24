import {Component} from "react";
import '../css/CardsInHand.css'
import {bindActionCreators} from "redux";
import AddPlayerToBattlezoneDispatch from "../redux/dispatch/AddPlayerToBattlezoneDispatch";
import setIsTappedDispatch from "../redux/dispatch/SetIsTappedDispatch";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class CardsInHand extends Component {
    state = {
        card:'',
        rotate:''
    }

    render() {
        const {
            hand,
            id
        } = this.props;

        const mappedHand = hand.map((card,cardId) =>
            <div
                id={cardId}
                key={cardId}
                // onClick={() => this.props.setIsTappedDispatch(!isTapped)}
                onClick={()=>
                {
                    this.props.setIsTappedDispatch(card.positionInList)
                    // this.props.setIsTappedDispatch()
                    console.log(card.positionInList)
                }}

                className={(id === card.positionInList) && card.isTapped ? 'tapped-card' : 'untapped-card'}/>
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
    id: state.setIsTappedReducer.id,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    AddPlayerToBattlezoneDispatch: AddPlayerToBattlezoneDispatch,
    setIsTappedDispatch: setIsTappedDispatch,
}, dispatch)

export default connect(mapStateToProps,
    mapDispatchToProps)(withRouter(CardsInHand));