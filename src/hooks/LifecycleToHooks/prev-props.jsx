/* eslint-disable */
import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const [updater, setUpdater] = useState(0)

  const prevCountRef = useRef()

  function forceUpdate() {
    setUpdater(updsater => updater + 1)
  }

  useEffect(() => {
    prevCountRef.current = count
  });

  const prevCount = prevCountRef.current

  return <h1>Now: {count}, before: {prevCount}</h1>
}