import React, { useContext } from 'react'
import { ShopContext } from '../ShopProvider'
import { Button } from '@alicloud/console-components'

function Step() {
  const { step, onStepChange } = useContext(ShopContext)
  return (
    <div style={{ margin: 20 }}>
      <div>step: {step}</div>
      <Button type="primary" onClick={() => onStepChange(2)}>change step</Button>
    </div>
  )
}

export default Step
