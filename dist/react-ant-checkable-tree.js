!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("antd"),require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["antd","classnames","noop","object-assign","prop-types","react"],t):"object"==typeof exports?exports.ReactAntCheckableTree=t(require("antd"),require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react")):e.ReactAntCheckableTree=t(e.antd,e.classnames,e.noop,e["object-assign"],e["prop-types"],e.react)}(this,function(e,t,r,n,o,a){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=n(o);t.default=a.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,s,l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(7),p=n(f),d=r(6),y=n(d),h=r(3),b=(n(h),r(4)),v=n(b),m=r(5),_=(n(m),r(2)),x=(_.Tree.TreeNode,s=c=function(e){function t(){var e,r,n,o;a(this,t);for(var i=arguments.length,c=Array(i),s=0;s<i;s++)c[s]=arguments[s];return r=n=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),n._onCheck=function(e){var t=n.props.onChange;t(e)},o=r,u(n,o)}return i(t,e),l(t,[{key:"_renderChildren",value:function(e){var t=this;return e.map(function(e){return e.children?p.default.createElement(_.Tree.TreeNode,{title:e.label,key:e.value,dataRef:e},t._renderChildren(e.children)):p.default.createElement(_.Tree.TreeNode,{title:e.label,key:e.value})})}},{key:"render",value:function(){var e=this.props,t=(e.className,e.items),r=e.value;e.onChange,o(e,["className","items","value","onChange"]);return p.default.createElement(_.Tree,{checkable:!0,onCheck:this._onCheck,checkedKeys:r},this._renderChildren(t))}}]),t}(f.PureComponent),c.propTypes={className:y.default.string,items:y.default.array,value:y.default.array,onChange:y.default.func},c.defaultProps={items:[],value:[],onChange:v.default},s);t.default=x},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=a}])});
//# sourceMappingURL=react-ant-checkable-tree.js.map