import React from 'react';
import { connect } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {
  const handleAddAnecdote = async (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''

    const newAnecdote = await anecdoteService.createNew(anecdote)

    console.log("new anecdote", newAnecdote)
    props.addAnecdote(newAnecdote)

    props.setNotification('Added new anecdote')
    setTimeout(() => props.clearNotification()
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

const mapDispatchToProps = {
  addAnecdote, setNotification, clearNotification
}

export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)
