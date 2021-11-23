import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ReduxThunk from 'redux-thunk';
import reportWebVitals from "./reportWebVitals";
import {applyMiddleware, combineReducers, createStore} from "redux";
import HomePage from "./pages/HomePage";
import LoginAndStart from "./pages/LoginAndStart";
import addPlayerToBattlezoneReducer from "./redux/reducer/AddPlayerToBattlezoneReducer";
import setIsTappedReducer from "./redux/reducer/SetIsTappedReducer";

const rootReducer = combineReducers({
    addPlayerToBattlezoneReducer,
    setIsTappedReducer,
})

const initialState = {};
const store = createStore(rootReducer, initialState,
    applyMiddleware(ReduxThunk));


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/game">
                    <HomePage/>
                </Route>
                <Route exact path="/login">
                    <LoginAndStart/>
                </Route>

            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
