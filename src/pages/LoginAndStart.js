import {Component} from "react";
import '../css/LoginAndStart.css'
import {connect} from "react-redux";
import fetchPlayersDispatch from '../redux/dispatch/FetchPlayersDispatch';
import {bindActionCreators} from "redux";

class LoginAndStart extends Component {
    state = {
        player1: {
            username: ''
        }
    }

    render() {

        const onChangeUsername1 = event => {
            this.setState({
                    player1: {
                        username: event.target.value
                    }
                }
            )
        }

        const onChangeUsername2 = event => {
            this.setState({
                player2: event.target.value,
            })
        }

        const {playerDTO} = this.props;

        console.log(playerDTO)

        return (
            <div className='login-container'>

                <button onClick={this.props.fetchPlayersDispatch(this.state.player1)}>START Player1</button>

                <div className='container-username'>
                    <label>Username: </label>
                    <input type='text' onChange={event => onChangeUsername1(event)}/>
                </div>
                <button onClick={this.props.fetchPlayersDispatch}>START Player2</button>
                <div className='container-username'>
                    <label>Username: </label>
                    <input type='text' onChange={event => onChangeUsername2(event)}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    playerDTO: state.fetchPlayersReducer.playerDTO,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchPlayersDispatch: fetchPlayersDispatch,
}, dispatch)

export default connect(mapStateToProps,
    mapDispatchToProps)(LoginAndStart);