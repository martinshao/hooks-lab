
import React from 'react'
import Child from '../Child'
import { Form } from '@ali/wind'
import { createForm } from 'rc-form'

const { Item: FormItem, Submit } = Form

const formItemLayout = {
  labelCol: {
    fixedSpan: 5,
  },
  wrapperCol: {
    span: 10,
  },
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
  }// 提交表单

  handleSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log(values);
    })
  }
  render() {
    const { getFieldDecorator, getFieldProps, setFieldsValue } = this.props.form;
    const boy = {
      name: 'Martin',
      age: 12,
      sex: 'man'
    }
    return (
      <div>
        <Form>
          <FormItem {...formItemLayout}>
            {
              getFieldDecorator('boy')(
                <Child getFieldProps={getFieldProps} setFieldsValue={setFieldsValue} boy={boy} />
              )
            }
          </FormItem>
          <FormItem label=" ">
            <Submit onClick={this.handleSubmit}>Confirm</Submit>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default createForm()(Parent)
