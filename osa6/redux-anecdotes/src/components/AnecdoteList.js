import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const anecdotes = props.anecdotes
  const filter = props.filter.term

  const vote = (id) => {
    props.addVote(id)

    const anecdote = anecdotes.reduce((prev, current) => 
      current.id === id ? current : prev, {content: 'unknown'})

    props.setNotification(`You voted for '${anecdote.content}'`)
    setTimeout(() => props.clearNotification()
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
    notification: state.notification
  }
}

const mapDispatchToProps = {
  addVote, setNotification, clearNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)
 