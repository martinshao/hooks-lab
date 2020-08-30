import React, { useState } from 'react'
import Modal from './Modal'

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1
}

const OTHER_CONTENT_STYLES = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'red',
  padding: '10px',
  marginTop: 150,
}

function PortalDemo() {

  const [visible, setVisible] = useState(false)

  console.info('PortalDemo: visible...', visible)

  const toggleVisible = () => {
    setVisible(!visible)
  }


  const closeModal = () => {
    toggleVisible()
    console.info('This is onClose callback')
  }

  const confirm = () => {
    toggleVisible()
    console.info('This is confirm callback')
  }


  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button onClick={() => setVisible(true)}>Open Modal</button>

        <Modal
          title="弹框"
          visible={visible}
          confirm={confirm}
          onClose={closeModal}
          toggleVisible={toggleVisible}
        >
          <div>确认购买</div>
        </Modal>
      </div>

      <div style={OTHER_CONTENT_STYLES}>Other Content</div>
    </>
  )
}

export default PortalDemo