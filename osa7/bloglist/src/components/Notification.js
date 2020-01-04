import React from 'react'
import { connect } from 'react-redux'

const Notification = ({ message, isError }) => {
  console.log("Notification ", message, isError);
  
  if(message === null){
    return null
  }

  return(
    <div className={isError ? 'error' : 'info'}>
      {message}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    message: state.notification.message,
    isError: state.notification.isError
  }
}

export default connect(
  mapStateToProps,
  null
)(Notification)
