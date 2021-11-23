import {Component} from "react";
import '../css/LoginAndStart.css'
import {connect} from "react-redux";
import AddPlayerToBattlezoneDispatch from '../redux/dispatch/AddPlayerToBattlezoneDispatch';
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";

class LoginAndStart extends Component {
    state = {
        player1: '',
        player2: '',
        player1Chosen: false,
        player2Chosen: true,
    }

    render() {

        const onChangeUsername1 = event => {
            this.setState({
                    player1: event.target.value
                }
            )
        }

        const onChangeUsername2 = event => {
            this.setState({
                    player2: event.target.value
                }
            )
        }

        const {players} = this.props;
        console.log(players);

        const getPlayerDTO = (username, playerNumber) => {
            if (playerNumber === 1) {
                this.setState({
                    player1: '',
                    player1Chosen: true,
                    player2Chosen: false,
                })
                return fetch('http://localhost:8080/players/my-deck/' + username)
                    .then(r => r.json())
                    .then(r => this.props.AddPlayerToBattlezoneDispatch(r))
                    .catch(error => {
                        if (error.response.status === 404) {
                            console.log(error)
                        }
                    })
            } else {
                this.setState({
                    player1: '',
                    player1Chosen: true,
                    player2Chosen: true,
                })
                return fetch('http://localhost:8080/players/my-deck/' + username)
                    .then(r => r.json())
                    .then(r => this.props.AddPlayerToBattlezoneDispatch(r))
                    .catch(error => {
                        if (error.response.status === 404) {
                            console.log(error)
                        }
                    })
            }
        }

        return (
            <div className='login-container'>
                <button
                    disabled={this.state.player1Chosen}
                    onClick={() => getPlayerDTO(this.state.player1, 1)}>START Player1
                </button>

                <div className='container-username'>
                    <label>Username: </label>
                    <input type='text' onChange={event => onChangeUsername1(event)}/>
                </div>

                <button
                    disabled={this.state.player2Chosen}
                    onClick={() => getPlayerDTO(this.state.player2, 2)}>START Player2
                </button>
                <div className='container-username'>
                    <label>Username: </label>
                    <input type='text' onChange={event => onChangeUsername2(event)}/>
                </div>
                <button
                    onClick={()=>this.props.history.push("/game")}
                >DUEL</button>
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
    mapDispatchToProps)(withRouter(LoginAndStart));