import { getAllBrandsService } from 'services/brand';
const brands ={
  namespace:'brands',
  state:{
    list:[]
  },
  reducers:{
    saveBrands(state,{payload:list}){
      return {...state,list}
    }
  },
  effects:{
    *fetchBrandsList({payload},{call,select,put}){
      const result = yield call(getAllBrandsService,payload);
      if(result.success){
        yield put({
          type:'saveBrands',
          payload:result.data
        })
      }
    }
  },
  subscriptions:{
    setup({ dispatch,history}){
      return history.listen(({ pathname}) => {
        let arr = pathname.split('/');
        let childLink = arr[2];
        let subChildLink = arr[3];
        if(childLink === 'brand' && subChildLink === 'list'){
          dispatch({
            type:'fetchBrandsList'
          })
        }
      });
    }
  }
};
export default brands
