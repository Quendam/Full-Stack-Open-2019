import React , { useEffect } from 'react'
import { connect } from 'react-redux'
import userService from '../services/users'
import { setUsers } from '../reducers/userReducer'
import { Link } from 'react-router-dom'

const Users = ({ users, setUsers }) => {

  useEffect(() => {
    userService
      .getAll()
      .then(receivedUsers => setUsers(receivedUsers))
  // eslint-disable-next-line
  }, [])

  const userList = users.map(user => (
    <tr key={user.id}>
      <td><Link to={`/users/${user.id}`}>{user.name}</Link></td>
      <td data-cy='user-blog-count'>
        {user.blogs.length}
      </td>
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

const mapDispatchToProps = {
  setUsers
}

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)