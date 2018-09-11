import { Modal,Form } from 'antd';
import { connect } from 'dva';
import { showModelHandler,okHandler} from 'actions/common-modal';
import Brands from '../units/Brands-list';

const selectBrandsModal = ({dispatch,children,id,title,visible,onOk,form:{resetFields}}) => (
  <Form>
    <span onClick={showModelHandler.bind(null,dispatch,id)}>{children}</span>
    <Modal
      title={title}
      visible={visible[id]}
      width="1000px"
      onOk={onOk ? okHandler.bind(null,dispatch,null,onOk,id) : okHandler.bind(null,dispatch,null,null,id,true)}
      onCancel={hideModelHandler.bind(null,dispatch,resetFields,id)}
    >
        <Brands/>

    </Modal>
  </Form>
);
function hideModelHandler(dispatch,resetFields,id){
  // dispatch({
  //   type:'commonModal/setVisible',
  //   payload:{[id]:false}
  // });
  // dispatch({
  //   type:'brands/onReset'
  // })
}
function mapStateToProps(state,props){
  const { visible } = state.commonModal;
  const { content } = props;

  return{
    visible
  }
}
export default connect(mapStateToProps)(Form.create()(selectBrandsModal));

