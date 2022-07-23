import React from 'react'
import { useQuery } from 'react-query'

import { getUsers } from './services/useService'

export default function ReactQueryDemo() {
  const { data, isLoading, error } = useQuery('users', getUsers)
  if (isLoading) return 'Loading'
  if (error) return 'Oops!'
  return (
    <div>
      {data[0].username}
    </div>
  )
}
