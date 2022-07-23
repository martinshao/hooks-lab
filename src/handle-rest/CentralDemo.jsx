
import React, { useState, useEffect } from 'react'
import { getUsers } from './services/useService'

export default function CentralDemo() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getUsers()
      .then(json => {
        setUsers(json)
        setLoading(false)
      })
      .catch(error => {
        console.error(error)
        setError(error)
      })
  })
  if (loading) return 'Loading...'
  if (error) return 'Oops!'
  return (
    <div>
      {users[0].username}
    </div>
  )
}
