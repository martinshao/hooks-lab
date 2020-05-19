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

function UserInfo() {
  const [user] = React.useState(initialState)
  // return (
  //   <div className="user-wrapper">
  //     <div className="info-item">
  //       <span>姓名</span>
  //       <span>{user.name}</span>
  //     </div>
  //     <div className="info-item">
  //       <span>年龄</span>
  //       <span>{user.age}</span>
  //     </div>
  //     <div className="info-item">
  //       <span>性别</span>
  //       <span>{user.sex}</span>
  //     </div>
  //     <div className="info-item">
  //       <span>手机号</span>
  //       <span>{user.phone}</span>
  //     </div>
  //     <div className="info-item">
  //       <span>家庭住址</span>
  //       <span>{user.address}</span>
  //     </div>
  //     <div className="info-item">
  //       <span>家庭住址</span>
  //       <span>{user.duty}</span>
  //     </div>
  //   </div>
  // )
  // const mapKeys = ['姓名', '性别', '年龄', '电话', '家庭地址', '身份']
  // const result = new Map()
  // let i = 0
  // for (const key in user) {
  //   result.set(mapKeys[i], user[key])
  //   i++
  // }
  // const infoMap = result
  // const userRender = []
  // infoMap.forEach((value, label) => userRender.push(
  //   <div key={label} className="info-item">
  //     <span>{label}</span>
  //     <span>{value}</span>
  //   </div>
  // ))
  // return (
  //   <div className="user-wrapper">
  //     {userRender}
  //   </div>
  // )

  const USER_ENUM = {
    name: '姓名',
    sex: '性别',
    age: '年龄',
    phone: '电话',
    address: '家庭地址',
    duty: '身份',
  }
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
