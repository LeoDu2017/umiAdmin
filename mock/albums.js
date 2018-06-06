const qs = require('qs');
const Mock = require('mockjs');
const config = require('../src/utils/config');

const { apiPrefix } = config;

let albumsTreeData = Mock.mock({
  'data':{
    'total':'125',
    'tree':[
      {'name':'\u672a\u5206\u7c7b','parent_id':'-1','subFolder':[],'id': '0','picNum': '0','open':false},
      {'name':'\u9165\u68a8','parent_id':'-1','subFolder':[],'id':'2148384','picNum':'30','open':false},
      {'name':'\u6cb9\u6843','parent_id':'-1','subFolder':[],'id':'2148407','picNum':'0','open':false},
      {'name':'\u516c\u53f8\u4fe1\u606f','subFolder':[],'parent_id':'-1','id':'2148411','picNum':'95','open':false},
      {name: "a", parent_id: "2148407", id: "820000197710314456", subFolder: [], picNum: 0, open: false},
      {name: "b", parent_id: "2148407", id: "820000197710314", subFolder: [], picNum: 0, open: false},
      {name: "c", parent_id: "2148407", id: "82000019771036", subFolder: [], picNum: 0, open: false},
      {name: "d", parent_id: "2148407", id: "820000114456", subFolder: [], picNum: 0, open: false},
    ]
  }
});

let database = albumsTreeData.data;

module.exports = {
  [`GET ${apiPrefix}/tree`] (req, res) {

    const {tree} = database;
    const t = tree.filter( i => i.parent_id === '-1');
    res.status(200).json({
      data: {...database,tree:t},
      msg:'OK'
    })
  },
  [`GET ${apiPrefix}/tree/getSubTrees`] (req, res) {

    const { parent_id } = req.query;

    const {tree} = database;
    const subtree = tree.filter( i => i.parent_id === parent_id);

    res.status(200).json({
      data: subtree,
      msg:'OK'
    })
  },
  [`POST ${apiPrefix}/tree/storeSubTree`] (req, res) {
    const { parent_id, name } = req.body;
    const new_tree = {
      name,
      parent_id,
      id:Mock.mock('@id'),
      subFolder:[],
      picNum:0,
      open:false
    };
    database.tree.push(new_tree);

    res.status(200).json({success:true,msg:'添加成功'})
  },
  [`POST ${apiPrefix}/tree/update`] (req, res) {
    const { id, name } = req.body;
    const {tree} = database;
    // 将tree对象转化为数组
    let _tree = Array.from(tree);
    // 检测当ID不等于当前ID，修改名称与当前名称是否相等
    let duplication = _tree.find(i => i.name === name && i.id !== id );

    if(duplication){
      // 当存在相同名称时 提示保存失败
      res.status(200).json({success:false,msg: '名称重合' })
    }else{
      tree.forEach(i => {
        if(i.id === id){
          i.name = name
        }
      });
      database = {...database,tree};
      res.status(200).json({msg: '提交成功' })
    }

  },
};

