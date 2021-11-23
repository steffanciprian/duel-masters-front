import {Component} from "react";
import BattleZone from "./BattleZone";
import ManaZone from "./ManaZone";
import CardsInHand from "./CardsInHand";
import '../css/Arena.css'
import Shield from "./Shield";
import {bindActionCreators} from "redux";
import AddPlayerToBattlezoneDispatch from "../redux/dispatch/AddPlayerToBattlezoneDispatch";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class Arena extends Component {

    render() {
        const {players} = this.props;

        return (
            <div className='arena'>
                <CardsInHand hand={players[0].hand}/>
                <ManaZone/>
                <Shield shields={players[0].shieldZone}/>
                <BattleZone/>
                <Shield shields={players[1].shieldZone}/>
                <ManaZone/>
                <CardsInHand hand={players[1].hand}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    players: state.addPlayerToBattlezoneReducer.players,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    AddPlayerToBattlezoneDispatch: AddPlayerToBattlezoneDispatch,
}, dispatch)

export default connect(mapStateToProps,
    mapDispatchToProps)(withRouter(Arena));