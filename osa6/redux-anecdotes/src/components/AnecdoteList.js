import React from 'react'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const anecdotes = props.store.getState().anecdotes
  const filter = props.store.getState().filter.term

  const vote = (id) => {
    props.store.dispatch(addVote(id))

    const anecdote = anecdotes.reduce((prev, current) => 
      current.id === id ? current : prev, {content: 'unknown'})

    props.store.dispatch(setNotification(`You voted for '${anecdote.content}'`))
    setTimeout(() => props.store.dispatch(clearNotification())
    , 5000)
  }

  return (
    <div>
        {anecdotes.filter(a => filter === '' || a.content.indexOf(filter) !== -1)
        .sort((a,b) => {
          return a.votes === b.votes
            ? 0 
            : a.votes > b.votes ? -1 : 1
        }).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        )}
    </div>
  )
}

export default AnecdoteList