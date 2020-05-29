import React, { useState } from 'react'

import { Input, Button } from '@alicloud/console-components'

const SaveComponent = (props) => (
  <div>
    <p>
      <Input
        onChange={props.handleChange}
        value={props.text}
      />
    </p>
    <Button onClick={props.handleSave}>
      Save
    </Button>
  </div>
)

const EditComponent = (props) => (
  <Button onClick={props.handleEdit}>
    Edit
  </Button>
)

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
          ? <EditComponent handleEdit={handleEdit} />
          : <SaveComponent
            handleChange={handleChange}
            handleSave={handleSave}
            text={inputText}
          />
      }
    </div>
  )
}

export default EditDemo
