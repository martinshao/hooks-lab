import React from 'react'
import PropTypes from 'prop-types'

function ObjectList({ value }) {
  console.info('%cObjectList is rendering...', 'color: #f1f1b8')
  return value.map(num => <div key={num}>{num}</div>)
}

ObjectList.propTypes = {
  value: PropTypes.arrayOf(PropTypes.number).isRequired,
}

// const ObjectList = memo(({ value }) => {
//   console.info('%cObjectList is rendering...', 'color: #f1f1b8')
//   return value.map(num => <div key={num}>{num}</div>)
// })

export default ObjectList


// function MyComponent(props) {
/* render using props */
// }
// function areEqual(prevProps, nextProps) {
/*
return true if passing nextProps to render would return
the same result as passing prevProps to render,
otherwise return false
*/
// }
// export default React.memo(MyComponent, areEqual);

// function ObjectList({ value }) {
//   console.info('%cObjectList is rendering...', 'color: #f1f1b8')
//   return value.map(num => <div key={num}>{num}</div>)
// }

// function areEqual(prevProps, nextProps) {
//   return prevProps.value.length === nextProps.value.length
// }

// ObjectList.propTypes = {
//   value: PropTypes.arrayOf(PropTypes.number).isRequired,
// }

// export default memo(ObjectList, areEqual)