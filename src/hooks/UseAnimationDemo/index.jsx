import React from 'react'
import useAnimation from '../useAnimation'

function UseAnimationDemo() {

  const animation1 = useAnimation('elastic', 600, 1000)
  // const animation2 = useAnimation('elastic', 600, 2000)
  // const animation3 = useAnimation('elastic', 600, 3000)

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Ball
        innerStyle={{
          marginTop: animation1 * 200 - 100
        }}
      />
      {/* <Ball
        innerStyle={{
          marginTop: animation2 * 200 - 100
        }}
      />

      <Ball
        innerStyle={{
          marginTop: animation3 * 200 - 100
        }}
      /> */}
    </div>
  )
}

const Ball = ({ innerStyle }) => (
  <div
    style={{
      width: 100,
      height: 100,
      marginRight: '40px',
      borderRadius: '50px',
      backgroundColor: '#4dd5fa',
      ...innerStyle
    }}
  />
)

export default UseAnimationDemo