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
  const view = mode === 'view'

  return (
    <div>
      <p>Text: {text}</p>
      {
        view
          ? null
          : (
            <p>
              <Input
                value={inputText}
                onChange={handleChange}
              />
            </p>
          )
      }
      <Button
        onClick={
          view
            ? handleEdit
            : handleSave
        }
      >
        {view ? 'Edit' : 'Save'}
      </Button>
    </div>
  )
}

export default EditDemo
