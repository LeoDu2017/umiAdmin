文件描述：
该文件夹用来放置公用组件包含：图册组件（Albums）、自定义下拉框组件（Dropdown）、自定义图标组件（Svg）；

图册组件（Albums）:
一、操作
  1 添加下级树文件夹：
    根据功能要求将这个动作解构为两个动作。
    1）、addSubTree动态操控DOM在页面中动态插入一个空白文本输入框；
        构思Rect的架构思想的核心就是数据驱动，更新视图首先要从根本的模型更新入手，与传统的JQuery直接修改DOM结构有本质上的区别。
        根据数据驱动的思想首先我们要操作就对state的tree对象的更改。即往tree数组中添加一条默认数据；
        
        export function addSubTree(id,tree,dispatch){
          const parentId = id;                                                       // 将传入的当前ID设置为新建条目的ParentID
          let num = Math.ceil(Math.random() * 100) * Math.ceil(Math.random() * 100); // 获得一个随机数作为心条目的ID
          const doublication = Boolean(_.find(tree, { id: -num }));                  // 检查新生的ID是否已存在
          const currentEditTree = doublication ? -num*100 : -num;                    // 存在的情况下将该ID成100
          const currentTree = doublication ? -num*100 : -num;
          tree.push({
            'name':'未命名文件夹',
            'parent_id':parentId,
            'id':currentTree,
            'picNum':num,
            'open':false
          });
          dispatch({
            type:'albums/appendSubTree',
            payload:tree,currentEditTree,currentTree
          })
        }
        
    2）、saveSubTree当输入完成点击保存后执行异步操作传递两个参数：
        （1）、当前选中树的ID（currentTree）作为父级ID传给服务端；
        （2）、当前输入名称；
