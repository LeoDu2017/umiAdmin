import _ from "lodash";
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
    *setSelectImgs({ payload:{id,single}},{select,call, put}){
      let imgs = yield select(({pictures}) => pictures.list);
      let selectedImgs = yield select(({pictures}) => pictures.selected);
      if(single){
        selectedImgs = [];
        selectedImgs.push(imgs.filter(i => i.id === id)[0]);
      }else{
        !_.find(selectedImgs, { id: id }) && selectedImgs.push(imgs.filter(i => i.id === id)[0]);
      }
      yield put({
        type:'saveSelected',
        payload:selectedImgs
      })
    },
    *removeSelectImgs({payload:id},{select,call,put}){
      let data = yield select(({pictures}) => pictures.selected);
      let selectedImgs = data.filter(item => Number(item.id) !== Number(id));
      yield put({
        type:'saveSelected',
        payload:selectedImgs
      })
    },
    *useSelected({payload},{select,call,put}){
      // let data = yield select(({pictures}) => pictures.selected);

    }
  }
};
export default  pictures;
