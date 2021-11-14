import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import ReduxThunk from 'redux-thunk';
import reportWebVitals from "./reportWebVitals";
import {applyMiddleware, combineReducers, createStore} from "redux";
import { Navigate, Routes ,Route } from 'react-router-dom';

const rootReducer = combineReducers({
})

const initialState = {};
const store = createStore(rootReducer, initialState,
    applyMiddleware(ReduxThunk));


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route exact path="/duel">
                </Route>
            </Routes>
            <Navigate to={'/player'}/>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
