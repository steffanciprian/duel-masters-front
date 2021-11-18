import {Component} from "react";
import '../css/Shield.css'

class Shield extends Component {

    state = {
        shields: [{}, {}, {}, {}, {}]
    }


    render() {
        const mappedShields = this.state.shields.map(shield =>
            <div
                className='duel'
            >
            </div>
        );

        return (
            <div className='shield'>
                {mappedShields}
                <div className='tapped-card'>
                </div>
            </div>


        )
    }
}

export default Shield;