const Mock = require('mockjs');
const config = require('../src/utils/config');
const process = require('../src/utils/dataProcessing');
const countriesData = require('./json/countries');

const { apiPrefix,NOTFOUND } = config;
const { queryArray } = process;

const countriesListData = Mock.mock({
  data:countriesData
});
let database = countriesListData.data;
module.exports = {
  [`GET ${apiPrefix}/country`] (req, res) {
    const { query } = req;
    const { id } = query;
    const data = queryArray(database, id, 'id');
    console.log(data);
    if (data) {
      res.status(200).json(data)
    } else {
      res.status(404).json(NOTFOUND)
    }
  }
};
