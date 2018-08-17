const qs = require('qs');
const Mock = require('mockjs');
const config = require('../src/utils/config');

const { apiPrefix } = config;

let shopInfoData =Mock.mock({
  data:{
    info:{
      company_name:'北京恒邦信大国际贸易有限公司上海分公司',
      shop_name:'欧居汇',
      company_type: 2,
      shop_logo:'https://www.oujuhui.com/static/home/pc/images/logo.png',
      category_id:[1,2],
      country_id:'120',
      address:'上海市徐汇区文定路209号文定生活A座6层',
      contact:'吴海涛',
      title:'经理',
      email:'info@oujuhui.com',
      mobile:'13852104563'
    }
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
  }
};
