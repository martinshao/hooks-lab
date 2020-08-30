import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Modal.css'

class Modal extends Component {

  constructor(props) {
    super(props)
  }

  static propTypes = {
    visible: PropTypes.bool.isRequired,
  }

  closeModal = () => {
    console.info('Modal closeModal...')
    const { onClose } = this.props
    onClose && onClose()
  }

  confirm = () => {
    console.info('Modal confirm...')
    const { confirm } = this.props
    confirm && confirm()
  }

  maskClick = () => {
    this.props.toggleVisible()
  }

  render() {
    const {
      title,
      visible,
      children,
    } = this.props

    console.info('Modal: visible...', visible)

    return visible && (
      <div className="modal-wrapper">
        <div className="modal">
          <div className="div-title">{title}</div>
          <div className="modal-content">{children}</div>
          <div className="modal-oprator">
            <button className="modal-operator-close" onClick={this.closeModal}>取消</button>
            <button className="modal-operator-confirm" onClick={this.confirm}>确认</button>
          </div>
        </div>
        <div className="mask" onClick={this.maskClick} />
      </div>
    )
  }
}

export default Modal;