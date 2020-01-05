import React from 'react'
import { connect } from 'react-redux'

const UserDetails = ({ users, selected }) => {

  const selectedUser = users.reduce((prev, curr) =>
    curr.id === selected  ? curr : prev ,{ blogs:[] }
  )
  const blogList = selectedUser.blogs.map(blog => (
    <li key={blog.id}>
      {blog.title}
    </li>
  ))

  return (
    <div>
      <h2>{selectedUser.name}</h2>
      <ul>
        {blogList}
      </ul>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    users: state.user.users,
  }
}

export default connect(
  mapStateToProps,
  null
)(UserDetails)