import React from 'react';
import { connect } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const handleAddAnecdote = (event) => {
    event.preventDefault()

    props.addAnecdote(event.target.anecdote.value)

    event.target.anecdote.value = ''

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
