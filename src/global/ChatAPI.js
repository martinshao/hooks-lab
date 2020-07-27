class ChatAPI {

  constructor() {
    this.subscribers = [];
  }

  subscribeToFriendStatus(id, callback) {
    let callbacks = this.subscribers[id];
    if (!callbacks) {
      this.subscribers[id] = [callback];
    } else {
      callbacks.push(callback);
    }
  }

  unsubscribeFromFriendStatus(id, callback) {
    const callbacks = this.subscribers[id]
    if (Array.isArray(callbacks)) {
      console.info(callbacks.indexOf(callback))
      this.subscribers[id].splice(callbacks.indexOf(callback), 1)
    }
  }

  publish(id, ...args) {
    let callbacks = this.subscribers[id] || [];
    callbacks.forEach(callback => callback(...args));
  }
}

export default ChatAPI