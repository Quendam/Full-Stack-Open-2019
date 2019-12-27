import React from 'react';
import { connect } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const handleAddAnecdote = async (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''

    props.addAnecdote(anecdote)

    props.setNotification('Added new anecdote', 5)
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
  addAnecdote, setNotification
}

export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)
