import React from 'react';
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const handleAddAnecdote = (event) => {
    event.preventDefault()

    props.store.dispatch(addAnecdote(event.target.anecdote.value))

    event.target.anecdote.value = ''
    
    props.store.dispatch(setNotification('Added new anecdote'))
    setTimeout(() => props.store.dispatch(clearNotification())
    , 5000)
  }

  return (
    <div>
      <form onSubmit={handleAddAnecdote}>
        <div><input name='anecdote' /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm