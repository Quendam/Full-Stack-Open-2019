import React from 'react'
import { addVote } from '../reducers/anecdoteReducer'

const AnecdoteList = (props) => {
  const anecdotes = props.store.getState().anecdotes

  const vote = (id) => {
    props.store.dispatch(addVote(id))
  }

  return (
    <div>
        {anecdotes.sort((a,b) => {
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