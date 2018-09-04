2018-09-03
一、在Mock文件下新建brand.js：
    1、引入Mock:
      const Mock = require('mockjs');
    2、在utils 文件夹中 新建dataProcessing.js文件
    3、将not found放入config中；
二、在.umirc.mock.js注册brand的Mock数据：
    ...require('./mock/brand')
三、在utils/config.js 注册brans数据接口
    getBrandsListApi:`${APIV1}/brand/list`
四、在service文件夹建立brand.js
    1、引入 reqire Ajax函数：
    import request from 'utils/request';
    2、引入 config 全局常量定义：
    import { api } from 'utils/config';
    3、定义请求接口：
    export default function getBrandsListService(){
      return request({
        url: getBrandsListApi,
        method: 'get'
      })
    }
五、在 models/brand.js中引入数据请求接口：
    1、引入Service: 
    import { getBrandsListService } from 'sevice/brand';
    2、定义Reducers:
    setBrands({state,payload:brands}){
      return {...state,brands}
    }
    3、定义effects：
    *fetchBrands({payload},{select,call, put}){
      const brads = yield call(getBrandsListService, payload);
      yield put({
        type:'setBrands',
        payload:brads.data
      })
    }
    4、定义subscriptions:
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

2018-09-04
一、使用Lodash利用ID查找对应的国家名称进行渲染：
    1、引入Lodash
    import _ from "lodash"
    2、使用Lodash进行查找
    _.find(notAllowCountries, { 'id': id }) && notAllowCountries[_.findIndex(notAllowCountries, { 'id': id })].name

