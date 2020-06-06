import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@alicloud/console-components'

function ControlButtons({ actived, onStart, onPause, onReset, onSplit }) {
  return (
    <Choose>
      <When condition={actived}>
        <Button onClick={onSplit}>计次</Button>
        <Button onClick={onPause}>停止</Button>
      </When>
      <Otherwise>
        <Button onClick={onReset}>复位</Button>
        <Button onClick={onStart}>启动</Button>
      </Otherwise>
    </Choose>
  )
}

ControlButtons.propTypes = {
  actived: PropTypes.bool,
  onStart: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onSplit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
}

export default ControlButtons
