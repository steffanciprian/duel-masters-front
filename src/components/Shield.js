import {Component} from "react";
import '../css/Shield.css'
import {bindActionCreators} from "redux";
import AddPlayerToBattlezoneDispatch from "../redux/dispatch/AddPlayerToBattlezoneDispatch";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import setIsTappedDispatch from "../redux/dispatch/SetIsTappedDispatch";

class Shield extends Component {

    state = {
        shields: [{}, {}, {}, {}, {}],
        untappedCardClassName: 'untappedCard',
        tappedCardClassName: 'tapped-card',
        isTapped: false,
    }

    render() {

        const {
            players,
            shields,
            isTapped
        } = this.props;

        const mappedShields = shields.map(() =>
            <div onClick={() => console.log(players)} className={this.state.untappedCardClassName}/>
        );

        return (
            <div className='shield'>
                {mappedShields}
                {/*<div onClick={() => console.log(players)} className={this.state.tappedCardClassName}/>*/}
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
    mapDispatchToProps)(withRouter(Shield));