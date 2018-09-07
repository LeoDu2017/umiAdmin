import { Modal } from 'antd';
import { connect } from 'dva';
import { showModelHandler,okHandler,hideModelHandler } from 'actions/common-modal';

const selectBrandsModal = ({dispatch,children,id,title,visible,onOk}) => (
  <span>
    <span onClick={showModelHandler.bind(null,dispatch,id)}>{children}</span>
    <Modal
      title={title}
      visible={visible[id]}
      width="700px"
      onOk={onOk ? okHandler.bind(null,dispatch,null,onOk,id) : okHandler.bind(null,dispatch,null,null,id,true)}
      onCancel={hideModelHandler.bind(null,dispatch,null,id)}
    >
      品牌库
    </Modal>
  </span>
);
function mapStateToProps(state,props){
  const { visible } = state.commonModal;
  const { content } = props;

  return{
    visible
  }
}
export default connect(mapStateToProps)(selectBrandsModal);

