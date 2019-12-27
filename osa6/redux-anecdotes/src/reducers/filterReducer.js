const initialState = {
  term: ''
}

export const setFilter = (term) => {
  return {
    type: 'SET_FILTER',
    term: term
  }
}

export const clearFilter = () => {
  return {
    type: 'CLEAR_FILTER'
  }
}

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type){
    case 'SET_FILTER':
      return {
        ...state,
        term: action.term
      }
    case 'CLEAR_FILTER':
      return {
        ...state,
        term: ''
      }
    default:
  }
  return state
}

export default reducer