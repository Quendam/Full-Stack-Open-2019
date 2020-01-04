import React from 'react'

const UserInfo = ({ user, onLogout }) => (
  <p>
    {`${user.name} logged in` }
    <button onClick={onLogout}>logout</button>
  </p>
)

export default UserInfo