import React, { useState, useEffect } from 'react'
// import React from 'react'
import PropTypes from 'prop-types'

function List({ getItems }) {
  const [items, setItems] = useState([])
  useEffect(() => {
    setItems(getItems(2))
    console.info('Updating Items...')
  }, [getItems])

  console.info('%cList is rendering...', 'color: #f1f1b8')
  return items.map(item => <div key={item}>{item}</div>)
}

// function List({ getItems }) {
//   console.info('List is rendering...')
//   return getItems().map(item => <div key={item}>{item}</div>)
// }

List.propTypes = {
  getItems: PropTypes.func,
}

export default List;

// export default memo(({ getItems }) => {
//   console.info('List is rendering...')
//   return getItems().map(item => <div key={item}>{item}</div>)
// })