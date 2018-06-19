import { getPicture } from 'services/albums';
const pictures = {
  namespace:'pictures',
  state:{
    list:[],
    page:1,
    total:0,
    selected:[],
    single:true
  },
  reducers:{
    save(state,{payload:{list,page,total}}){
      return { ...state,list,page,total}
    },
    saveSelected(state,{payload:selected}){
      return { ...state,selected }
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
    },
    *setSelectImgs({ payload:{id,type}},{select,call, put}){
      let selectedImgs = yield select(({pictures}) => pictures.selected);
      if(type){
        selectedImgs = [];
        selectedImgs.push(id);
      }else{
        !selectedImgs.includes(id) && selectedImgs.push(id);
      }
      yield put({
        type:'saveSelected',
        payload:selectedImgs
      })
    },
    *removeSelectImgs({payload:id},{select,call,put}){
      let data = yield select(({pictures}) => pictures.selected);
      let selectedImgs = data.filter(item => Number(item) !== Number(id));
      yield put({
        type:'saveSelected',
        payload:selectedImgs
      })
    }
  }
};
export default  pictures;
