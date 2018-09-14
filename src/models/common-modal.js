export default{
  namespace:'commonModal',
  state:{
    visible:{}
  },
  reducers:{
    setVisible(state,{payload}){
      let visible = state.visible;
      visible = {...visible,...payload};
      return { ...state,visible}
    },
    setCurrentStep(state,{payload:currentStep}){
      return { ...state,currentStep}
    }
  },
  subscriptions:{
    setup({ dispatch,history}){

    }
  }
}
