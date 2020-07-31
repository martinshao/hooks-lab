import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { List, Avatar, Switch, Button } from 'antd';
import './index.css'

import Friends from './Friends'

const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({
    id: `20200728${i}`,
    status: true,
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles.',
  });
}

function onChange(checked, id) {
  console.log(`switch to ${checked}`, id);
}

class ChatRoom extends Component {

  state = {
    friends: []
  }

  outLine = id => {
    console.info('outLine...', id)
  }

  addFriend = id => {
    console.info(id)
    const friends = this.state.friends.concat(id)
    this.setState({ friends })

  }

  render() {
    return (
      <div className="box">
        <div className="left"><List
          itemLayout="vertical"
          size="large"
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.id}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
              />
              <Switch defaultChecked onChange={() => onChange(item.id)} />
              <Button onClick={() => this.addFriend(item.id)} style={{ marginLeft: 20 }} type="primary">添加好友</Button>
            </List.Item>
          )}
        />
        </div>
        <div className="right">
          <Friends dataSource={listData} friends={this.state.friends} />
        </div>
      </div>
    )
  }
}

export default ChatRoom
