import React from 'react';
import ReactDOM from 'react-dom';

import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import balanceReducer from './balanceReducer'
import Balance from './App'

const reducers = combineReducers({
    balance: balanceReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Balance />
    </Provider>
    , document.getElementById('root'));
