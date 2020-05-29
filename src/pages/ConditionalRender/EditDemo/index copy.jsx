import React, { useState } from 'react'

import { Input, Button } from '@alicloud/console-components'

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

  if (mode === 'view') {
    return (
      <div>
        <p>Text: {text}</p>
        <Button onClick={handleEdit}>Edit</Button>
      </div>
    )
  } else {
    return (
      <div>
        <p>Text: {text}</p>
        <Input
          value={inputText}
          onChange={handleChange}
        />
        <Button onClick={handleSave}>
          Save
      </Button>
      </div>
    )
  }
}

export default EditDemo
