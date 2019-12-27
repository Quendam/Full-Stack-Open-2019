import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

  const vote = (data) => {
    props.addVote(data)

    const anecdote = props.visibleAnecdotes.reduce((prev, current) => 
      current.id === data.id ? current : prev, {content: 'unknown'})

    props.setNotification(`You voted for '${anecdote.content}'`)
    setTimeout(() => props.clearNotification()
    , 5000)
  }

  return (
    <div>
        {props.visibleAnecdotes.sort((a,b) => {
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
              <button onClick={() => vote(anecdote)}>vote</button>
            </div>
          </div>
        )}
    </div>
  )
}

const AnecdotesToShow = ({anecdotes, filter}) => {
  if(filter.term === ""){
    return anecdotes
  }

  return anecdotes.filter(a => a.content.indexOf(filter.term) !== -1)
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: AnecdotesToShow(state),
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
 