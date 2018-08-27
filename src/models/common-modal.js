export default{
  namespace:'commonModal',
  state:{
    visible:false
  },
  reducers:{
    setVisible(state,{payload:visible}){
      return { ...state,visible}
    }
  }
}
