import { routerRedux } from 'dva/router';
import Login from '../actions/loginpage'

export default{
  namespace:'login',
  state:{
    isLogin: true,
    loginfail:false,
    currentIndex: 0,

  },
  reducers:{
    change(state,{payload:index}){
      return{...state,currentIndex:index}
    }
  },
  effects:{
    * login({ payload },{call, put,select}) {
      const {user} = select();
      const { data } = yield call(Login, payload);
      if (data && data.success) {
        yield put({
          type: 'checklogin',
          payload:{
            isLogin:true,
          }
        });
        yield put(routerRedux.push('/app/users'));
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

