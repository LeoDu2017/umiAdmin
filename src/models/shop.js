export default{
  namespace:'shop',
  state:{
    logo:require('assets/timg.jpg'),
    editable:true
  },
  reducers:{
    saveLogo(state,{payload:logo}){
      return {...state,logo}
    },
    setEditable(state){
      return{...state,editable:!state.editable}
    }
  }
}
