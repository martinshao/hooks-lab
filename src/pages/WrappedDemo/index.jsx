/**
 * 这个组件演示如果自定义表单组件，
 * 可以变一维表单数据为多维
 * 重点使用到 getDerivedStateFromProps 生命周期
 * 
 * @component PriceInput 自己封装的表单组件
 * @component WrappedDemo 表单组件，组织表单提交数据
 */
import React from 'react';
import { createForm } from 'rc-form'
import { Form, Input, Select, Button } from '@alicloud/console-components'

const FormItem = Form.Item;
const Option = Select.Option;

/**
 *
 *
 * @class PriceInput
 * @extends {React.Component}
 */
class PriceInput extends React.Component {
  static getDerivedStateFromProps(nextProps) {
    if ('value' in nextProps) {
      return {
        ...(nextProps.value || {}),
      };
    }
    return null
  }

  constructor(props) {
    super(props);

    // const value = props.value || {};
    // this.state = {
    //   number: value.number || 0,
    //   currency: value.currency || 'rmb',
    // }
    const {
      number = 0,
      currency = 'rmb'
    } = props.value || {};
    this.state = {
      number,
      currency,
    }
  }

  handleNumberChange = (value) => {
    const number = parseInt(value || 0, 10);
    if (isNaN(number)) {
      return;
    }
    if (!('value' in this.props)) {
      this.setState({ number });
    }
    this.triggerChange({ number });
  }

  handleCurrencyChange = (currency) => {
    if (!('value' in this.props)) {
      this.setState({ currency });
    }
    this.triggerChange({ currency });
  }

  triggerChange = (changedValue) => {
    // Should provide an event to pass value to Form.
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(Object.assign({}, this.state, changedValue));
    }
  }

  render() {
    const { size } = this.props;
    const state = this.state;
    return (
      <span>
        <Input
          type="text"
          size={size}
          value={state.number}
          onChange={this.handleNumberChange}
          style={{ width: '65%', marginRight: '3%' }}
        />
        <Select
          value={state.currency}
          size={size}
          style={{ width: '32%' }}
          onChange={this.handleCurrencyChange}
        >
          <Option value="rmb">RMB</Option>
          <Option value="dollar">Dollar</Option>
        </Select>
      </span>
    );
  }
}

/**
 *
 *
 * @class WrappedDemo
 * @extends {React.Component}
 */
class WrappedDemo extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  checkPrice = (rule, value, callback) => {
    if (value.number > 0) {
      callback();
      return;
    }
    callback('Price must greater than zero!');
  }

  render() {
    const { getFieldDecorator, getFieldError } = this.props.form;
    const colTypeError = getFieldError('price')
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem
          label="Price"
          validateState={colTypeError ? 'error' : 'success'}
          help={colTypeError}
        >
          {getFieldDecorator('price', {
            initialValue: { number: 0, currency: 'rmb' },
            rules: [{ validator: this.checkPrice }],
          })(<PriceInput />)}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
    );
  }
}

export default createForm()(WrappedDemo)
