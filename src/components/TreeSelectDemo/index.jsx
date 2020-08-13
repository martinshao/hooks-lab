import React from 'react'
import { TreeSelect } from 'antd';

/*
*  add by chenql 20200612
*
* 帮助框所需要的 parentData 形式
* 如下所示
*    支持：[{key:a,value:1},{key:b,value:2}] 或者  {{key:a,value:1},{key:b,value:2}} 不支持  {key:a,value:1},{key:b,value:2}
*    parentKey:   （String） 例如："pKey"
*    parentValue:   （String）   例如："pValue"
*    childJGKey:   （String） 例如："cJGKey"
*    childKey:   （String） 例如："cKey"
*    childValue:   （String）   例如："cValue"
*
* 在使用中引用组件方式
*
* <SourceTreeSelect parentData = {parentData} parentKey = 'ACTCODE' parentValue = 'ACTNAME' 
*   childData = {childData} childJGKey = 'CHILDCODE' childKey = 'CHILDCODE' childValue = 'CHILDNAME' placeholder='请选择...' />
*
* 其中 parentData 形式为  [{PARENTCODE："111",PARENTNAME:"名字"}，{PARENTCODE："222",PARENTNAME:"名字"}] 
*   或者 {{PARENTCODE："111",PARENTNAME:"名字"}，{PARENTCODE："222",PARENTNAME:"名字"}}
* childData 与 parentData 形式相同
* 
*/

export default class SourceTreeSelect extends React.Component {
  constructor(props) {
    super(props);
    const value = this.props.value || '';
    this.state = {
      selCode: value,
    };
  }

  // 事件：点击节点时
  handleChange = (value, label, extra) => {
    this.setState({ selCode: extra.triggerValue });
    if (this.props.onChange) {
      this.props.onChange(extra.triggerValue, label, extra);
    }
  }

  render() {
    return (
      <TreeSelect
        style={this.props.style}
        value={this.state.selCode ? this.state.selCode : undefined}
        dropdownStyle={this.props.dropdownStyle || { maxHeight: 400, overflow: 'auto' }}
        treeData={this.props.treeData}
        placeholder={this.props.placeholder || "请选择..."}
        treeDefaultExpandAll={true}
        onChange={this.handleChange}
        treeIcon={false}
      />
    );
  }
}
