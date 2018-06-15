import { getPicture } from 'services/albums';
const pictures = {
  namespace:'pictures',
  state:{
    list:[],
    page:1,
    total:0,
    selected:[],
  },
  reducers:{
    save(state,{payload:{list,page,total}}){
      return { ...state,list,page,total}
    }
  },
  effects:{
    *getPictures({ payload:{page=1}},{select,call, put}){
      const {data,total} = yield call(getPicture,page);
      yield put({
        type:'save',
        payload:{
          list:data,
          total,
          page
        }
      })
    }
  }
};
export default  pictures;
