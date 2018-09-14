import { getBrandsListService,delBrandService,getBannedService,saveBannedService } from 'services/brand';

const brand = {
  namespace:'brand',
  state:{
    brands:[],
    total:0,
    current:1,
    banned:[]
  },
  reducers:{
    setBrands(state,{payload:brands}){
      return {...state,brands}
    },
    setTotal(state,{payload:total}){
      return {...state,total}
    },
    setBanned(state,{payload:banned}){
      return {...state,banned}
    },
    saveChanged(state,{payload}){
      let {brands} = state;
      let {id,area} = payload;
      area = area.join(',');
      brands = brands.map(item =>{
        if(item.id === id){
          return item = {...item,area}
        }else{
          return item
        }
      });
      return {...state,brands}
    },
  },
  effects:{
    *fetchBrands({payload},{select,call, put}){
      const brads = yield call(getBrandsListService, payload);
      yield put({
        type:'setBrands',
        payload:brads.data
      });
      yield put({
        type:'setTotal',
        payload:brads.total
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
    },
    *saveBanned({payload:id},{select,call,put}){
      const brands = yield select(state => state.brand.brands);
      const changed = brands.filter(item => {
        return item.id === id
      });
      const area = changed[0].area;
      const result = yield call(saveBannedService,{area,id});
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
