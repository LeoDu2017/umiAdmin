import { getPicture } from 'services/albums';
const pictures = {
  namespace:'pictures',
  state:{
    list:[],
    page:[],
    selected:[],
  },
  reducers:{
    save(state,{payload:list}){
      return { ...state,list}
    }
  },
  effects:{
    *getPictures({ payload },{select,call, put}){
      const {data} = yield call(getPicture);
      yield put({
        type:'save',
        payload:data
      })
    }
  }
};
export default  pictures;
