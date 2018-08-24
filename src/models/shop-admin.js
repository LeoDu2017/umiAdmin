import {getShopAdminsService} from 'services/shop';
const admin = {
  namespace:'admin',
  state:{
    shopAdmins:[]
  },
  reducers:{
    setShopAdmins(state,{payload:shopAdmins}){
      return {...state,shopAdmins}
    }
  },
  effects:{
    *getShopAdmins({payload},{select,call, put}){
      const shopAdmins = yield call(getShopAdminsService, payload);

      yield put({
        type:'setShopAdmins',
        payload:shopAdmins.data
      })
    }
  },
  subscriptions:{
    setup({ dispatch,history}){
      return history.listen(({ pathname}) => {
        let arr = pathname.split('/');
        let subChildLink = arr[3];
        if(subChildLink === 'admin'){
          dispatch({
            type:'getShopAdmins'
          })
        }
      });
    }
  }
};
export default admin;
