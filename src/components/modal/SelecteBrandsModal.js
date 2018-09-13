import { Component } from 'react';
import { Modal } from 'antd';
import { connect } from 'dva';
import { showModelHandler,okHandler,hideModelHandler} from 'actions/common-modal';
import Brands from '../units/Brands-list';

class selectBrandsModal extends Component{
  constructor(props){
    super(props)
  };
  onRef = (ref) => {
    this.child = ref
  };
  resetHandel = () => {
    const { onReset } = this.child;
    onReset()
  };
  render(){
    const { dispatch,children,id,title,visible,onOk } = this.props;

    return(
      <span>
        <span onClick={showModelHandler.bind(null,dispatch,id)}>{ children }</span>
        <Modal
          width="1000px"
          title={title}
          visible={visible[id]}
          onOk={onOk ? okHandler.bind(null,dispatch,null,onOk,id) : okHandler.bind(null,dispatch,null,null,id,true)}
          onCancel={hideModelHandler.bind(null,dispatch,this.resetHandel.bind(this),id)}>
          <Brands onRef={this.onRef}/>
        </Modal>
      </span>
    )
  }
}
function mapStateToProps(state,props){
  const { visible } = state.commonModal;
  const { content } = props;

  return{
    visible
  }
}
export default connect(mapStateToProps)(selectBrandsModal);

