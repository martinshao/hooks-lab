import React, { useState } from 'react'
import renderIf from 'render-if'
import { NumberPicker } from '@alicloud/console-components'

// function RenderIfDemo() {
//   const [visible, setVisible] = useState(false)
//   const handleToggle = () => setVisible(!visible)
//   return (
//     <>
//       <Button type="primary" onClick={handleToggle}>Toggle</Button>
//       {
//         renderIf(visible)(
//           <span>The universe is working</span>
//         )
//       }
//     </>
//   )
// }

// function RenderIfDemo() {
//   const [visible, setVisible] = useState(true)
//   const handleToggle = () => setVisible(!visible)
//   return (
//     <>
//       <Button type="primary" onClick={handleToggle}>Toggle</Button>
//       {
//         renderIf(visible)(() => (
//           <span>This is only invoked if the universe is working</span>
//         ))
//       }
//     </>
//   )
// }

// function RenderIfDemo() {
//   const [visible, setVisible] = useState(true)
//   const handleToggle = () => setVisible(!visible)
//   const ifTheUniverseIsWorking = renderIf(visible)
//   return (
//     <>
//       <Button type="primary" onClick={handleToggle}>Toggle</Button>
//       {ifTheUniverseIsWorking(
//         <span>The universe is still wroking</span>
//       )}
//     </>
//   )
// }

// const ifEven = number => renderIf(number % 2 === 0);
// const ifOdd = number => renderIf(number % 2 !== 0);

// function RenderIfDemo() {
//   const [count, setCount] = useState(2)
//   const onChange = (value) => setCount(value)
//   return (
//     <>
//       <NumberPicker value={count} type="inline" onChange={onChange} />
//       {ifEven(count)(
//         <span>{count} is even</span>
//       )}
//       {ifOdd(count)(
//         <span>{count} is odd</span>
//       )}
//     </>
//   )
// }

class RenderIfDemo extends React.Component {
  render() {
    var conditionalOutput;
    if (1 + 1 === 2) {
      conditionalOutput = <span>I am rendered!</span>;
    } else {
      conditionalOutput = <span>I am not rendered :(</span>;
    }
    return (
      <div>
        {/* this works, but it can get ugly */}
        {conditionalOutput}
        {1 + 1 === 2 && <span>I am rendered!</span>}
        {this.anotherConditionalRender()}
      </div>
    );
  }
  anotherConditionalRender() {
    if (1 + 1 === 2) {
      return <span>I am rendered!</span>
    }
  }
}

export default RenderIfDemo
