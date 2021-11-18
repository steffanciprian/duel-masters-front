import {Component} from "react";
import BattleZone from "./BattleZone";
import ManaZone from "./ManaZone";
import CardsInHand from "./CardsInHand";
import '../css/Arena.css'
import Shield from "./Shield";

class Arena extends Component {

    render() {
        return (
            <div className='arena'>
                    <CardsInHand/>
                    <ManaZone/>
                    <Shield/>
                    <BattleZone/>
                    <Shield/>
                    <ManaZone/>
                    <CardsInHand/>
            </div>
        )
    }
}

export default Arena;