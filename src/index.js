import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ReduxThunk from 'redux-thunk';
import reportWebVitals from "./reportWebVitals";
import {applyMiddleware, combineReducers, createStore} from "redux";
import HomePage from "./pages/HomePage";
import LoginAndStart from "./pages/LoginAndStart";
import fetchPlayersReducer from '../src/redux/reducer/FetchPlayersReducer';
import addPlayerToBattlezoneReducer from "./redux/reducer/AddPlayerToBattlezoneReducer";

const rootReducer = combineReducers({
    fetchPlayersReducer,
    addPlayerToBattlezoneReducer,
})

const initialState = {};
const store = createStore(rootReducer, initialState,
    applyMiddleware(ReduxThunk));


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route exact path="/game" element={<HomePage/>}/>
                <Route exact path="/login" element={<LoginAndStart/>}/>
            </Routes>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
