import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Modal.css'

import NewPortal from './NewPortal'

class Modal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      classes: null
    }
  }

  static propTypes = {
    visible: PropTypes.bool.isRequired,
  }

  closeModal = () => {
    console.info('Modal closeModal...')
    const { onClose } = this.props
    onClose && onClose()
    this.leaveAnimate()
  }

  confirm = () => {
    console.info('Modal confirm...')
    const { confirm } = this.props
    confirm && confirm()
    this.leaveAnimate()
  }

  maskClick = () => {
    this.props.toggleVisible()
  }

  enterAnimate = () => {
    const enterClasses = 'modal-enter'
    const enterActiveClasses = 'modal-enter-active'
    const enterEndActiveClasses = 'modal-enter-end'

    const enterTimeout = 0
    const enterActiveTimeout = 200
    const enterEndTimeout = 100

    this.setState({ classes: enterClasses })
    const enterActiveTimer = setTimeout(() => {
      this.setState({ classes: enterActiveClasses })
      clearTimeout(enterActiveTimer)
    }, enterTimeout);

    const enterEndTimer = setTimeout(() => {
      this.setState({ classes: enterEndActiveClasses })
      clearTimeout(enterEndTimer)
    }, enterTimeout + enterActiveTimeout)

    // 最后将类名置空,还原元素本来的状态
    const initTimer = setTimeout(() => {
      this.setState({ classes: '' })
      clearTimeout(initTimer)
    }, enterTimeout + enterActiveTimeout + enterEndTimeout)
  }

  leaveAnimate = () => {
    const leaveClasses = 'modal-leave'
    const leaveActiveClasses = 'modal-leave-active'
    const leaveEndActiveClasses = 'modal-leave-end'
    const leaveTimeout = 0
    const leaveActiveTimeout = 100
    const leaveEndTimeout = 200
    // 初始元素已经存在,所以不需要改变显隐状态
    this.setState({ classes: leaveClasses })
    const leaveActiveTimer = setTimeout(() => {
      this.setState({ classes: leaveActiveClasses })
      clearTimeout(leaveActiveTimer)
    }, leaveTimeout)
    const leaveEndTimer = setTimeout(() => {
      this.setState({ classes: leaveEndActiveClasses })
      clearTimeout(leaveEndTimer)
    }, leaveTimeout + leaveActiveTimeout)
    // 最后将显隐状态改为false，同时将类名还原为初始状态
    const initTimer = setTimeout(() => {
      this.setState({ classes: '' })
      clearTimeout(initTimer)
    }, leaveTimeout + leaveActiveTimeout + leaveEndTimeout)
  }



  render() {
    const {
      title,
      visible,
      children,
    } = this.props

    const { classes } = this.state

    console.info('Modal: visible...', visible, classes)

    return (
      <NewPortal>
        <div className="modal-wrapper">
          {
            visible &&
            <div className={`modal ${classes}`}>
              <div className="modal-title">{title}</div>
              <div className="modal-content">{children}</div>
              <div className="modal-operator">
                <button
                  onClick={this.closeModal}
                  className="modal-operator-close"
                >取消</button>
                <button
                  onClick={this.confirm}
                  className="modal-operator-confirm"
                >确认</button>
              </div>
            </div>
          }
          {/* 这里暂时注释蒙层，防止干扰 */}
          {/* <div
          className="mask"
          onClick={this.maskClick}
        ></div> */}
        </div>
      </NewPortal>
    )
  }
}

export default Modal;