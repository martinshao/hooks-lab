// import React, { useState, useEffect } from 'react'
// import React, { useState } from 'react'
// import PropTypes from 'prop-types'

// function Example({ someProp }) {
//   // 🔴 This is not safe (it calls `doSomething` which uses `someProp`) 
//   useEffect(() => {
//     function doSomething() {
//       console.log(someProp);
//     }
//     doSomething();
//   }, [someProp]); // 🔴 React Hook useEffect has a missing dependency: 'doSomething'. Either include it or remove the dependency array  react-hooks/exhaustive-deps

//   return (
//     <div>{someProp}</div>
//   )
// }

// Example.propTypes = {
//   someProp: PropTypes.string,
// }

// export default Example

// export default function Example() {
//   const [count, setCount] = useState(0);

//   function handleAlertClick() {

//     setTimeout(() => {
//       console.warn('You clicked on: ' + count);
//     }, 3000);
//   }

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//       <button onClick={handleAlertClick}>
//         Show alert
//       </button>
//     </div>
//   );
// }

// import React, { useState, useEffect, useRef } from "react";

// export default function Example() {
//   const [count, setCount] = useState(0);
//   const latestCount = useRef(count);

//   useEffect(() => {
//     // Set the mutable latest value
//     latestCount.current = count;
//     setTimeout(() => {
//       // Read the mutable latest value
//       console.log(`You clicked ${latestCount.current} times`);
//     }, 3000);
//   });

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }
/* eslint-disable */
import React, { useState, useEffect } from 'react'

export default function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.info(`%cEffect is start....${count}`, "color:deepskyblue")
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => {
      // console.log(`%cThis is clearing...`, "color:gold")
      console.info(`%cThis is clearing...${count}`, "color:orangered")
      clearInterval(id)
    }
  }, []);
  
  console.info(`%cThis is rending....${count}`, "color: yellowgreen")
  return <h1>{count}</h1>;
}