import intl from 'react-intl-universal';
import { getShopInfoService } from 'services/shop';

export default{
  namespace:'shop',
  state:{
    logo:require('assets/timg.jpg'),
    editable:true,
    shopInfo:{}
  },
  reducers:{
    saveLogo(state,{payload:logo}){
      return {...state,logo}
    },
    setEditable(state){
      return{...state,editable:!state.editable}
    },
    setInfo(state,{payload:shopInfo}){
      return{...state,shopInfo}
    }
  },
  effects:{
    *getShopInfoEffect({ payload },{select,call, put}){
      const shopInfo = yield call(getShopInfoService, payload);
      yield put({
        type:'setInfo',
        payload:shopInfo.data
      });
    }
  },
  subscriptions:{
    setup({ dispatch,history}){
      return history.listen(({ pathname, query }) => {

        let arr = pathname.split('/');
        let linkType = arr[1] ? arr[1] : 'index';
        let subLink = arr[2];
        let subChildLink = arr[3];


        if(subChildLink === 'info'){
          // let link = subLink.toString();
          // const linkIndex = left.state.linklist[linkType].indexOf(link);
          dispatch({
            type:'getShopInfoEffect'
          })
        }
      });
    }
  }
}
