import React from 'react';
import {  addAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
  const handleAddAnecdote = (event) => {
    event.preventDefault()

    props.store.dispatch(addAnecdote(event.target.anecdote.value))

    event.target.anecdote.value = ''
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleAddAnecdote}>
        <div><input name='anecdote' /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm