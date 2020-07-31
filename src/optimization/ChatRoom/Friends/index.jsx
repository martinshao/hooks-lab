import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChatRoom extends Component {

  static propTypes = {
    dataSource: PropTypes.array,
    friends: PropTypes.array,
  }

  render() {
    return (
      <div>
        {
          this.props.friends.map(friend => <span>{friend}</span>)
        }
      </div>
    )
  }
}

export default ChatRoom
