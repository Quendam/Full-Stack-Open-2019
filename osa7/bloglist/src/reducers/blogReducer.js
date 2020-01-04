const initialState = {
  blogs: [],
}

export const setBlogs = (blogs) => {
  return {
    type: 'SET_BLOGS',
    blogs: blogs,
  }
}

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type){
    case 'SET_BLOGS':
      return {
        ...state,
        blogs: action.blogs,
      }
  
    case 'CLEAR_BLOGS':
      return initialState
    default:
  }
  
  return state
}

export default reducer