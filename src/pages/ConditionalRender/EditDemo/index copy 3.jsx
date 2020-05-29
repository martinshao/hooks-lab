import React, { useState } from 'react'

import { Input, Button } from '@alicloud/console-components'

/**
 * https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e/
 * @returns {string} The sum of the two numbers.
 */
function EditDemo() {
  const [text, setText] = useState('')
  const [inputText, setInputText] = useState('')
  const [mode, setMode] = useState('view')

  const handleChange = (value) => setInputText(value)
  const handleSave = () => {
    setText(inputText)
    setMode('view')
  }
  const handleEdit = () => setMode('edit')

  const renderInputField = () => {
    if (mode === 'view') {
      return null;
    } else {
      return (
        <p>
          <Input
            value={inputText}
            onChange={handleChange}
          />
        </p>
      )
    }
  }

  const renderButton = () => {
    if (mode === 'view') {
      return (
        <Button onClick={handleEdit}>
          Edit
        </Button>
      )
    } else {
      return (
        <Button onClick={handleSave}>
          Save
        </Button>
      )
    }
  }

  return (
    <div>
      <p>Text: {text}</p>
      {renderInputField()}
      {renderButton()}
    </div>
  )
}

export default EditDemo
