import { message } from 'antd';
import {getShopAdminsService,delShopAdminService,createShopAdminService} from 'services/shop';
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
    },
    *deleteShopAdmin({payload},{select,call, put}){
      const data = yield call(delShopAdminService, payload);
      if(data.status === 1){
        message.success(data.msg);
        yield put({
          type:'getShopAdmins'
        })
      }
    },
    *createShopAdmin({ payload: values }, { call, put, select }) {
      yield call(createShopAdminService, values);
      const page = yield select(state => state.users.page);
      yield put({ type: 'fetch', payload: { page } });
    },
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
