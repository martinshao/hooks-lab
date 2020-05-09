import React, { useState } from 'react'
import Content from './Content'

function ProfilePage() {
  const [user, setUser] = useState('kobe')
  return (
    <>
      <button onClick={() => setUser('kawhi')}>change user</button>
      <Content user={user} />
      <h1>{`Hello ${user}`}</h1>
    </>
  )
}

export default ProfilePage

