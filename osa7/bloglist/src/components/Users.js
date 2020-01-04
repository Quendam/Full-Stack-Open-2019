import React from 'react'
import { connect } from 'react-redux'

const Users = ({ blogs }) => {
  const users = {};
  blogs.forEach(blog => {
    if(!users[blog.user.username]){
      users[blog.user.username] = {
        ...blog.user,
        blogs: 1
      }
    } else {
      users[blog.user.username].blogs++
    }
  });
    
  const userList = Object.values(users).map(user => (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.blogs}</td>
    </tr>
  ))

  return (
    <div>
      <table>
        <tr>
          <th></th>
          <th>blogs created</th>
        </tr>
        <tbody>
          {userList}
        </tbody>
      </table>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    blogs: state.blog.blogs,
  }
}

export default connect(
  mapStateToProps,
  null
)(Users)