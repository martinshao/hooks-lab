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

const RenderIf = (props) => {
  const condition = props.condition || false;
  const positive = props.then || null;
  const negative = props.else || null;

  return condition ? positive : negative;
};

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
  const editComponent = <EditComponent handleEdit={handleEdit} />
  const saveComponent = <SaveComponent
    handleChange={handleChange}
    handleSave={handleSave}
    text={inputText}
  />

  return (
    <div>
      <p>Text: {text}</p>
      <RenderIf
        condition={view}
        then={editComponent}
        else={saveComponent}
      />
    </div>
  )
}

export default EditDemo
