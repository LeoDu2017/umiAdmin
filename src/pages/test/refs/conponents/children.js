import {connect} from 'dva';
import {Component} from 'react';
import {Modal} from 'antd';
import { showModelHandler,okHandler,hideModelHandler} from 'actions/common-modal';
import Brands from 'components/units/Brands-list';

class Children extends Component{
  constructor(props){
    super(props)
  };
  onRef = (ref) => {
    this.child = ref
  };
  render(){
    const {dispatch,children,visible,title,id,onOk} = this.props;
    return(
      <span>
        <span onClick={showModelHandler.bind(null,dispatch,id)}>{children}</span>
        <Modal
          width="1000px"
          visible={visible[id]}
          title={title}
          onOk={onOk ? okHandler.bind(null,dispatch,null,onOk,id) : okHandler.bind(null,dispatch,null,null,id,true)}
          onCancel={hideModelHandler.bind(null,dispatch,null,id)}
        >
          <Brands/>
        </Modal>
      </span>

    )
  }
}
function mapStateToProps(state,props){
  const {visible} = state.commonModal;
  return{visible}
}

export default connect(mapStateToProps)(Children)


