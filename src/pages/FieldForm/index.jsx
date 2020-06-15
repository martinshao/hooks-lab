import './style.less'
import React from 'react'
import PropTypes from 'prop-types'
import Table from '@ali/wind-rc-table'
import ClassForm from '../ClassForm'
import { Input, Overlay, Select, Button, Dialog, Message } from '@ali/wind'

const editStyle = {
  display: 'inline-block',
  height: '32px',
  lineHeight: '32px',
  cursor: 'pointer',
  color: '#0070CC',
}

const columns = [
  {
    key: 'key',
    title: 'key',
    dataIndex: 'key',
  },
  {
    key: 'value',
    title: 'value',
    dataIndex: 'value',
  },
]

/**
 * @name FieldForm
 * @type component
 */
class FieldForm extends React.Component {
  static propTypes = {
    AlignItem: PropTypes.object,
    onAttrChange: PropTypes.func,
    onAlignDelete: PropTypes.func,
  }

  state = {
    visible: false,
    formVis: false,
    primaryKey: [],
  }

  startAddClass = () => {
    this.setState({
      formVis: !this.state.formVis
    })
  }

  startDelClass = () => {
    const { primaryKey } = this.state
    const { AlignItem: { id, classDef }, onAttrChange } = this.props
    const newDataSource = classDef.filter(
      item => !primaryKey.includes(item.className)
    )
    onAttrChange(id, newDataSource)
  }

  onClick = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  onFormClose = () => {
    this.setState({
      formVis: false,
    })
  }

  hasErrors(errors) {
    if (errors === null) return false;
    return Object.keys(errors).some(field => errors[field])
  }

  handleFormSubmit = () => {
    const { AlignItem: { id, options }, onAttrChange } = this.props
    let formField = this.refs.getFormVlaue
    formField.validateFields((err, values) => {
      if (this.hasErrors(err)) return false
      const { key, value } = values
      options.push({ key, value })
      onAttrChange(id, { options })
    })
    this.onFormClose()
  };

  handleAddClassSubmit = () => {
    Message.success("编辑字段成功")
    this.setState({
      primaryKey: [],
      visible: false,
    })
  }

  handleSelectedChange = primaryKey => {
    this.setState({ primaryKey })
  }

  handleItemDel = (id) => {
    const { onAlignDelete } = this.props
    onAlignDelete(id)
  }

  handleColNameChange = (name) => {
    const { AlignItem: { id }, onAttrChange } = this.props
    onAttrChange(id, { name })
  }

  handleClassTypeChange = (type) => {
    const { AlignItem: { id }, onAttrChange } = this.props
    onAttrChange(id, { type })
  }

  handleDescChange = (description) => {
    const { AlignItem: { id }, onAttrChange } = this.props
    onAttrChange(id, { description })
  }

  render() {
    const { AlignItem, classType } = this.props
    const { visible, primaryKey } = this.state
    const isShowDelBtn = primaryKey.length > 0
    let options = AlignItem.options
    let option = []
    if (options === null) {
      option = []
    } else {
      option = options
    }
    return (
      <div className="field-label">
        <p className="field-title">
          <span
            className="field-close"
            onClick={() => { this.handleItemDel(AlignItem.id) }}
          />
        </p>
        <div className="field-content">
          {/* Class name 字段 */}
          <div className="field-item">
            <p>* 列名</p>
            <Input
              value={AlignItem.name}
              onChange={this.handleColNameChange}
            />
          </div>
          {/* Class type 字段 */}
          <div className="field-item">
            <p>* 字段类型</p>
            <Select
              style={{ width: 200 }}
              dataSource={classType}
              defaultValue={AlignItem.type}
              onChange={this.handleClassTypeChange}
            />
          </div>
          {/* Class definition 字段 */}
          {
            AlignItem.type === 'ENUM' &&
            <div className="field-item">
              <p>* Class定义</p>
              <span
                onClick={this.onClick}
                ref={ref => {
                  this.btn = ref;
                }}
                style={editStyle}
              >点击编辑</span>
              <Overlay
                visible={visible}
                target={() => this.btn}
                safeNode={() => this.btn}
                onRequestClose={this.onClose}
                canCloseByOutSideClick={false}
              >
                <div className="overlay-demo">
                  <span className="form-title">
                    编辑Class定义
                </span>
                  <Button
                    type="secondary"
                    style={{ marginRight: 12, marginBottom: 12, }}
                    onClick={this.startAddClass}
                  >添加分类</Button>
                  {
                    isShowDelBtn &&
                    <Button
                      warning
                      onClick={this.startDelClass}
                      style={{ marginBottom: 12, }}
                    >删除分类</Button>
                  }
                  <Table
                    size='small'
                    columns={columns}
                    pagination={false}
                    primaryKey="className"
                    dataSource={option}
                    rowSelection={{
                      onChange: this.handleSelectedChange,
                      selectedRowKeys: primaryKey,
                    }}
                  />
                  <Button
                    type="primary"
                    style={{ marginTop: 12 }}
                    onClick={this.handleAddClassSubmit}
                  >完成</Button>
                  <Dialog
                    title="新增class"
                    visible={this.state.formVis}
                    onOk={this.handleFormSubmit}
                    onCancel={this.onFormClose}
                    onClose={this.onFormClose}
                  >
                    <ClassForm ref="getFormVlaue" />
                  </Dialog>
                </div>
              </Overlay>
            </div>
          }
          {/* description 字段 */}
          <div className="field-item">
            <p>描述</p>
            <Input
              value={AlignItem.description}
              onChange={this.handleDescChange}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default FieldForm
