// import './styles.css'
// import React from 'react'

// const initialState = {
//   id: '10001',
//   name: 'wangly',
//   sex: '男',
//   age: '18',
//   phone: '13000000000',
//   address: '中国......',
//   duty: '总经理'
// }

// function UserInfo() {
//   const [user] = React.useState(initialState)
//   return (
//     <div className="user-wrapper">
//       <div className="info-item">
//         <span>姓名</span>
//         <span>{user.name}</span>
//       </div>
//       <div className="info-item">
//         <span>年龄</span>
//         <span>{user.age}</span>
//       </div>
//       <div className="info-item">
//         <span>性别</span>
//         <span>{user.sex}</span>
//       </div>
//       <div className="info-item">
//         <span>手机号</span>
//         <span>{user.phone}</span>
//       </div>
//       <div className="info-item">
//         <span>家庭住址</span>
//         <span>{user.address}</span>
//       </div>
//       <div className="info-item">
//         <span>家庭住址</span>
//         <span>{user.duty}</span>
//       </div>
//     </div>
//   )
// }

// export default UserInfo

import './styles.css'
import React from 'react'

const initialState = {
  name: '邵孤城',
  sex: '男',
  age: '18',
  phone: '13000000000',
  address: '中国......',
  duty: '总经理',
  country: 'China',
}

const USER_ENUM = {
  name: '姓名',
  sex: '性别',
  age: '年龄',
  phone: '电话',
  address: '家庭地址',
  duty: '身份',
  country: '国家',
}

const calculator = user => Object.entries(user).map(([key, value]) => ({ label: USER_ENUM[key], value }))

const UserItem = ({ info: { label, value }, onChange }) => (
  <div key={label} className="info-item">
    <span>{label}</span>
    <span onClick={onChange}>{value}</span>
  </div>
)

function UserInfo() {
  const [user] = React.useState(initialState)
  const onChange = (value) => {
    console.info('onChange...', value)
  }
  return (
    <div className="user-wrapper">
      {
        calculator(user).map((info, index) => (
          <UserItem onChange={onChange} key={index} info={info} />
        ))
      }
    </div>
  )
}

export default UserInfo
