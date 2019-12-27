import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }
  const neutral = () => {
    store.dispatch({
      type: 'OK'
    })
  }
  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }
  const zero = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }
  const state = store.getState();
  const total = state.good + state.ok + state.bad
  const positive = state.good / total * 100
  const average = (state.good - state.bad) / total
  console.log(positive)
  console.log(state.good - state.bad)
console.log("Total", total);

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={good}>hyvä</button> 
      <button onClick={neutral}>neutraali</button> 
      <button onClick={bad}>huono</button>
      <button onClick={zero}>nollaa tilastot</button>
      
      <h1>Statistics</h1>
      <div>hyvä {state.good}</div>
      <div>neutraali {state.ok}</div>
      <div>huono {state.bad}</div>
      <div>average {total > 0 ? average : '-'}</div>
      <div>positive {total > 0 ? positive + "%": '-'}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
