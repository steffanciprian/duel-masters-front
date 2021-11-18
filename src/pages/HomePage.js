import {Component} from "react";
import Arena from "../components/Arena";
import '../css/HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div className='container-duel-masters'>
                <Arena/>

            </div>
        )
    }
}

export default HomePage;