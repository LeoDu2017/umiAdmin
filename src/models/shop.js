export default{
  namespace:'shop',
  state:{
    test:'12',
    logo:require('assets/timg.jpg'),
  },
  reducers:{
    saveLogo(state,{payload:logo}){
      return {...state,logo}
    }
  }
}
