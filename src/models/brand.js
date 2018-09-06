import { getBrandsListService,delBrandService,getBannedService } from 'services/brand';

const brand = {
  namespace:'brand',
  state:{
    brands:[],
    banned:[]
  },
  reducers:{
    setBrands(state,{payload:brands}){
      return {...state,brands}
    },
    setBanned(state,{payload:banned}){
      return {...state,banned}
    }
  },
  effects:{
    *fetchBrands({payload},{select,call, put}){
      const brads = yield call(getBrandsListService, payload);
      yield put({
        type:'setBrands',
        payload:brads.data
      })
    },
    *fetchBanned({payload},{select,call, put}){
      const banned = yield call(getBannedService, payload);
      yield put({
        type:'setBanned',
        payload:banned.data
      })
    },
    *removeBrand({payload:data},{select,call,put}){
      const result = yield call(delBrandService,data);
      if(result.success){
        yield put({
          type:'fetchBrands'
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
            type:'fetchBrands'
          });
          dispatch({
            type:'fetchBanned'
          })
        }
      });
    }
  }
};

export default brand
