const qs = require('qs');
const Mock = require('mockjs');
const config = require('../src/utils/config');

const { apiPrefix } = config;

let albumsTreeData = Mock.mock({
  'data':{
    'total':'125',
    'tree':[
      {'name':'\u672a\u5206\u7c7b','parent_id':'-1','subFolder':[],'id': '0','picNum': '0','open':false,'actions_type':'0'},

      {'name':'\u9165\u68a8','parent_id':'-1','subFolder':[],'id':'2148384','picNum':'30','open':false,'actions_type':'1'},
      {'name':'\u6cb9\u6843','parent_id':'-1','subFolder':[],'id':'2148407','picNum':'0','open':false,'actions_type':'1'},
      {'name':'\u516c\u53f8\u4fe1\u606f','parent_id':'-1','subFolder':[],'id':'2148411','picNum':'95','open':false,'actions_type':'1'},

      {'name': "a", 'parent_id': "2148407", 'subFolder': [], 'id': "820000197710314456", 'picNum': 0, 'open': false,'actions_type':'2'},
      {'name': "b", 'parent_id': "2148407", 'subFolder': [], 'id': "820000197710314",  'picNum': 0, 'open': false,'actions_type':'2'},
      {'name': "c", 'parent_id': "2148407", 'subFolder': [], 'id': "82000019771036",  'picNum': 0, 'open': false,'actions_type':'2'},
      {'name': "d", 'parent_id': "2148407", 'subFolder': [], 'id': "820000114456",  'picNum': 0, 'open': false,'actions_type':'2'},
    ],
    'pictures':[
      {
        "id": "1468954",
        "file": "http:\/\/img.supvip.cn\/4d\/a2\/8046600\/2018-06\/5b15df68abb29.jpg",
        "name": "ph1807-p02432.jpg",
        "category_img_id": "2148407"
      },
      {
        "id": "1468947",
        "file": "http:\/\/img.supvip.cn\/4d\/a2\/8046600\/2018-06\/5b15df2c0c1cf.jpg",
        "name": "ul2892-0508.jpg",
        "category_img_id": "2148407"
      },
      {
        "id": "1468946",
        "file": "http:\/\/img.supvip.cn\/4d\/a2\/8046600\/2018-06\/5b15df2bbe903.jpg",
        "name": "ul1602-5680.jpg",
        "category_img_id": "2148407"
      },
      {
        "id": "1468945",
        "file": "http:\/\/img.supvip.cn\/4d\/a2\/8046600\/2018-06\/5b15df2b7c7ee.jpg",
        "name": "ul1546-0130.jpg",
        "category_img_id": "2148407"
      },
      {
        "id": "1468944",
        "file": "http:\/\/img.supvip.cn\/4d\/a2\/8046600\/2018-06\/5b15df2b3fe85.jpg",
        "name": "ul0847-7477.jpg",
        "category_img_id": "2148407"
      },
      {
        "id": "1468943",
        "file": "http:\/\/img.supvip.cn\/4d\/a2\/8046600\/2018-06\/5b15df2b05023.jpg",
        "name": "ul0845-1179.jpg",
        "category_img_id": "2148407"
      },
      {
        "id": "1468942",
        "file": "http:\/\/img.supvip.cn\/4d\/a2\/8046600\/2018-06\/5b15df2ab0936.jpg",
        "name": "ul0465-3500.jpg",
        "category_img_id": "2148407"
      },
      {
        "id": "1468941",
        "file": "http:\/\/img.supvip.cn\/4d\/a2\/8046600\/2018-06\/5b15df2a6ba76.jpg",
        "name": "ul0277-2570.jpg",
        "category_img_id": "2148407"
      },
      {
        "id": "1458563",
        "file": "http:\/\/img.supvip.cn\/4d\/a2\/8046600\/2018-05\/5b0f4d468912f.jpg",
        "name": "wu.jpg",
        "category_img_id": "2148411"
      },
      {
        "id": "1458559",
        "file": "http:\/\/img.supvip.cn\/4d\/a2\/8046600\/2018-05\/5b0f4d4559b32.png",
        "name": "tip.png",
        "category_img_id": "2148411"
      },
      {
        "id": "1458556",
        "file": "http:\/\/img.supvip.cn\/4d\/a2\/8046600\/2018-05\/5b0f4d448cf9c.jpg",
        "name": "team2.jpg",
        "category_img_id": "2148411"
      },
      {
        "id": "1458555",
        "file": "http:\/\/img.supvip.cn\/4d\/a2\/8046600\/2018-05\/5b0f4d443c245.jpg",
        "name": "team1.jpg",
        "category_img_id": "2148411"
      },
      {
        "id": "1458554",
        "file": "http:\/\/img.supvip.cn\/4d\/a2\/8046600\/2018-05\/5b0f4d43e58b1.jpg",
        "name": "supply4.jpg",
        "category_img_id": "2148411"
      },
      {
        "id": "1458553",
        "file": "http:\/\/img.supvip.cn\/4d\/a2\/8046600\/2018-05\/5b0f4d439e190.jpg",
        "name": "supply3.jpg",
        "category_img_id": "2148411"
      },
      {
        "id": "1458552",
        "file": "http:\/\/img.supvip.cn\/4d\/a2\/8046600\/2018-05\/5b0f4d4355d7d.jpg",
        "name": "supply2.jpg",
        "category_img_id": "2148411"
      },
      {
        "id": "1458551",
        "file": "http:\/\/img.supvip.cn\/4d\/a2\/8046600\/2018-05\/5b0f4d43094de.jpg",
        "name": "supply1.jpg",
        "category_img_id": "2148411"
      },
      {
        "id": "1458550",
        "file": "http:\/\/img.supvip.cn\/4d\/a2\/8046600\/2018-05\/5b0f4d42b169c.png",
        "name": "showAll.png",
        "category_img_id": "2148411"
      },
      {
        "id": "1458549",
        "file": "http:\/\/img.supvip.cn\/4d\/a2\/8046600\/2018-05\/5b0f4d4260532.jpg@!w640",
        "name": "room_default.jpg",
        "category_img_id": "2148411"
      },
      {
        "id": "1458547",
        "file": "http:\/\/img.supvip.cn\/4d\/a2\/8046600\/2018-05\/5b0f4d419a85b.png",
        "name": "QQ.png",
        "category_img_id": "2148411"
      },
      {
        "id": "1458546",
        "file": "http:\/\/img.supvip.cn\/4d\/a2\/8046600\/2018-05\/5b0f4d4157e72.jpg@!w640",
        "name": "price.jpg",
        "category_img_id": "2148411"
      },
      {
        "id": "1458545",
        "file": "http:\/\/img.supvip.cn\/4d\/a2\/8046600\/2018-05\/5b0f4d40f1f16.jpg",
        "name": "platform1.jpg",
        "category_img_id": "2148411"
      },
      {
        "id": "1458544",
        "file": "http:\/\/img.supvip.cn\/4d\/a2\/8046600\/2018-05\/5b0f4d40b1b1e.png",
        "name": "phone.png",
        "category_img_id": "2148411"
      },
      {
        "id": "1458543",
        "file": "http:\/\/img.supvip.cn\/4d\/a2\/8046600\/2018-05\/5b0f4d406bca0.jpg@!w640",
        "name": "maintenance.jpg",
        "category_img_id": "2148411"
      },
      {
        "id": "1458542",
        "file": "http:\/\/img.supvip.cn\/4d\/a2\/8046600\/2018-05\/5b0f4d4025388.png",
        "name": "logo.png",
        "category_img_id": "2148411"
      },
      {
        "id": "1458541",
        "file": "http:\/\/img.supvip.cn\/4d\/a2\/8046600\/2018-05\/5b0f4d3fdc2c2.jpg",
        "name": "logistics.jpg",
        "category_img_id": "2148411"
      },
      {
        "id": "1458540",
        "file": "http:\/\/img.supvip.cn\/4d\/a2\/8046600\/2018-05\/5b0f4d3f96686.png",
        "name": "kefu.png",
        "category_img_id": "2148411"
      },
      {
        "id": "1458539",
        "file": "http:\/\/img.supvip.cn\/4d\/a2\/8046600\/2018-05\/5b0f4d3f5f446.png",
        "name": "join-out.png",
        "category_img_id": "2148411"
      },
      {
        "id": "1458538",
        "file": "http:\/\/img.supvip.cn\/4d\/a2\/8046600\/2018-05\/5b0f4d3f1d282.png",
        "name": "join-in.png",
        "category_img_id": "2148411"
      }
    ]
  }
});

