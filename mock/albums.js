const qs = require('qs');
const Mock = require('mockjs');
const config = require('../src/utils/config');

const { apiPrefix } = config;

let albumsTreeData = Mock.mock({
  'data':{
    'total':'125',
    'tree':[
      {'name':'\u672a\u5206\u7c7b','subFolder':[],'id': '0','picNum': '0','open':false},
      {'name':'\u9165\u68a8','parent_id':'0','id':'2148384','picNum':'30','open':false},
      {'name':'\u6cb9\u6843','parent_id':'0','id':'2148407','picNum':'0','open':false},
      {'name':'\u516c\u53f8\u4fe1\u606f','parent_id':'0','id':'2148411','picNum':'95','open':false}
    ]
  }
});

let database = albumsTreeData.data;

module.exports = {
  [`GET ${apiPrefix}/tree`] (req, res) {

    res.status(200).json({
      data: database,
      msg:'OK'
    })
  },
  [`POST ${apiPrefix}/tree/update`] (req, res) {
    const { id, name } = req.body;
    const {tree} = database;

    let _tree = Array.from(tree);
    let duplication = _tree.find(i => i.name === name && i.id !== id );


    if(duplication){
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

