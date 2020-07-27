import React, { memo } from 'react'
import PropTypes from 'prop-types'

// function PrimitiveList({value}) {
//   console.info('%cPrimitiveList is rendering...', 'color: #dcff93')
//   return <div>this is count {value}</div>
// }

const PrimitiveList = memo(({ value }) => {
  console.info('%cPrimitiveList is rendering...', 'color: #dcff93')
  return <div>this is count {value}</div>
})

PrimitiveList.propTypes = {
  value: PropTypes.number,
}

export default PrimitiveList
