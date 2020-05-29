import React, { PureComponent } from 'react'
import { Button, Icon, Input } from '@alicloud/console-components'

class InputArray extends PureComponent {
  constructor(props) {
    super(props)
  }

  handleChange = (v, e, i) => {
    const { value, onChange } = this.props
    const newValue = [...value]

    newValue[i] = v

    onChange(newValue)
  }

  handleDelete = e => {
    const target = e.currentTarget
    const index = target.parentNode.parentNode.firstChild.dataset.index
    const { value, onChange } = this.props
    const newValue = [...value]

    newValue.splice(Number(index), 1)

    onChange(newValue)
  }

  handleAdd = () => {
    const { value, onChange } = this.props
    const newValue = [...value, '']

    onChange(newValue)
  }

  render() {
    const { value, ...others } = this.props

    const closeBtn = <Icon type="close-circle" onClick={this.handleDelete} />

    return (
      <div className="input-array-component">
        {value.map((v, i) => {
          return (
            <div key={i}>
              <Input
                {...others}
                value={v}
                suffix={closeBtn}
                data-index={i}
                onChange={(v, e) => this.handleChange(v, e, i)}
              />
            </div>
          );
        })}
        <div>
          <Button type="dashed" icon="plus" onClick={this.handleAdd}>添加</Button>
        </div>
      </div>
    );
  }
}

InputArray.defaultProps = {
  value: []
}

export default InputArray
