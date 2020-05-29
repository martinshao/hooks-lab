import React from 'react'
import { Input } from '@ali/wind'

class Child extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    const { onChange, value } = this.props;// 有默认传来的 chang事件，和 value值
    const { getFieldProps, boy } = this.props;
    return (
      <div>
        <Input onChange={(e) => onChange(e.target.value)} value={boy.name} />
      </div>
    );
  }
}

export default Child
