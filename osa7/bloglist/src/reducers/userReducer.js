const initialState = {
  user: null,
  users: [],
}

export const setUser = (user) => {
  return {
    type: 'SET_USER',
    user: user,
  }
}

export const setUsers = (users) => {
  return {
    type: 'SET_USERS',
    users: users,
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
      
    case 'SET_USERS':
      return {
        ...state,
        users: action.users,
      }
  
    case 'CLEAR_USERS':
      return initialState

    default:
  }
  
  return state
}

export default reducer