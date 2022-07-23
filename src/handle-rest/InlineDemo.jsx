import React, { useState, useEffect } from 'react'

export default function InlineDemo() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}users`)
      .then(response => {
        if (response.ok) return response.json()
        throw response
      })
      .then(json => {
        setUsers(json)
      })
      .catch(error => {
        console.error(error)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) return (
    <div>Loading...</div>
  )
  if (error) return (
    <div>Oops!</div>
  )
  return (
    <div>
      {users[0].username}
    </div>
  )
}
