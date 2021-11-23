import {Component} from "react";
import '../css/LoginAndStart.css'
import {connect} from "react-redux";
import AddPlayerToBattlezoneDispatch from '../redux/dispatch/AddPlayerToBattlezoneDispatch';
import {bindActionCreators} from "redux";

class LoginAndStart extends Component {
    state = {
        player1: '',
        player2: '',
    }

    render() {

        const onChangeUsername1 = event => {
            this.setState({
                    player1: event.target.value
                }
            )
            console.log(event.target.value)
        }

        const onChangeUsername2 = event => {
            this.setState({
                    player2: event.target.value
                }
            )
        }

        const {players} = this.props;
        console.log(players);

        const getPlayerDTO = (username) => {
            return fetch('http://localhost:8080/players/my-deck/' + username)
                .then(r => r.json())
                .then(r => this.props.AddPlayerToBattlezoneDispatch(r))
                .catch(error => {
                    console.log(error)
                })
        }

        return (
            <div className='login-container'>

                <button onClick={() => getPlayerDTO(this.state.player1)}>START Player1</button>

                <div className='container-username'>
                    <label>Username: </label>
                    <input type='text' onChange={event => onChangeUsername1(event)}/>
                </div>

                <button onClick={() => getPlayerDTO(this.state.player2)}>START Player2</button>
                <div className='container-username'>
                    <label>Username: </label>
                    <input type='text' onChange={event => onChangeUsername2(event)}/>
                </div>
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
    mapDispatchToProps)(LoginAndStart);