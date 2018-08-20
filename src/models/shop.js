import { message } from 'antd';
import { getShopInfoService,updateShopInfoService } from 'services/shop';

export default{
  namespace:'shop',
  state:{
    editable:true,
    originInfo:{},
    shopInfo:{}
  },
  reducers:{
    saveLogo(state,{payload:shop_logo}){
      let shopInfo = {...state.shopInfo,shop_logo,change:true};
      return {...state,shopInfo}
    },
    setEditable(state){
      return{...state,editable:!state.editable}
    },
    setInfo(state,{payload:shopInfo}){
      return{...state,shopInfo}
    },
    setOrigin(state,{payload:originInfo}){
      return{...state,originInfo}
    },
    setChanged(state,{payload}){
      let shopInfo = {...state.shopInfo,...payload};
      return{...state,shopInfo}
    },
    setEditedNull(state){
      return{...state,editedInfo:{}}
    }
  },
  effects:{
    *getShopInfoEffect({ payload },{select,call, put}){
      const shopInfo = yield call(getShopInfoService, payload);
      yield put({
        type:'setInfo',
        payload:shopInfo.data
      });
      yield put({
        type:'setOrigin',
        payload:shopInfo.data
      });
    },
    *submitEdit({ payload },{select,call, put}){
      const data = yield call(updateShopInfoService,payload);
      if (data && data.success){
        message.success(data.msg);
        yield put({
          type:'setEditable'
        })
      }else{
        message.error(data.msg);
      }
    }
  },
  subscriptions:{
    setup({ dispatch,history}){
      return history.listen(({ pathname}) => {
        let arr = pathname.split('/');
        let subChildLink = arr[3];
        if(subChildLink === 'info'){
          dispatch({
            type:'getShopInfoEffect'
          })
        }
      });
    }
  }
}
