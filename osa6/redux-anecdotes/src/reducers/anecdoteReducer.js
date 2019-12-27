import anecdoteService from '../services/anecdotes'

export const addVote = (id) => {
  return {
    type: 'VOTE',
    data: {
      id: id
    }
  }
}

export const addAnecdote = (anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(anecdote)
    dispatch({
      type: 'ADD_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

const initialState = []

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type){
    case 'VOTE':
      return state.map(anecdote => {
        return anecdote.id === action.data.id 
          ? {
            ...anecdote, votes: anecdote.votes + 1
          }
          : anecdote
      })

    case 'ADD_ANECDOTE':

      return [
        ...state,
        action.data
      ]
    
    case 'INIT_ANECDOTES':
      return action.data
    
    default:
  }

  return state
}

export default reducer