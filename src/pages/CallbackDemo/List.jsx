// import React, { useState, useEffect } from 'react'
import React, { memo } from 'react'
// import PropTypes from 'prop-types'

// export default function List({ getItems }) {
//   const [items, setItems] = useState([])
//   console.info('List is rendering...')
//   useEffect(() => {
//     setItems(getItems(2))
//     console.info('Updating Items...')
//   }, [getItems])

//   return items.map(item => <div key={item}>{item}</div>)
// }

// function List({ getItems }) {
//   return getItems().map(item => <div key={item}>{item}</div>)
// }

// List.propTypes = {
//   getItems: PropTypes.func,
// }

export default memo(({ getItems }) => {
  console.info('List is rendering...')
  return getItems().map(item => <div key={item}>{item}</div>)
})