let database = albumsTreeData.data;

module.exports = {
  [`GET ${apiPrefix}/albums/tree`] (req, res) {

    const {tree} = database;
    const t = tree.filter( i => i.parent_id === '-1');
    res.status(200).json({
      data: {...database,tree:t},
      msg:'OK'
    })
  },
  [`GET ${apiPrefix}/albums/tree/getSubTrees`] (req, res) {

    const { parent_id } = req.query;

    const {tree} = database;
    const subtree = tree.filter( i => i.parent_id === parent_id);

    res.status(200).json({
      data: subtree,
      msg:'OK'
    })
  },
  [`POST ${apiPrefix}/albums/tree/storeSubTree`] (req, res) {
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
  [`POST ${apiPrefix}/albums/tree/update`] (req, res) {
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
  [`GET ${apiPrefix}/albums/pictures`] (req, res) {
    const { query } = req;
    let { pageSize, page, ...other } = query;
    pageSize = pageSize || 10;
    page = page || 1;

    let newData = database.pictures;
    // for (let key in other) {
    //   if ({}.hasOwnProperty.call(other, key)) {
    //     newData = newData.filter((item) => {
    //       if ({}.hasOwnProperty.call(item, key)) {
    //         if (key === 'address') {
    //           return other[key].every(iitem => item[key].indexOf(iitem) > -1)
    //         } else if (key === 'createTime') {
    //           const start = new Date(other[key][0]).getTime()
    //           const end = new Date(other[key][1]).getTime()
    //           const now = new Date(item[key]).getTime()
    //
    //           if (start && end) {
    //             return now >= start && now <= end
    //           }
    //           return true
    //         }
    //         return String(item[key]).trim().indexOf(decodeURI(other[key]).trim()) > -1
    //       }
    //       return true
    //     })
    //   }
    // }

    res.status(200).json({
      data: newData.slice((page - 1) * pageSize, page * pageSize),
      total: newData.length,
    });
  },
};

