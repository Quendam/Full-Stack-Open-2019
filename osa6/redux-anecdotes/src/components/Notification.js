import React from 'react'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  const message = props.store.getState().notification.message

  if(!message){
    return null
  }
  
  return (
    <div style={style}>
      {message}
    </div>
  )
}

export default Notification