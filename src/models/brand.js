import { getBrandsListService } from 'services/brand';
const brand = {
  namespace:'brand',
  state:{
    brands:[]
  },
  reducers:{
    setBrands(state,{payload:brands}){
      return {...state,brands}
    }
  },
  effects:{
    *fetchBrands({payload},{select,call, put}){
      const brads = yield call(getBrandsListService, payload);
      yield put({
        type:'setBrands',
        payload:brads.data
      })
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
          })
        }
      });
    }
  }
};

export default brand
