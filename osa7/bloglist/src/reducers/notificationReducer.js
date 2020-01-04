const initialState = {
  message: null,
  isError: false
}

export const setNotification = (message, notificationType, timeout) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      message: message,
      isError: notificationType === 'error'
    })

    setTimeout(() => dispatch({
      type: 'CLEAR_NOTIFICATION'
    }), timeout * 1000)
  }
}

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type){
    case 'SET_NOTIFICATION':
      return {
        ...state,
        message: action.message,
        isError: action.isError
      }
  
    case 'CLEAR_NOTIFICATION':
      return initialState
    default:
  }
  
  return state
}

export default reducer