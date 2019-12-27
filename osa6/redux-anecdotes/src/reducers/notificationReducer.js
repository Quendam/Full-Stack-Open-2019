const initialState = {
  message: null
}

export const setNotification = (message, timeout) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      message: message
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