import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export default function List({ getItems }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(getItems(2))
    console.info('Updating Items...')
  }, [getItems])

  return items.map(item => <div key={item}>{item}</div>)
}

List.propTypes = {
  getItems: PropTypes.func,
}
