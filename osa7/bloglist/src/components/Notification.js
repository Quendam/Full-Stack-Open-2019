import React from 'react'
import { connect } from 'react-redux'
import { Alert } from 'react-bootstrap'

const Notification = ({ message, isError }) => {
  
  if(message === null){
    return null
  }

  return(
    <Alert variant={isError ? 'warning' : 'success'}>
      {message}
    </Alert>
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
