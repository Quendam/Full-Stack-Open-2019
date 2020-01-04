const initialState = {
  user: null,
}

export const setUser = (user) => {
  return {
    type: 'SET_USER',
    user: user,
  }
}

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type){
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      }
  
    case 'CLEAR_USER':
      return initialState
    default:
  }
  
  return state
}

export default reducer