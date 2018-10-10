import { routerRedux } from 'dva/router';
import { login } from 'services/login';

export default{
  namespace:'login',
  state:{
    isLogin: false,
    loginfail:false,
    currentIndex: 0,
  },
  reducers:{
    change(state,{payload:index}){
      return{...state,currentIndex:index}
    },
    checklogin(state,action) {
      return {...state,isLogin:action.payload.isLogin };
    },
    loginfail(state,action) {
      return {...state, loginfail:action.payload.loginfail};
    },
  },
  effects:{
    * login({ payload },{call, put,select}) {
      const data = yield call(login, payload);
      if (data && data.success) {
        yield put({
          type: 'checklogin',
          payload:{
            isLogin:true,
          }
        });
        yield put(routerRedux.push('/'));
      }else{
        yield put({
          type: 'loginfail',
          payload:{
            loginfail:true,
          }
        });
      }
    }
  }
}

