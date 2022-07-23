import React, { useState } from 'react';
import ReactDom from 'react-dom'
import styled from 'styled-components'

const StyledModalRoot = styled.div`
  position: fixed;
  z-index: 1001;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba( 0, 0, 0, 0.2 );

  >.box {
    position: relative;
    display: grid;
    place-items: center;
    width: 350px;
    height: 200px;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12);
  }
`

function Modal({ visible, onClose, children }) {
  return (
    visible && ReactDom.createPortal(
      <StyledModalRoot>
        <div className="box">
          <div className="header"></div>
          <div className="content">
            {children}
          </div>
          <br />
          <div className="button-group">
            <button className="on-ok">Ok</button>
            <button className="on-cancel" onClick={onClose}>Cancel</button>
          </div>
        </div>
      </StyledModalRoot>,
      document.body
    )
  );
}

function DialogDemo() {
  const [visible, setVisile] = useState(false)

  const showModal = () => setVisile(true)
  const onClose = () => setVisile(false)

  return (
    <div>
      <button onClick={showModal}>show modal</button>
      <Modal visible={visible} onClose={onClose} >
        congratulation
      </Modal>
    </div>
  )
}

export default DialogDemo;
