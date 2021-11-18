import {Component} from "react";
import '../css/ShieldDeckGraveYard.css'
import Shield from "./Shield";
import GraveYard from "./GraveYard";
import Deck from "./Deck";

class ShieldDeckGraveyard extends Component {

    render() {
        return (
            <div className='shield-deck-graveyard'>
                <GraveYard/>
                <Shield/>
                <Deck/>
            </div>
        )
    }
}

export default ShieldDeckGraveyard;