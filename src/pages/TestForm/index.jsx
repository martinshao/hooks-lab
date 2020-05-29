
import React, { PureComponent } from 'react'
import { Button, Form, Radio } from '@ali/wind'
import InputArray from '../InputArrary'
import { createForm } from 'rc-form'

const { Item: FormItem } = Form
const { Group: RadioGroup } = Radio

const options = [
  { label: '男', value: 1 },
  { label: '女', value: 2 },
]

class TestForm extends PureComponent {
  handleSubmit = (e) => {
    e.preventDefault();

    const { form: { validateFields } } = this.props;

    validateFields((errors, values) => {
      if (errors) {
        return;
      }
      console.log(values)
    })
  }

  render() {
    const { form: { getFieldDecorator } } = this.props

    const nameDecorator = getFieldDecorator('name')
    const sexDecorator = getFieldDecorator('sex')

    return (
      <section>
        <Form layout="horizontal" onSubmit={this.handleSubmit}>
          <FormItem label="姓名">
            {nameDecorator(<InputArray />)}
          </FormItem>

          <FormItem label="年龄">
            {sexDecorator(<RadioGroup options={options} />)}
          </FormItem>

          <FormItem buttonsContainer>
            <Button type="primary" size="default" htmlType="submit">提交</Button>
          </FormItem>
        </Form>
      </section>
    );
  }
}

export default createForm()(TestForm)