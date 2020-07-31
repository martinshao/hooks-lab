import React from 'react'

class FriendStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOnline: null };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    console.info('FriendStatus', window.chatAPI)
    // window.chatAPI.subscribeToFriendStatus(
    //   this.props.friend.id,
    //   this.handleStatusChange
    // );
  }
  componentWillUnmount() {
    // window.chatAPI.unsubscribeFromFriendStatus(
    //   this.props.friend.id,
    //   this.handleStatusChange
    // );
  }
  handleStatusChange(status) {
    this.setState({
      isOnline: status.isOnline
    });
  }

  render() {
    if (this.state.isOnline === null) {
      return 'Loading...';
    }
    return this.state.isOnline ? 'Online' : 'Offline';
  }
}

export default FriendStatus