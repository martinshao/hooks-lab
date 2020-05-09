import React from 'react'

// function CountButton({ onClick, count }) {
//   console.info(`%c CountButton...${count}`, 'color:turquoise;font-size:16px')
//   return <button onClick={onClick}>{count}</button>
// }

/**
 * useCallback 的真正目的还是在于缓存了每次渲染时 inline callback 的实例，
 * 这样方便配合上子组件的 shouldComponentUpdate 或者 React.memo 起到减少
 * 不必要的渲染的作用。需要不断提醒自己注意的是，在大部分 callback 都会是
 * inline callback 的未来，React.memo 和 React.useCallback 一定记得
 * 需要配对使用，缺了一个都可能导致性能不升反“降”，毕竟无意义的浅比较也是要
 * 消耗那么一点点点的性能。
 */

 /**
  * 回到 Hooks 总结一下，useCallback 的作用在于利用 memoize 减少无效的
  * re-render，来达到性能优化的作用。还是那句老生常谈的话，“不要过早的性能优化”。
  * 从实际开发的经验来看，在做这类性能优化时，一定得观察比较优化的结果，因为某个
  * 小角落的 callback 就可能导致优化前功尽弃，甚至是适得其反。
  */

const CountButton = React.memo(function CountButton({ onClick, count }) {
  console.info(`%c CountButton...${count}`, 'color:turquoise;font-size:16px')
  return <button onClick={onClick}>{count}</button>
})

function DualCounter() {
  // const [count1, setCount1] = React.useState(0)
  // const increment1 = () => setCount1(c => c + 1)

  // const [count2, setCount2] = React.useState(0)
  // const increment2 = () => setCount2(c => c + 1)

  const [count1, setCount1] = React.useState(0)
  const increment1 = React.useCallback(() => setCount1(c => c + 1), [])

  const [count2, setCount2] = React.useState(0)
  const increment2 = React.useCallback(() => setCount2(c => c + 1), [])

  return (
    <>
      <CountButton count={count1} onClick={increment1} />
      <CountButton count={count2} onClick={increment2} />
    </>
  )
}

export default DualCounter