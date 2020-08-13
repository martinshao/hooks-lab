import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class PrimitiveList extends PureComponent {
  static propTypes = {
    value: PropTypes.number,
  }

  render() {
    console.info('%cPrimitiveList is rendering...', 'color: #dcff93')
    return <div>this is count {this.props.value}</div>
  }
}

export default PrimitiveList
