import { Component } from 'react';
import { Modal,Steps } from 'antd';
import { connect } from 'dva';
import { showModelHandler,okHandler,hideModelHandler } from 'actions/common-modal';
import { nextStepHandler,selectBrandHandler } from 'actions/brand-select';
import Brands from '../units/Brands-list';

const Step = Steps.Step;

class selectBrandsModal extends Component{
  onRef = (ref) => {
    this.child = ref
  };
  resetHandel = () => {
    const { onReset } = this.child;
    onReset()
  };
  onSelect = (changedVaule) => {
    const {dispatch} = this.props;
    selectBrandHandler(dispatch,selectBrandHandler)
  };
  render(){
    const { dispatch,children,id,title,visible,onOk,currentStep,next } = this.props;
    const onOkHandler = () =>{
      if(currentStep > 1){
        onOk ? okHandler(dispatch,null,onOk,id) : okHandler(dispatch,null,null,id,true)
      }else{
        const nextStep = currentStep + 1;
        nextStepHandler(dispatch,nextStep)
      }
    };
    const onCancelHandler = () =>{
      if(currentStep === 0){
        hideModelHandler(dispatch,this.resetHandel.bind(this),id)
      }else{
        hideModelHandler(dispatch,null,id)
      }
    };
    return(
      <span>
        <span onClick={showModelHandler.bind(null,dispatch,id)}>{ children }</span>
        <Modal
          width="1000px"
          title={ title }
          okButtonProps={{ disabled: false }}
          okText = { currentStep < 2 ? '下一步' : '完成' }
          visible={ visible[id] }
          onOk={ onOkHandler }
          onCancel={ onCancelHandler }>
            { currentStep === 0 && <Brands onRef={this.onRef} onSelect={this.onSelect}/> }
        </Modal>
      </span>
    )
  }
}
function mapStateToProps(state){
  const { visible } = state.commonModal;
  const { currentStep,next } = state.brandSelect;
  return{ visible,currentStep,next }
}
export default connect(mapStateToProps)(selectBrandsModal);

