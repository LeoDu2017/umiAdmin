import _ from "lodash";
export function stop(event){
  event.stopPropagation()
}
export function toggleOpen(id,dispatch,event){
  event.stopPropagation();
  dispatch({
    type:'albums/toggleOpen',
    payload:id
  })
}
export function selectClassify(id,dispatch,event){
  event.stopPropagation();
  const currentTree = id;
  const actions={};
  const currentEditTree = '-1';
  switch(id){
    case '-1':
        actions.showAdd = true,
        actions.showDelete = false,
        actions.showEdit = false;
        break;
    case '0':
        actions.showAdd = false,
        actions.showDelete = false,
        actions.showEdit = false;
        break;
    default:
        actions.showAdd = true,
        actions.showDelete = true,
        actions.showEdit = true;
  };
  dispatch({
    type:'albums/setCurrentTree',
    payload:currentTree,actions,currentEditTree
  })
}
export function editCurrentTree(id,dispatch){
  const currentEditTree = id;
  dispatch({
    type:'albums/setCurrentEditTree',
    payload:currentEditTree
  })
}
export function deleteCurrentTree(id,dispatch){}
export function saveEditTree(dispatch,id,event){
  event.stopPropagation();
  let btn = event.currentTarget;
  let input = btn.previousElementSibling;
  let name = input.value;

  dispatch({
    type:'albums/updateTreeName',
    payload:{name,id}
  })

}
export function showAlbums(dispatch,boolenValue){
  const dispaly = boolenValue;
  dispatch({
    type:'albums/setDisplay',
    payload:dispaly
  })
}
export function addSubTree(id,tree,treeLength,dispatch){
  const parentId = id;
  let num = Math.ceil(Math.random() * 100)*Math.ceil(Math.random() * 100);
  let actions = {};
  const doublication = Boolean(_.find(tree, { id: -num }));
  const currentEditTree = doublication ? -num*100 : -num;
  const currentTree = doublication ? -num*100 : -num;

  if(parentId === '-1'){
    tree.push({
      'name':'未命名文件夹',
      'parent_id':parentId,
      'subFolder':[],
      'id':currentTree,
      'picNum':num,
      'add':true, // 用来切换添加和保存按钮
      'open':false
    });
      actions.showAdd = true,
      actions.showDelete = true,
      actions.showEdit = true;
  }else{
    tree.forEach(i => {
      if(i.id === parentId){
        i.subFolder.push({
          'name':'未命名文件夹',
          'parent_id':parentId,
          'subFolder':[],
          'id':currentTree,
          'picNum':num,
          'add':true, // 用来切换添加和保存按钮
          'open':false
        })
      }
    });
    treeLength = treeLength+1;
    actions.showAdd = false,
      actions.showDelete = true,
      actions.showEdit = true;
  }


  dispatch({
    type:'albums/appendSubTree',
    payload:tree,currentEditTree,currentTree,treeLength,actions
  })
}
export function saveSubTree(dispatch,currentTree,event){
  event.stopPropagation();
  const parent_id = currentTree;
  let btn = event.currentTarget;
  let input = btn.previousElementSibling;
  let name = input.value;
  dispatch({
    type:'albums/storeSubTree',
    payload:{name,parent_id}
  })
}
