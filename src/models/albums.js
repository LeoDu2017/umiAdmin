import intl from 'react-intl-universal';
import {getTree,storeSubTree,updateTreeName,getSubTree} from 'services/albums';
import { message } from 'antd';
const albums = {
  namespace:'albums',
  state:{
    currentTree: '-1',
    currentEditTree:'-1',
    tree:[],
    total:'0',
    refresh:0,
    openAll:true,
    open:'-1',
    treeLength:0,
    actions:{
      showDelete:false,
      showEdit:false,
      showAdd:true
    }
  },
  reducers:{
    saveTree(state,{payload:tree}){
      return { ...state,tree}
    },
    saveTotal(state,{payload:total}){
      return { ...state,total}
    },
    setTreeLength(state,{payload:treeLength}){
      return {...state,treeLength}
    },
    setOpen(state,{payload:open}){
      return {...state,open}
    },

    setCurrentTree(state,{payload:currentTree,actions,currentEditTree}){
      return { ...state,currentTree,actions,currentEditTree}
    },
    setCurrentEditTree(state,{payload:currentEditTree}){
      return { ...state,currentEditTree}
    },
    setDisplay(state,{payload:display}){
      return{ ...state,display}
    },

    appendSubTree(state,{payload:tree,currentEditTree,currentTree,treeLength,actions}){
      return{ ...state,tree,currentEditTree,currentTree,treeLength,actions}
    },
    setTreeName(state,{payload}){
      const {parent_id,id,name} = payload;
      let tree = state.tree;
      tree.forEach(item => {
        if(item.id === id){
          item.name = name
        }

        if(item.subFolder.length > 0){
          item.subFolder.forEach(i => {
            if(i.parent_id === parent_id){
              i.name = name;
            }
          })
        }
      });
      return {...state,tree}
    },

    toggleOpen(state,{payload}){
      const id = payload;
      const currentTree = id;
      if(id === '-1'){
        return { ...state,openAll:!state.openAll}
      }
      const tree = state.tree;

      tree.map(item => {
        if(item.id === id){
          return item.open = ! item.open
        }
      });
      return { ...state,tree,currentTree}
    }
  },

  effects:{
    *getTree({ payload },{select,call, put}){
      const {data} = yield call(getTree);
      const {tree,total} = data;
      const treeLength = tree.length;
      const currentEditTree = -1;
      yield put({
        type:'saveTree',
        payload:tree
      });
      yield put({
        type:'saveTotal',
        payload:total
      });
      yield put({
        type:'setTreeLength',
        payload:treeLength
      });
      yield put({
        type:'setCurrentEditTree',
        payload:currentEditTree
      });
    },
    *getSubTree({payload},{select,call,put}){
      const id = payload;
      const open = id;
      yield put({
        type:'setOpen',
        payload:open
      });
      if(id !== '-1'){
        const {data} = yield call(getSubTree,payload);
        const {open,tree} = yield select(({albums}) => albums);
        let treeLength = tree.length + data.length;

        tree.forEach(i => {
          if(i.id === open){
            i.subFolder = data
          }
        });

        yield put({
          type:'setTreeLength',
          payload:treeLength
        });

        yield put({
          type:'saveTree',
          payload:tree
        });
      }
      yield put({
        type:'toggleOpen',
        payload:id
      });
    },
    *updateTreeName({payload},{select,call,put}){
      const data = yield call(updateTreeName, payload);
      const currentEditTree = -1;
      if(data && data.success){
        message.success(data.msg);
      }else{
        message.error(data.msg);
      }
      yield put({
        type:'setTreeName',
        payload
      });
      yield put({
        type:'setCurrentEditTree',
        payload:currentEditTree
      });
    },
    *storeSubTree({payload},{select,call,put}){
      const data = yield call(storeSubTree,payload);
      const currentEditTree = '-1';
      if(data && data.success){
        message.success(data.msg);
      }else{
        message.error(data.msg);
      }
      yield put({
        type:'setTreeName',
        payload
      });
      yield put({
        type:'setCurrentEditTree',
        payload:currentEditTree
      });
    }
  },
  subscriptions:{
    setup({ dispatch,history}){
      return dispatch({
        type: 'getTree',
      });
    }
  }
};

export default albums;
