const initialState = {
  message: null
}

export const setNotification = (message) => {
  return {
    type: 'SET_NOTIFICATION',
    message: message
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR_NOTIFICATION'
  }
}

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type){
    case 'SET_NOTIFICATION':
      return {
        ...state,
        message: action.message
      }
    case 'CLEAR_NOTIFICATION':
      return {
        ...state,
        message: null
      }
    default:
  }
  return state
}

export default reducer