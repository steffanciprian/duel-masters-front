import {Component} from "react";
import '../css/Shield.css'

class Shield extends Component {

    state = {
        shields: [{}, {}, {}, {}, {}],
        untappedCardClassName:'untappedCard',
        tappedCardClassName:'tapped-card',
        isTapped:false,
    }




    render() {
        const mappedShields = this.state.shields.map(shield =>
            <div className={this.state.untappedCardClassName}/>
        );

        return (

            <div className='shield'>
                {mappedShields}
                <div className={this.state.tappedCardClassName}/>
            </div>


        )
    }
}

export default Shield;