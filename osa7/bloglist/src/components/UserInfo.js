import React from 'react'

const UserInfo = ({ user, onLogout }) => (
  <span>
    {`${user.name} logged in` }
    <button onClick={onLogout}>logout</button>
  </span>
)

export default UserInfo