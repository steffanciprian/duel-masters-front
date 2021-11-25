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
                <CardsInHand player={players[0]} hand={players[0].hand} manaZone={players[0].manaZone}/>
                <ManaZone player={players[0]} manaZone={players[0].manaZone}/>
                <Shield player={players[0]} shields={players[0].shieldZone} deck={players[0].deck}/>
                <BattleZone/>
                <Shield player={players[1]} shields={players[1].shieldZone} deck={players[1].deck}/>
                <ManaZone player={players[1]} manaZone={players[1].manaZone}/>
                <CardsInHand player={players[1]} hand={players[1].hand} manaZone={players[1].manaZone}/>
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