import React from 'react'
import { Link } from 'react-router-dom'
import UserInfo from './UserInfo'

const Menu = ({user, onLogout}) => (
  <div className='menu'>
    <Link to="/">Blogs</Link>
    <Link to="/users">Users</Link>
    
    <UserInfo
      user={user}
      onLogout={onLogout}
    />
  </div>
)

export default Menu