import React, { useEffect, useState } from 'react'
import useScript, { READY_STATUS } from "../useScript";


function UseScriptDemo() {

  const status = useScript(
    'https://pm28k14qlj.codesandbox.io/test-external-script.js'
  )

  console.info('status', status)

  const [showChild, setShowChild] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShowChild(true)
    }, 3000)
  }, [])

  return (
    <div>
      <div>
        Script status: <b>{status}</b>
      </div>
      {
        status === READY_STATUS && (
          <div>
            {/* eslint-disable-next-line no-undef */}
            Script function call response: <b>{TEST_SCRIPT.start()}</b>
          </div>
        )
      }
      {showChild && <ChildComponent />}
    </div>
  )
}

function ChildComponent() {
  const status = useScript(
    'https://pm28k14qlj.codesandbox.io/test-external-script.js'
  )

  console.info('[ChildComponent] status', status)

  return (
    <div style={{ marginTop: '40px' }}>
      <div>
        Child script status: <b>{status}</b>
      </div>
      <br />
      {
        status === READY_STATUS && (
          <div>
            {/* eslint-disable-next-line no-undef */}
            Script function call response: <b>{TEST_SCRIPT.start()}</b>
          </div>
        )
      }
    </div>
  )
}

export default UseScriptDemo