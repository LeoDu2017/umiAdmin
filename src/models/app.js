import _ from "lodash";
import { routerRedux } from 'dva/router';
import intl from 'react-intl-universal';

const main = {
  namespace:'app',
  state:{  },
  reducers:{ },
  effects:{
    *loginhook({ payload },{select,call, put}){
      const isLogin = yield select(({login}) => login.isLogin);
      if(isLogin === false){
        yield put((routerRedux.push('/login')));
      }
    },
    *setLocale({ payload }, { call, put,select }){
      const languages = yield select(({lang}) => lang.languages);
      let currentLocale = intl.determineLocale({
        urlLocaleKey: "lang",
        cookieLocaleKey: "lang"
      });
      if (!_.find(languages, { value: currentLocale })) {
        currentLocale = "en-US";
      }
      let data = require(`locale/${currentLocale}`);

      yield put({
        type:'lang/choose',
        payload:{languages,lang:currentLocale}
      });
      yield put({
        type:'left/setLang',
        payload:{lang:currentLocale}
      });
      yield put({
        type:'lang/initLang',
        payload: data.default
      })
    }
  },
  subscriptions:{
    setup({ dispatch,history}){
      return history.listen(({ pathname, query }) => {

        dispatch({ type: 'setLocale', payload: { query } });

        if(!pathname.includes('login') && !pathname.includes('api')){
          dispatch({
            type: 'loginhook',
          });
        }
      });
    }
  }
};



export default main
