const Mock = require('mockjs');
const config = require('../src/utils/config');
const process = require('../src/utils/dataProcessing');
const brandsData = require('./json/mybrands');

const { apiPrefix,NOTFOUND } = config;
const { queryArray } = process;
// Mock.mock('@id')
const brandsListData = Mock.mock({
  data:brandsData
});
let database = brandsListData.data;

module.exports = {
  [`GET ${apiPrefix}/brand/list`] (req, res) {
    const { query } = req;
    let { pageSize, page, ...other } = query;
    pageSize = pageSize || 10;
    page = page || 1;

    let newData = database;

    // for (let key in other) {
    //   if ({}.hasOwnProperty.call(other, key)) {
    //
    //     newData = newData.filter((item) => {
    //       const {password,...rest} = item;
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
    // newData = newData.map(item => {
    //   const {password,...reset} = item;
    //   return reset
    // });
    res.status(200).json({
      data: newData.slice((page - 1) * pageSize, page * pageSize),
      total: newData.length,
    })
  },
};
