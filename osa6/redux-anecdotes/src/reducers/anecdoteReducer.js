import anecdoteService from '../services/anecdotes'

export const addVote = (data) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.update({
      ...data,
      votes: data.votes + 1
    })

    dispatch({
      type: 'UPDATE_ANECDOTE',
      data: updatedAnecdote
    })
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
    case 'UPDATE_ANECDOTE':
      return state.map(anecdote => {
        return anecdote.id === action.data.id 
          ? action.data
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