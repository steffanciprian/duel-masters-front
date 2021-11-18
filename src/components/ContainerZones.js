import {Component} from "react";
import '../css/ContainerZones.css'
import ManaZone from "./ManaZone";
import ShieldDeckGraveyard from "./ShieldDeckGraveyard";
import CardsInHand from "./CardsInHand";

class ContainerZones extends Component {

    render() {
        return (
            <div className='container-all-zones'>
                <CardsInHand/>
                <ManaZone/>
                <ShieldDeckGraveyard/>
            </div>
        )
    }
}

export default ContainerZones;