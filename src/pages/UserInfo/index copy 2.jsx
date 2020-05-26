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

const mapKeys = ['姓名', '性别', '年龄', '电话', '家庭地址', '身份']

function UserInfo() {
  const [user] = React.useState(initialState)
  const result = new Map()
  let i = 0
  for (const key in user) {
    result.set(mapKeys[i], user[key])
    i++
  }
  const infoMap = result
  const userRender = []
  infoMap.forEach((value, label) => userRender.push(
    <div key={label} className="info-item">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  ))
  return (
    <div className="user-wrapper">
      {userRender}
    </div>
  )

}

export default UserInfo
