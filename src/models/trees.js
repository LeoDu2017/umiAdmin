import _ from "lodash";
import {getTree,storeSubTree,updateTreeName,getSubTree} from 'services/albums';
import { message } from 'antd';
const trees = {
  namespace:'trees',
  state:{
    currentTree: '-1',    // 当前被选中的文件夹
    currentEditTree:'-1', // 当前被编辑的文件夹
    openFailsTree:'-1',   // 文件夹打开失败
    tree:[],              // 文件夹列表
    total:'0',            // 图片总数
    openAll:true,         // 是否全局折叠
    open:'-1',            // 当前被打开的二级文件夹ID
    treeLength:0,         // 文件夹显示数量
    actions:{
      showDelete:false,
      showEdit:false,
      showAdd:true
    },        // 文件夹操作显隐控制

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
    setActions(state,{payload:actions}){
      return {...state,actions}
    },
    setCurrentTree(state,{payload:currentTree}){
      return { ...state,currentTree}
    },
    setCurrentEditTree(state,{payload:currentEditTree}){
      return { ...state,currentEditTree}
    },
    setOpenFailsTree(state,{payload:openFailsTree}){
      return {...state,openFailsTree}
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
      return { ...state,openAll:!state.openAll}
    }
  },

  effects:{
    *getTree({ payload },{select,call, put}){
      const {data} = yield call(getTree);
      yield put({
        type:'pictures/getPictures'
      });
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
      yield put({
        type:'setOpen',
        payload:id
      });

      if(id !== '-1'){
        const {data} = yield call(getSubTree,payload);
        const {open,tree} = yield select(({trees}) => trees);

        let openFailsTree;
        if(data.length === 0){
          message.info('该文件夹下无子文件夹');
          openFailsTree = open
        }else{
          openFailsTree = '-1'
        }

        yield put({
          type:'setOpenFailsTree',
          payload:openFailsTree
        });

        tree.map(i => {
          if(i.id === openFailsTree){
            i.open =  false;
          }else{
            if(i.id === open && !i.open){
              i.open = true;
              i.subFolder = data;
            }else{
              i.open =  false;
              i.subFolder = [];
            }
          }

        });

        const folder = _.find(tree,{'id':open});
        const subFolder = folder.subFolder;


        const treeLength = tree.length + subFolder.length;


        yield put({
          type:'setTreeLength',
          payload:treeLength
        });

        yield put({
          type:'saveTree',
          payload:tree
        });

      }else{
        yield put({
          type:'toggleOpen',
          payload:id
        });
      }

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
    },
    *appendSubTree({payload},{select,call,put}){
      const {tree,currentEditTree,currentTree,treeLength,actions} = payload;
      yield put({
        type:'saveTree',
        payload:tree
      });
      yield put({
        type:'setCurrentEditTree',
        payload:currentEditTree
      });
      yield put({
        type:'setCurrentTree',
        payload:currentTree
      });
      yield put({
        type:'setTreeLength',
        payload:treeLength
      });
      yield put({
        type:'setActions',
        payload:actions
      });
    },
    *selectCurrentTree({payload},{select,call,put}){
      const {currentTree,actions,currentEditTree} = payload;
      yield put({
        type:'setCurrentTree',
        payload:currentTree
      });
      yield put({
        type:'setActions',
        payload:actions
      });
      yield put({
        type:'setCurrentEditTree',
        payload:currentEditTree
      });
    },
  },
  subscriptions:{
    setup({ dispatch,history}){
      return dispatch({
        type: 'getTree',
      });
    }
  }
};

export default trees;
