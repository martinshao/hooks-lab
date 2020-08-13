import React from 'react'

function PureRender() {
  console.info('%cPureRender is rendering', 'color: deepskyblue')
  return (
    <div>
      一个纯的渲染组件
    </div>
  )
}

export default PureRender

