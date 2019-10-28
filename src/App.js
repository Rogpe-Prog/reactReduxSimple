import React from 'react';
import './App.css';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { plus, minus, balanceChanged } from './balanceAction'

const App = props => (

    <div className="App">
      <h2>Balance Account Bank</h2>
      <h2>$ {props.balance.balance}</h2>

      <input onChange={props.balanceChanged}
        value={props.balance.valueBalance}
        type="number" />

      <div>
        <button onClick={props.plus}> + </button>
        <button onClick={props.minus}> - </button>
      </div>
    </div>
)

const mapStateToProps = state => ({ balance: state.balance })
const mapDispatchToProps  = dispatch => bindActionCreators({ plus, minus, balanceChanged }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
