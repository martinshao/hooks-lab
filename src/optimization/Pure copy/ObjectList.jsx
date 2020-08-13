// import React, { PureComponent } from 'react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// export class ObjectList extends PureComponent {
//   static propTypes = {
//     value: PropTypes.arrayOf(PropTypes.number).isRequired,
//   }

//   render() {
//     console.info('%cObjectList is rendering...', 'color: #f1f1b8')
//     return this.props.value.map(num => <div key={num}>{num}</div>)
//   }
// }

export class ObjectList extends Component {
  static propTypes = {
    value: PropTypes.arrayOf(PropTypes.number).isRequired,
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.value.length !== this.props.value.length
  }

  render() {
    console.info('%cObjectList is rendering...', 'color: #f1f1b8')
    return this.props.value.map(num => <div key={num}>{num}</div>)
  }
}

export default ObjectList
