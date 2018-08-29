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
    }
  },
  subscriptions:{
    setup({ dispatch,history}){

    }
  }
}
