import {connect} from 'dva';
import {Component} from 'react';

class refTest extends Component {
  render(){
    return(<div>
      Hello Word
    </div>)
  }
}

function mapStateToProps(state){

}

export default connect(mapStateToProps)(refTest)
