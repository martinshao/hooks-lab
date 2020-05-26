import './styles.css'
import React from 'react'

const initialState = {
  name: 'wangly',
  sex: '男',
  age: '18',
  phone: '13000000000',
  address: '中国......',
  duty: '总经理'
}

const USER_ENUM = {
  name: '姓名',
  sex: '性别',
  age: '年龄',
  phone: '电话',
  address: '家庭地址',
  duty: '身份',
}

function UserInfo() {
  const [user] = React.useState(initialState)
  console.info(Object.entries(user))
  const infoShow = Object.entries(user).map(([key, value]) => ({ label: USER_ENUM[key], value }))
  return (
    <div className="user-wrapper">
      {
        infoShow.map(({ label, value }) => (
          <div key={label} className="info-item">
            <span>{label}</span>
            <span>{value}</span>
          </div>
        ))
      }
    </div>
  )
}

export default UserInfo
