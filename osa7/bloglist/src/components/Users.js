import React , {useEffect} from 'react'
import { connect } from 'react-redux'
import userService from '../services/users'
import { setUsers } from '../reducers/userReducer'

const Users = ({ users, setUsers }) => {

  useEffect(() => {
    userService
      .getAll()
      .then(receivedUsers => setUsers(receivedUsers))
  // eslint-disable-next-line 
  }, [])

  const userList = users.map(user => (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.blogs.length}</td>
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