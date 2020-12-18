import React from 'react'
import useKeyPress from '../useKeyPress'

function UseKeyPressDemo() {

  const happyPress = useKeyPress('h')
  const sadPress = useKeyPress('s')
  const robotPress = useKeyPress('r')
  const foxPress = useKeyPress('f')

  return (
    <div>
      <Label value='h' isBold={happyPress} />
      <Label value='s' isBold={sadPress} />
      <Label value='r' isBold={robotPress} />
      <Label value='f' isBold={foxPress} />

      <div
        style={{
          fontSize: '200px',
          width: '100%',
          minHeight: '240px',
          backgroundColor: '#e6f5f8'
        }}
      >
        {happyPress && '😊'}
        {sadPress && '😢'}
        {robotPress && '🤖'}
        {foxPress && '🦊'}
      </div>
    </div>
  )
}

const Label = ({ value, isBold }) => (
  <div
    style={{
      display: 'inline-block',
      margin: '15px',
      fontSize: '42px',
      fontWeight: isBold ? 'bold' : 'normal'
    }}
  >
    {value}
  </div>
)

export default UseKeyPressDemo