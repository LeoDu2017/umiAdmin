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
export function addSubTree(id,tree,dispatch){
  const parentId = id;
  const currentEditTree = '-2';
  const currentTree = '-2';
  tree.push({
    'name':'未命名文件夹',
    'parent_id':parentId,
    'id':'-2',
    'picNum':'0',
    'open':false
  });
  dispatch({
    type:'albums/appendSubTree',
    payload:tree,currentEditTree,currentTree
  })


}
export function deleteCurrentTree(id,dispatch){}
export function stop(event){
  event.stopPropagation()
}
export function saveEditTree(event){
  event.stopPropagation()
}
export function showAlbums(dispatch,boolenValue){
  const dispaly = boolenValue;
  dispatch({
    type:'albums/setDisplay',
    payload:dispaly
  })
}
