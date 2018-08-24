const qs = require('qs');
const Mock = require('mockjs');
const config = require('../src/utils/config');

const { apiPrefix } = config;
const queryArray = (array, key, keyAlias = 'key') => {
  if (!(array instanceof Array)) {
    return null
  }
  let data

  for (let item of array) {
    if (item[keyAlias] === key) {
      data = item
      break
    }
  }

  if (data) {
    return data
  }
  return null
}

const NOTFOUND = {
  message: 'Not Found',
  documentation_url: 'http://localhost:8000/request',
}

let shopInfoData =Mock.mock({
  data:{
    // info:{
    //   company_name:'北京恒邦信大国际贸易有限公司上海分公司',
    //   shop_name:'欧居汇',
    //   company_type: 2,
    //   shop_logo:'https://www.oujuhui.com/static/home/pc/images/logo.png',
    //   category_id:[1,2],
    //   country_id:'120',
    //   address:'上海市徐汇区文定路209号文定生活A座6层',
    //   contact:'吴海涛',
    //   title:'经理',
    //   email:'info@oujuhui.com',
    //   mobile:'13852104563'
    // }
    info:{
      company_name:null,
      shop_name:null,
      company_type: null,
      shop_logo:null,
      category_id:[],
      country_id:null,
      address:null,
      contact:null,
      title:null,
      email:null,
      mobile:null
    },
    admins:[
      // {id:'1',username:'Leo Du',name:'杜朝辉',title:'经理',contactNumber:'15824461949',userMode:'1',authorization:'1'},
      // {id:'2',username:'Tom Wu',name:'吴海涛',title:'总经理',contactNumber:'13854268956',userMode:'1',authorization:'1'}
      {
        key: '1',
        id: '1',
        username: 'John-Wu',
        name:'吴海涛',
        title: ['懂事长', '化学代表'],
        contactNumber: '15874124563',
        userMode:1,
        authorization:1,
      }, {
        key: '2',
        id: '2',
        username: 'Jim-Wu',
        name:'吴奇隆',
        title: ['总经理'],
        contactNumber: '13958021234',
        userMode:0,
        authorization:0,

      }, {
        key: '3',
        id: '3',
        username: 'Joe-Wu',
        name:'吴亦凡',
        title: ['销售总监', '总设计师'],
        contactNumber: '13698526325',
        userMode:1,
        authorization:1,
      }
    ]
  }
});
let database = shopInfoData.data;
module.exports = {
  [`GET ${apiPrefix}/shop/info`] (req, res) {
    const {info} = database;
    res.status(200).json({
      data: {...info},
      msg:'OK'
    })
  },
  [`POST ${apiPrefix}/shop/info/update`] (req, res) {
    const  info = req.body;
    database = {...database,info};
    res.status(200).json({msg: '提交成功' })
  },
  [`GET ${apiPrefix}/shop/admins`] (req, res) {
    const {admins} = database;
    res.status(200).json({
      data: [...admins],
      msg:'OK'
    })
  },
  [`POST ${apiPrefix}/shop/admin`] (req, res) {
    const { id } = req.body;
    let { admins } = database;
    const data = queryArray(admins, id, 'id');


    if (data) {
      admins = admins.filter(item => item.id !== id);
      database = {...database,admins};
      res.status(200).json({status:1,msg: '删除成功' })
      // res.status(204).end()
    } else {
      res.status(404).json(NOTFOUND)
    }
  },
};
