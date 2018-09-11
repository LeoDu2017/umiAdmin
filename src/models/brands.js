import { getAllBrandsService } from 'services/brand';
const brands ={
  namespace:'brands',
  state:{
    list:[],
    changedValue:[],
    resetFields:null
  },
  reducers:{
    saveBrands(state,{payload:list}){
      return {...state,list}
    },
    saveCollection(state,{payload:{changedValue,resetFields}}){
      return {...state,changedValue,resetFields}
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
    },
    *onReset({payload},{call,select,put}){
      // const page = yield select(state => state.users.page);
      const resetFields = yield select(state => state.brands.resetFields);
      resetFields && resetFields();
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
