import {Component} from 'react';
import {connect} from 'dva';
import {Button} from 'antd';
import Children from './conponents/children'

class RefsView extends Component {
  constructor(props){
    super(props)
  };
  render(){
    return(
      <span style={{'padding':'50px','textAlign':'center','margin':'100px auto','display':'block'}}>
        <Children
          title="测试窗口"
          id="test"
        >
          <Button type="primary">Refs Test</Button>
        </Children>
      </span>
    )
  }
}

function mapStateToProps(state,props){
  return{}
}
export default connect(mapStateToProps)(RefsView)
