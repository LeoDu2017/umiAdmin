**文件描述：**

该文件夹用来放置公用组件包含：
> - [ ] 图册组件（Albums）
> - [ ] 自定义下拉框组件（Dropdown）
> - [ ] 自定义图标组件（Svg）

**图册组件**（Albums）:

###### 一、操作

    1. 选取文件树文件夹：
       
       本操作可以作为一个组合操作来处理也可以作为一个关联操作来处理。
       
       首先要整理出这个操作所要影响到的数据：currentTree,actions,currentEditTree
       分别是：当前被选中的文件树的ID、本文件树相对应的操作、当前被编辑的文件树ID
       
       1). Action
        --->
            export function selectClassify(id,actions_type,dispatch,event){
              event.stopPropagation();
              const currentTree = id;
              const actions={};
              const currentEditTree = '-1';
            
              switch(actions_type){
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
                case '1':
                    actions.showAdd = true,
                    actions.showDelete = true,
                    actions.showEdit = true;
                    break;
               default:
                    actions.showAdd = false,
                    actions.showDelete = true,
                    actions.showEdit = true;
              };
              dispatch({
                type:'albums/selectCurrentTree',
                payload:{currentTree,actions,currentEditTree}
              })
            }
            
       2). Model
        --->
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

    2. 添加下级树文件夹：
    
       根据功能要求将这个动作解构为两个动作:
    
        1） addSubTree动态操控DOM在页面中动态插入一个空白文本输入框；
            构思Rect的架构思想的核心就是数据驱动，
            更新视图首先要从根本的模型更新入手，
            与传统的JQuery直接修改DOM结构有本质上的区别。
            根据数据驱动的思想首先我们要操作就对state的tree对象的更改。
            即往tree数组中添加一条默认数据；
            
            2018-06-01
            /**
             * id:当前条目的ID，作为新条目的parent_id
             * tree:当前树Data数据
             * dispatch:当前model的action派发程序
            **/
            export function addSubTree(id,tree,dispatch){
              // 将传入的当前ID设置为新建条目的ParentID
              const parentId = id;
              // 获得一个随机数作为心条目的ID        
              let num = Math.ceil(Math.random() * 100) * Math.ceil(Math.random() * 100);
              // 检查新生的ID是否已存在
              const doublication = Boolean(_.find(tree, { id: -num }));
              // 存在的情况下将该ID乘100
              const currentEditTree = doublication ? -num*100 : -num;
              const currentTree = doublication ? -num*100 : -num;
              tree.push({
                'name':'未命名文件夹',
                'parent_id':parentId,
                'id':currentTree,
                'picNum':num,
                'open':false
              });
              dispatch({
                'type':'albums/appendSubTree',
                'payload':tree,currentEditTree,currentTree
              })
            }
            2018-06-06
            /**
             * id:当前条目的ID，作为新条目的parent_id
             * tree:当前树Data数据
             * treeLegth:tree的数据长度用来控制，文件树收缩动画的操作
             * dispatch:当前model的action派发程序
            **/
            export function addSubTree(id,tree,treeLegth,dispatch){
                // 将传入的当前ID设置为新建条目的ParentID
                const parentId = id;
                // 获得一个随机数作为心条目的ID  
                let num = Math.ceil(Math.random() * 100)*Math.ceil(Math.random() * 100);
                // 添加actions变量处理当添加末级树结构的时候关闭添加操作
                let actions = {};
                // 添加布尔常量用于检测当前动态生成的临时条目是否已经存在
                const doublication = Boolean(_.find(tree, { id: -num }));
                // 存在的情况下将该ID乘100
                const currentEditTree = doublication ? -num*100 : -num;
                const currentTree = doublication ? -num*100 : -num;
                // 判断父级ID是否为-1，等于-1的情况为添加的一级条目
                // 否则为下级条目 并关闭可添加功能
                if(parentId === '-1'){
                    tree.push({
                      'name':'未命名文件夹',
                      'parent_id':parentId,
                      'subFolder':[],
                      'id':currentTree,
                      'picNum':num,
                      'add':true,
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
                          'add':false,
                          'open':false
                        })
                      }
                    });
                    treeLength = treeLength+1;
                    actions.showAdd = false,
                    actions.showDelete = true,
                    actions.showEdit = true;
                  };
                  dispatch({
                    'type':'albums/appendSubTree',
                    'payload':tree,currentEditTree,currentTree,treeLength,actions
                  })
            }
            
            
            
            
        2）saveSubTree当输入完成点击保存后执行异步操作传递两个参数：
            （1）、当前选中树的ID（currentTree）作为父级ID传给服务端；
            （2）、当前输入名称；
            
            export function saveSubTree(dispatch,currentTree,event){
              event.stopPropagation();
              const parent_id = currentTree;
              let btn = event.currentTarget;
              let input = btn.previousElementSibling;
              let name = input.value;
              dispatch({
                'type':'albums/storeSubTree',
                'payload':{name,parent_id}
              })
            }
        数据存储原理：
        线下存储：将数据存储在本地Tree数组中当前条目的subFolder 数组中，
        并在渲染中进行递归运算获取本级的subFolder渲染到当前<dl>标签下的<dd></dd>.
        线上存储原理：将数据存入线上数据库的tree中并根据parent_id进行过滤本级的数据；
        
    3.获得下级文件树文件夹：
    
        本事件和当前文件夹的折叠事件是同时触发的，所以事件流程可以是这样的。
        鼠标点击文件夹图标 ---> 触发同步action - toggleOpen 同时判断当前数据下的subFolder是否为空 
        1).
            ---> 为空
            ---> 派发异步action - getSubTree
            ---> 将请求的得到数据插入当前数据下的subFolder中
            ---> 计算subFolder的长度，将长度设置的该数据对应的<dd>的height属性中
        2).
            ---> 不为空
            ---> 进行折叠操作
        
        3). getSubTree Mock 数据实现
        
            ---> 根据传递过来的 parent_id 使用 filter 方法进行数据赛选
            
                [`GET ${apiPrefix}/getSubTree`] (req, res) {
                    const { parent_id } = req.body;
                    database.tree.filter( i => i.parent_id === parent_id);
                    res.status(200).json({
                      data: database,
                      msg:'OK'
                    })
                 },
                 
            ---> 在 config/API 文件中注册 getSubTree URL
            
                getSubTrees:`${APIV1}/tree/getSubTree`,
                
            ---> 在 service 中定义接口
            
                export function getSubTree(data) {
                  return request({
                    'url': getSubTrees,
                    'method': 'post',
                    data
                  })
                }
        
            ---> 在 model 中设置异步 action 
            
                *getSubTree({payload},{select,call,put}){
                  const id = payload;
                  const open = id;
                  yield put({
                    'type':'setOpen',
                    'payload':open
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
                      'type':'setTreeLength',
                      'payload':treeLength
                    });
            
                    yield put({
                      'type':'saveTree',
                      'payload':tree
                    });
                  }
                  yield put({
                    'type':'toggleOpen',
                    'payload':id
                  });
                },
                
        4).二级目录的收缩
        
            将当前条目的 open 取反
            
    2018-06-20
    ---------------------------------------------------------------------------
    4.点击图片查看大图：
      1）、为图片上层添加眼睛符号，并绑定点击事件：
      





        
