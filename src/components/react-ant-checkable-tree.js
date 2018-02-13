import React,{ Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;


export default class extends Component{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    value: PropTypes.array,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    items: [],
    value: [],
    onChange: noop
  };
  /*===properties end===*/

  _renderChildren(inData){
    return inData.map((item) => {
      if (item.children) {
        return (
          <Tree.TreeNode title={item.label} key={item.value} dataRef={item}>
            {this._renderChildren(item.children)}
          </Tree.TreeNode>
        );
      }
      return <Tree.TreeNode title={item.label} key={item.value} />;
    });
  }

  _onCheck = e =>{
    const { onChange } = this.props;
    onChange(e);
  };

  render(){
    const { className, items, value, onChange, ...props } = this.props;
    return (
      <Tree
        checkable
        onCheck={this._onCheck}
        checkedKeys={value}>
        { this._renderChildren(items) }
      </Tree>
    );
  }
}
