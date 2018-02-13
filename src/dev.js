import './dev.scss';
import ReactAntCheckableTree from './main';

/*===example start===*/

// install: npm install afeiship/react-ant-checkable-tree --save
// import : import ReactAntCheckableTree from 'react-ant-checkable-tree'

class App extends React.Component{
  state = {
    value:[],
    items: [{
      label: '0-0',
      value: '0-0',
      children: [{
        label: '0-0-0',
        value: '0-0-0',
        children: [
          { label: '0-0-0-0', value: '0-0-0-0' },
          { label: '0-0-0-1', value: '0-0-0-1' },
          { label: '0-0-0-2', value: '0-0-0-2' },
        ],
      }, {
        label: '0-0-1',
        value: '0-0-1',
        children: [
          { label: '0-0-1-0', value: '0-0-1-0' },
          { label: '0-0-1-1', value: '0-0-1-1' },
          { label: '0-0-1-2', value: '0-0-1-2' },
        ],
      }, {
        label: '0-0-2',
        value: '0-0-2',
      }],
    }, {
      label: '0-1',
      value: '0-1',
      children: [
        { label: '0-1-0-0', value: '0-1-0-0' },
        { label: '0-1-0-1', value: '0-1-0-1' },
        { label: '0-1-0-2', value: '0-1-0-2' },
      ],
    }, {
      label: '0-2',
      value: '0-2',
    }]
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange =e =>{
    console.log(e);
    this.setState({ value: e});
  };

  render(){
    return (
      <div className="hello-react-ant-checkable-tree">
        <ReactAntCheckableTree onChange={this._onChange} value={this.state.value} items={this.state.items} ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
